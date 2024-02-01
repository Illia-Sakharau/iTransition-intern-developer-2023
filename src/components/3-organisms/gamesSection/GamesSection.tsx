import { Heading, SimpleGrid, VStack, useColorModeValue } from "@chakra-ui/react";
import { GAMES_INGO } from "../../../costants/games";
import GameCard from "./components/GameCard";

const GamesSection = () => {
  const textColor = useColorModeValue('purple.900', 'white');

  return (
    <VStack gap={4} alignSelf={'stretch'}>
      <Heading as='h2' size='2xl' color={textColor}>
        Games
      </Heading>
      <SimpleGrid
        spacing={4}
        p={4}
        w={'100%'}
        maxW={'640px'}
        templateColumns='repeat(auto-fill, minmax(200px, 1fr))'
      >
        {GAMES_INGO.map((game) => (
          <GameCard key={game.id} {...game}/>
        ))}
      </SimpleGrid>
    </VStack>
  );
};

export default GamesSection;
