import { gameInfo } from "../../../../costants/games";

const GameCard = (game: gameInfo) => {

  return (
    <div>{game.title}</div>
  );
};

export default GameCard;