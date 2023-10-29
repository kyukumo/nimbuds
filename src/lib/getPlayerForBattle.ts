import { GameState } from "../types";

export const getSetPlayerForBattle =
  ({ players }: GameState) =>
  (playerId: string) => {
    const player = players[playerId];
    player.cooldowns = {};
  };
