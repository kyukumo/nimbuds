import { buds, starters } from "../data/buds";
import { Bud, CurrentBuds } from "../types";
import { getHp } from "./getHp";
import { getRandomNumber } from "./getRandomNumber";
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
  } as Bud;
};

const getStarterIndex = (id: string) => starters.indexOf(id);

export const getRandomBud = (excludedIds?: string[]) => {
  const exclude = excludedIds?.map(getStarterIndex) ?? [];
  const index = getRandomNumber(0, starters.length - 1, exclude);
  const bud = getBud(index);
  return bud;
};

const getRandomBuds = (count = 3) => {
  const numbers = getUniqueRandomNumbers(count, starters.length);
  return numbers.map(getBud);
};

export const getStarterBuds = () => getRandomBuds(3) as CurrentBuds;
