import { GameState, Player } from "../types";
import { setEvent } from "./setEvent";

const getIsGameOver = ({ gameOver }: Player) => gameOver;

export const tryPlayerGameOver = (game: GameState, id: string) => {
  const { [id]: player, ...rivals } = game.players;

  const isLastPlayer = Object.values(rivals).every(getIsGameOver);

  if (!isLastPlayer) {
    const gameOver = player?.buds.length === 0;
    const isNewGameOver = gameOver && !player.gameOver;

    if (isNewGameOver)
      setEvent({
        game,
        event: `A rival wiped out!`,
      });

    player.gameOver = gameOver;
  }
};
