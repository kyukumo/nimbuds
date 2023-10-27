import { Players } from "../types";

export const getPlayerForBattle = (all: Players, playerId: string) => {
  const player = all[playerId];

  return {
    ...all,
    [playerId]: {
      ...player,
      cooldowns: {},
    },
  };
};
