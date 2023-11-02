import { GameState } from "../types";
import { getRandomTarget } from "./getRandomTarget";

export const getSetPlayersWithResetTargets =
  ({ players, playerIds }: GameState) =>
  (targetId: string) => {
    const setPlayerWithResetTarget = (playerId: string) => {
      const player = players[playerId];
      if (player.target !== targetId) return;
      player.target = getRandomTarget(playerId, playerIds);
    };

    playerIds.forEach(setPlayerWithResetTarget);
  };
