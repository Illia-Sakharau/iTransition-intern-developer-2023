import { Outlet } from 'react-router-dom';
import { Flex, VStack } from '@chakra-ui/react';
import Menu from '../3-organisms/menu/Menu';

const RootLayout = () => {

  return (
    <Flex
      flexDirection={{base: 'column-reverse', md: 'row'}}
    >
      <Menu />
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