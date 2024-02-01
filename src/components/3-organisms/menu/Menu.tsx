import { Divider, Flex, Spacer, useColorModeValue, useMediaQuery } from '@chakra-ui/react';
import { ColorModeSwitcher } from './components/ColorModeSwitcher';
import HomeButton from './components/HomeButton';
import NavButton from './components/NavButton';
import { NavRoutes } from '../../../router/routes';
import { GAMES_INGO } from '../../../costants/games';


const Menu = () => {
  const bg = useColorModeValue('gray.200', 'gray.900');
  const [isLargerThanMd] = useMediaQuery('(min-width: 768px)');

  return (
    <Flex
      position={'sticky'}
      bottom={0}
      flexDirection={{base: 'row-reverse', md: 'column'}}
      gap={3}
      bg={bg}
      p={4}
    >
      <HomeButton />
      <Divider  orientation={isLargerThanMd ? 'horizontal' : 'vertical'}/>
      {
        GAMES_INGO.map((game) => (
          <NavButton 
            key={game.id}
            to={`${NavRoutes.gamePagePath}/${game.id}`}
            icon={game.icon}
            aria-label={`Navigate to ${game.title} page`}
          />
        ))
      }
      <Spacer />
      <ColorModeSwitcher />
    </Flex>
  );
};

export default Menu;