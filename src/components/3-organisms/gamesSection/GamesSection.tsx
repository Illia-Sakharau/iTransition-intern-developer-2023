import { HStack, Heading, VStack } from "@chakra-ui/react";
import { GAMES_INGO } from "../../../costants/games";
import GameCard from "./components/GameCard";

const GamesSection = () => {

  return (
    <VStack gap={4}>
      <Heading as='h2' size='2xl'>
        Games
      </Heading>
      <HStack>
        {GAMES_INGO.map((game) => (
          <GameCard {...game}/>
        ))}
      </HStack>
    </VStack>
  );
};

export default GamesSection;
