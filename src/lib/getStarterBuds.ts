import { buds, starters } from "../data/buds";
import { Bud } from "../types";
import { getUniqueRandomNumbers } from "./getUniqueRandomNumbers";

const getBud = (index: number) => {
  const id = starters[index];

  return {
    ...buds[id],
    level: 1,
  };
};

const getRandomBuds = (count = 3) => {
  const numbers = getUniqueRandomNumbers(count, starters.length);
  return numbers.map(getBud);
};

export const getStarterBuds = () => getRandomBuds(3) as [Bud];
