import { buds, starters } from "../data/buds";
import { Buds } from "../types";
import { getHp } from "./getHp";
import { getUniqueRandomNumbers } from "./getUniqueRandomNumbers";

const getBud = (index: number) => {
  const id = starters[index];
  const bud = buds[id];

  return {
    ...bud,
    stats: {
      ...bud.stats,
      hp: getHp(1),
      level: 1,
      xp: 0,
    },
  };
};

const getRandomBuds = (count = 3) => {
  const numbers = getUniqueRandomNumbers(count, starters.length);
  return numbers.map(getBud);
};

export const getStarterBuds = () => getRandomBuds(1) as Buds;
