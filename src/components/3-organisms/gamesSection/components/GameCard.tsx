import { Card, CardBody, Center, Heading, useColorModeValue } from "@chakra-ui/react";
import { gameInfo } from "../../../../costants/games";
import { NavLink } from "react-router-dom";
import { NavRoutes } from "../../../../router/routes";

const GameCard = (game: gameInfo) => {
  const hoverBG = useColorModeValue('purple.100', 'purple.800');
  const textColor = useColorModeValue('purple.800', 'purple.50');

  return (
    <Card 
      as={NavLink}
      to={`${NavRoutes.gamePagePath}/${game.id}`}
      maxW='sm'
      boxShadow='md'
      align='center'
      _hover={{
        cursor: 'pointer',
        bg: hoverBG
      }}
    >
      <Center pt={6}>
        {game.icon({boxSize: 20, color: 'purple.500'})}
      </Center>
      <CardBody color={textColor}>
        <Heading size='sm' as={'h6'}>{game.title}</Heading>
      </CardBody>
    </Card>
  );
};

export default GameCard;