import { Divider, Spacer, VStack, useColorModeValue } from '@chakra-ui/react';
import { ColorModeSwitcher } from './components/ColorModeSwitcher';
import HomeButton from './components/HomeButton';
import NavButton from './components/NavButton';
import { NavRoutes } from '../../../router/routes';
import { GAMES_INGO } from '../../../costants/games';


const Menu = () => {
  const bg = useColorModeValue('gray.200', 'gray.900');

  return (
    <VStack bg={bg} p={4}>
      <HomeButton />
      <Divider/>
      {
        GAMES_INGO.map((game) => (
          <NavButton 
            to={`${NavRoutes.gamePagePath}/${game.id}`}
            icon={game.icon}
            aria-label={`Navigate to ${game.title} page`}
          />
        ))
      }
      <Spacer />
      <ColorModeSwitcher />
    </VStack>
  );
};

export default Menu;