import { SimpleGrid, VStack } from "@chakra-ui/react";
import { GAMES_INGO } from "../../../costants/games";
import GameCard from "./components/GameCard";
import MyHeading from "../../1-atoms/MyHeading";

const GamesSection = () => {

  return (
    <VStack gap={4} alignSelf={'stretch'}>
      <MyHeading title={'Games'}/>
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
