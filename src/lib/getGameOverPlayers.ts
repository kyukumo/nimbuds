import { GameOverPlayers, GameOverState, GameState } from "../types";

export const getGetGameOverPlayers =
  (game: GameState) => (all: GameOverPlayers, id: string) => {
    const { gameOver } = game.players[id];
    const value: GameOverState = gameOver ? "LOST" : "WON";

    return {
      ...all,
      [id]: value,
    };
  };
