import { Container } from "@chakra-ui/react";
import { Outlet, useLocation } from "react-router-dom";
import GameHeading from "../3-organisms/GameHeading";
import { GAMES_INGO, gameInfo } from "../../costants/games";

const GameLayout = () => {
  const gameID = useLocation().pathname.split('/').reverse()[0];
  const game = GAMES_INGO.find((game) => game.id === gameID) as gameInfo;
  

  return (
    <Container
      maxW='6xl'
      px={{base: 4, md: 8}}
      py={8}
    >
      <GameHeading {...game}/>
      <Outlet />
    </Container>
  );
};

export default GameLayout
