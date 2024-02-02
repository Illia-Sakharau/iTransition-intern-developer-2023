import { Container } from "@chakra-ui/react";
import { Outlet, useLocation } from "react-router-dom";
import GameHeading from "../3-organisms/GameHeading";
import { GAMES_INGO, gameInfo } from "../../costants/games";
import { Socket, io } from "socket.io-client";
import { roomsInfo } from "../../types/rooms";
import { useEffect, useState } from "react";

export type ContextType = { rooms: roomsInfo[] };

let socket: Socket

const GameLayout = () => {
  const username = localStorage.getItem('username') || 'Anonimus';
  const gameID = useLocation().pathname.split('/').reverse()[0];
  const game = GAMES_INGO.find((game) => game.id === gameID) as gameInfo;
  const [ rooms, setRooms ] = useState<roomsInfo[]>([]);
  const [ roomID, setRoomID ] = useState('');

  socket = io(`https://task-7-server-cicp.onrender.com/${gameID}`);

  const startRoom = () => {
    setRoomID(`${socket.id}`)
    socket.emit('create_room', username)
  }
  const closeRoom = () => {
    socket.emit('close_room', roomID)
  }

  useEffect(() => {
    socket.on('all_rooms', (data) => {
      setRooms(data.rooms)
    })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [gameID])

  return (
    <Container
      maxW='6xl'
      px={{base: 4, md: 8}}
      py={8}
    >
      <GameHeading game={game} startRoom={startRoom} closeRoom={closeRoom} />
      <Outlet context={{ rooms } satisfies ContextType}/>
    </Container>
  );
};

export default GameLayout
