import { Button, Flex, HStack } from "@chakra-ui/react";
import { gameInfo } from "../../costants/games";
import MyHeading from "../1-atoms/MyHeading";

const GameHeading = (game: gameInfo) => {

  const handleStartGame = () => {
    console.log(game);    
  }

  return (
    <Flex
      gap={4}
      wrap={'wrap'}
      alignItems={'center'}
    >
      <HStack
        flexGrow={1}
      >
        {game.icon({boxSize: 12})}
        <MyHeading title={game.title} noOfLines={1}/>
      </HStack>
      <Button
        colorScheme="purple"
        size='lg'
        onClick={handleStartGame}
      >
        Start New Game
      </Button>
    </Flex>
  );
};

export default GameHeading;
