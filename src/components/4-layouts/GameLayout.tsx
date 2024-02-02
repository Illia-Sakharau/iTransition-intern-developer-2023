import { Container, useDisclosure } from "@chakra-ui/react";
import { Outlet, useLocation } from "react-router-dom";
import GameHeading from "../3-organisms/GameHeading";
import { GAMES_INGO, gameInfo } from "../../costants/games";
import { Socket, io } from "socket.io-client";
import { roomsInfo } from "../../types/rooms";
import { useEffect, useState } from "react";
import ModalGame from "../3-organisms/modalGame/ModalGame";

export type ContextType = { 
  rooms: roomsInfo[];
  joinRoom: (room: roomsInfo) => void;
};

let socket: Socket

const GameLayout = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const username = localStorage.getItem('username') || 'Anonimus';
  const gameID = useLocation().pathname.split('/').reverse()[0];
  const game = GAMES_INGO.find((game) => game.id === gameID) as gameInfo;
  const [ rooms, setRooms ] = useState<roomsInfo[]>([]);
  const [ room, setRoom ] = useState<roomsInfo | null>(null);


  const startRoom = () => {
    onOpen()
    setRoom({
      id: `${socket.id}`,
      owner: username
    })
    socket.emit('create_room', username)
  }
  const closeRoom = () => {
    onClose()
    socket.emit('close_room', room?.id)
  }
  const joinRoom = (targetRoom: roomsInfo) => {
    setRoom({...(targetRoom as roomsInfo), aponent: username})
    socket.emit('join_room', { id: targetRoom.id, aponent: username })
    onOpen()
  }

  useEffect(() => {
    socket = io(`http://localhost:8080/${gameID}`);

    socket.on('room_closed', () => {
      console.log('room_closed');
      onClose()
      setRoom(null)
    })
    socket.on('aponent_joined', (aponent) => {
      console.log('aponent_joined');
      setRoom((currentRoom) => ({...(currentRoom as roomsInfo), aponent}))
    })
    socket.on('all_rooms', (data) => {
      console.log('all_rooms');
      
      setRooms(data.rooms)
    })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [gameID])

  return (
    <>
      <Container
        maxW='6xl'
        px={{base: 4, md: 8}}
        py={8}
      >
        <GameHeading game={game} startRoom={startRoom} />
        <Outlet context={{ rooms, joinRoom } satisfies ContextType}/>
      </Container>

      <ModalGame isOpen={isOpen} onClose={closeRoom} room={room as roomsInfo} game={<>NEW GAME</>} />
    </>
  );
};

export default GameLayout
