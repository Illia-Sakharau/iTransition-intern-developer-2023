import { Outlet } from 'react-router-dom';
import { Flex, VStack, useColorModeValue } from '@chakra-ui/react';

const RootLayout = () => {
  const bg = useColorModeValue('gray.100', 'gray.900');

  return (
    <Flex bg={bg}>
      <div>MENU</div>
      <VStack
        as="main"
        alignItems="stretch"
        minH={'100vh'}
        spacing={'0'}
      >
        <Outlet />
      </VStack>
    </Flex>
  );
};

export default RootLayout;