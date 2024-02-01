import { SimpleGrid, VStack } from "@chakra-ui/react";
import MyHeading from "../../1-atoms/MyHeading";
import { roomsInfo } from "../../../types/rooms";
import RoomCard from "./components/RoomCard";

type Props = {
  rooms: roomsInfo[]
}

const RoomsSection = ({ rooms }:Props) => {
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
      <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(200px, 1fr))'>
        {rooms.map((room) => <RoomCard key={room.id} {...room}/>)}
      </SimpleGrid>
    </VStack>
  );
};

export default RoomsSection;
