import { SimpleGrid, VStack, Text } from "@chakra-ui/react";
import MyHeading from "../../1-atoms/MyHeading";
import { roomsInfo } from "../../../types/rooms";
import RoomCard from "./components/RoomCard";

type Props = {
  rooms: roomsInfo[]
  joinRoom: (room: roomsInfo) => void;
}

const RoomsSection = ({ rooms, joinRoom }:Props) => {
  return (
    <VStack
      gap={4}
      alignItems={'stretch'}
      alignSelf={'stretch'}
      mt={8}
    >
      <MyHeading
        title='Available Rooms'
        as='h3'
        size='lg'
      />
      {
        rooms.length === 0 
        ?
        <div>
          <Text>There are no active/free rooms.</Text>
          <Text>Start your game.</Text>
        </div>
        :
        <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(200px, 1fr))'>
          {rooms.map((room) => (
            <RoomCard 
              key={room.id}
              room={room}
              handleJoin={() => joinRoom(room)}
            />
          ))}
        </SimpleGrid>
      }
    </VStack>
  );
};

export default RoomsSection;
