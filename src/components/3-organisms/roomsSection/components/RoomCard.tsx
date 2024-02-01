import { Card, CardBody, Text, useColorModeValue, useDisclosure } from "@chakra-ui/react";
import { roomsInfo } from "../../../../types/rooms";
import ModalGame from "../../modalGame/ModalGame";

const RoomCard = (room: roomsInfo) => {
  const hoverBG = useColorModeValue('purple.100', 'purple.800');
  const textColor = useColorModeValue('purple.800', 'purple.50');
  const { isOpen, onOpen, onClose } = useDisclosure()

  const handleJoin = () => {
    console.log(room);
    onOpen()
  }
  const handleUnjoin = () => {
    onClose()
  }

  return (
    <>
      <Card
        maxW='sm'
        boxShadow='md'
        _hover={{
          cursor: 'pointer',
          bg: hoverBG
        }}
        onClick={handleJoin}
      >
        <CardBody color={textColor}>
          <Text fontSize='sm' noOfLines={1}># {room.id}</Text>
          <Text as={'b'} fontSize='xl' noOfLines={1}>{room.owner}</Text>
        </CardBody>
      </Card>
      <ModalGame isOpen={isOpen} onClose={handleUnjoin} aponent={room.owner} game={<>GAME</>} />
    </>
  );
};

export default RoomCard;