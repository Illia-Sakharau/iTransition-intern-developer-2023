import { Card, CardBody, Text, useColorModeValue } from "@chakra-ui/react";
import { roomsInfo } from "../../../../types/rooms";

const RoomCard = (room: roomsInfo) => {
  const hoverBG = useColorModeValue('purple.100', 'purple.800');
  const textColor = useColorModeValue('purple.800', 'purple.50');

  const handlJoin = () => {
    console.log(room);    
  }

  return (
    <Card
      maxW='sm'
      boxShadow='md'
      _hover={{
        cursor: 'pointer',
        bg: hoverBG
      }}
      onClick={handlJoin}
    >
      <CardBody color={textColor}>
        <Text fontSize='sm' noOfLines={1}># {room.id}</Text>
        <Text as={'b'} fontSize='xl' noOfLines={1}>{room.owner}</Text>
      </CardBody>
    </Card>
  );
};

export default RoomCard;