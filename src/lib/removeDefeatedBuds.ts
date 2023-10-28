import { Bud, Buds, GameState } from "../types";
import { setEvent } from "./setEvent";

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

export const removeDefeatedBuds = (game: GameState, id: string) => {
  const { players } = game;

  const player = players[id];
  const { buds, defeatedBuds } = player;

  const { nextBuds, nextDefeatedBuds } = [...buds].reduce(removeDefeatedBud, {
    nextBuds: [],
    nextDefeatedBuds: [],
  });

  player.buds = nextBuds as Buds;
  player.defeatedBuds = [...defeatedBuds, ...nextDefeatedBuds] as Buds;

  if (nextDefeatedBuds.length) player.cooldowns = {};

  const setDefeatedBudEvent = ({ name }: Bud) => {
    setEvent({
      game,
      event: `${name} was defeated!`,
    });

    const [nextBud] = player.buds;

    if (nextBud)
      setEvent({
        game,
        event: `${nextBud.name} was called out!`,
      });
  };

  nextDefeatedBuds.forEach(setDefeatedBudEvent);
};
