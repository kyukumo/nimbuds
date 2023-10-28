import { Players } from "../types";
import { getRandomTarget } from "./getRandomTarget";

export const getGetPlayersWithNewTargets =
  (leavingTarget: string) =>
  (all: Players, playerId: string, index: number, playerIds: string[]) => {
    const player = all[playerId];
    const isLeaving = player.target === leavingTarget;
    if (isLeaving) player.target = getRandomTarget(playerId, playerIds);
    return all;
  };
