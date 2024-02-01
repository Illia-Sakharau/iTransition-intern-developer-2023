import { Button, Flex, HStack, Heading, useColorModeValue } from "@chakra-ui/react";
import { gameInfo } from "../../costants/games";

const GameHeading = (game: gameInfo) => {
  const textColor = useColorModeValue('purple.900', 'white');

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
        <Heading as='h2' size='2xl' noOfLines={1} color={textColor}>
          {game.title}
        </Heading>
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
