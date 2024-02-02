import { HStack, ModalHeader, Spinner, Tag, Text } from "@chakra-ui/react";
import { roomsInfo } from "../../../../types/rooms";

type Props = {
  room: roomsInfo;
}

const GameModalHeader = ({ room }: Props) => {
  const username = localStorage.getItem('username') || 'Anonimus';
  const isOwner = room.owner === username;

  return (
    <ModalHeader textAlign={'center'}>
      <Tag size='lg' colorScheme='blue' borderRadius='full'>
        {room.owner} {isOwner && '(you)'}
      </Tag>
      {' VS '}
      { 
        room.aponent 
        ? 
        <Tag size='lg' colorScheme='red' borderRadius='full'>
          {room.aponent} {!isOwner && '(you)'}
        </Tag>
        :
        <HStack display={'inline-flex'} ml={2} color={'purple.500'}>
          <Spinner color='purple.500'/>
          <Text>Wait opponent...</Text>
        </HStack>
      }
    </ModalHeader>
  );
};

export default GameModalHeader;
