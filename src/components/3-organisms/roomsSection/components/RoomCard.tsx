import { Card, CardBody, Text, useColorModeValue } from "@chakra-ui/react";
import { roomsInfo } from "../../../../types/rooms";

type Props = {
  room: roomsInfo;
  handleJoin: () => void
}

const RoomCard = ({room, handleJoin}: Props) => {
  const hoverBG = useColorModeValue('purple.100', 'purple.800');
  const textColor = useColorModeValue('purple.800', 'purple.50');
  const isActive = !room.aponent

  return (
    <>
      <Card
        maxW='sm'
        boxShadow='md'
        _hover={isActive ? {
          cursor: 'pointer',
          bg: hoverBG
        } : undefined}
        opacity={isActive ? '1' : '0.8'}
        onClick={isActive ? handleJoin : undefined}
      >
        <CardBody color={textColor}>
          <Text fontSize='sm' noOfLines={1}># {room.id}</Text>
          <Text as={'b'} fontSize='xl' noOfLines={1}>{room.owner}</Text>
        </CardBody>
      </Card>
    </>
  );
};

export default RoomCard;