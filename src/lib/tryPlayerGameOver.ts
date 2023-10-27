import { GameState, Player } from "../types";

const getIsGameOver = ({ gameOver }: Player) => gameOver;

export const tryPlayerGameOver = ({ players }: GameState, id: string) => {
  const { [id]: player, ...rivals } = players;
  const isLastPlayer = Object.values(rivals).every(getIsGameOver);

  if (!isLastPlayer) {
    const gameOver = player?.buds.length === 0;
    player.gameOver = gameOver;
  }
};
