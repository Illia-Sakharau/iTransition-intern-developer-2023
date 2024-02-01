import { HStack, ModalHeader, Spinner, Tag, Text } from "@chakra-ui/react";

type Props = {
  aponent?: string;
}

const GameModalHeader = ({ aponent }: Props) => {
  const username = localStorage.getItem('username') || 'Anonimus';

  return (
    <ModalHeader textAlign={'center'}>
      <Tag size='lg' colorScheme='blue' borderRadius='full'>
        {username} (you)
      </Tag>
      {' VS '}
      { 
        aponent 
        ? 
        <Tag size='lg' colorScheme='red' borderRadius='full'>
          {aponent}
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
