import { Player, Players } from "../types";
import { getRandomTarget } from "./getRandomTarget";

export const getGetPlayersWithResetTargets =
  (playerIds: string[]) => (all: Players, gameOverPlayerId: string) => {
    const getPlayerTarget = (all: Players, [id, player]: [string, Player]) => {
      const { target } = player;
      if (target !== gameOverPlayerId) return all;

      return {
        ...all,
        [id]: {
          ...player,
          target: getRandomTarget(id, playerIds),
        },
      };
    };

    return Object.entries(all).reduce(getPlayerTarget, all);
  };
