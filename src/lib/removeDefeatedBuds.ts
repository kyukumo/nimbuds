import { Bud, Buds, GameState } from "../types";

type NextBuds = {
  nextDefeatedBuds: Bud[];
  nextBuds: Bud[];
};

const removeDefeatedBud = (all: NextBuds, bud: Bud) => {
  const {
    stats: { hp = 0 },
  } = bud;

  const { nextDefeatedBuds, nextBuds } = all;
  const isDefeated = hp <= 0;

  if (isDefeated)
    return {
      ...all,
      nextDefeatedBuds: [...nextDefeatedBuds, bud],
    };

  return {
    ...all,
    nextBuds: [...nextBuds, bud],
  };
};

export const removeDefeatedBuds = ({ players }: GameState, id: string) => {
  const player = players[id];
  const { buds, defeatedBuds } = player;

  const { nextBuds, nextDefeatedBuds } = [...buds].reduce(removeDefeatedBud, {
    nextBuds: [],
    nextDefeatedBuds: [],
  });

  player.buds = nextBuds as Buds;
  player.defeatedBuds = [...defeatedBuds, ...nextDefeatedBuds] as Buds;
};
