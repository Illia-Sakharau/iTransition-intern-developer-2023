import { Button, Flex, HStack, useDisclosure } from "@chakra-ui/react";
import { gameInfo } from "../../costants/games";
import MyHeading from "../1-atoms/MyHeading";
import ModalGame from "./modalGame/ModalGame";

type Props = {
  game: gameInfo;
  startRoom: () => void;
  closeRoom: () => void;
}

const GameHeading = ({game, startRoom, closeRoom}: Props) => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  const handleStartGame = () => {
    onOpen()
    startRoom()
  }
  const handleFinishGame = () => {
    onClose()
    closeRoom()
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
