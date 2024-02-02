import { Modal, ModalBody, ModalCloseButton, ModalContent, ModalOverlay } from "@chakra-ui/react";
import { ReactNode } from "react";
import GameModalHeader from "./components/GameModalHeader";
import { roomsInfo } from "../../../types/rooms";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  room: roomsInfo;
  game: ReactNode;
}

const ModalGame = ({ isOpen, onClose, room, game }: Props) => {

  return (
    <Modal size={'6xl'} isCentered isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent m={{base: 2, md: 4, xl: 8}}>
        <GameModalHeader room={room}/>
        <ModalCloseButton />

        <ModalBody 
          border={'solid 1px'}
          borderColor={'gray.500'}
          borderRadius={4}
          m={4}
          mt={0}
        >
          {game}
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default ModalGame;
