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

  const nextBud = {
    ...bud,
  };

  if (isDefeated)
    return {
      ...all,
      nextDefeatedBuds: [...nextDefeatedBuds, nextBud],
    };

  return {
    ...all,
    nextBuds: [...nextBuds, nextBud],
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

  const setDefeatedBudEvent = ({ element, name }: Bud) => {
    const previousElements = element.join("-");

    setEvent({
      game,
      event: `<span class="${previousElements}">${name}</span> was defeated!`,
    });

    const [nextBud] = player.buds;
    const nextElements = nextBud?.element.join("-") ?? "";

    if (nextBud)
      setEvent({
        game,
        event: `<span class="${nextElements}">${nextBud.name}</span> was called out!`,
      });
  };

  nextDefeatedBuds.forEach(setDefeatedBudEvent);
};
