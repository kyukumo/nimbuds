import { Cooldown, Move } from "../types";

export const getGetCompleteCooldowns =
  (gameTime: number) =>
  (all: Move[], [key, { time, duration }]: [string, Cooldown]) => {
    const move = <Move>key;
    const complete = gameTime - time >= duration;
    if (complete) return [...all, move];
    return all;
  };
