import { Button, Flex, HStack, useDisclosure } from "@chakra-ui/react";
import { gameInfo } from "../../costants/games";
import MyHeading from "../1-atoms/MyHeading";
import ModalGame from "./modalGame/ModalGame";

const GameHeading = (game: gameInfo) => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  const handleStartGame = () => {
    onOpen()
    console.log(game);    
  }
  const handleFinishGame = () => {
    onClose()
    console.log(game);    
  }

  return (
    <>
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
      <ModalGame isOpen={isOpen} onClose={handleFinishGame} game={<>NEW GAME</>} />
    </>
  );
};

export default GameHeading;
