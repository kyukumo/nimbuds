import { CompleteCooldowns, Move } from "../types";

export const getReducedCooldowns = (
  all: CompleteCooldowns,
  [key, value]: [string, number]
) => {
  const { cooldowns, complete } = all;
  const move = <Move>key;

  const nextValue = value - 1;
  if (!nextValue)
    return {
      cooldowns,
      complete: [...complete, move],
    };

  return {
    complete,
    cooldowns: {
      ...cooldowns,
      [move]: nextValue,
    },
  };
};
