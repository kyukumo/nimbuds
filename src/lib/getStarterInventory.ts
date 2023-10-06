import { items } from "../data/items";
import { Inventory } from "../types";
import { getUniqueRandomNumbers } from "./getUniqueRandomNumbers";

const getBud = (index: number) => items[index];

const getRandomItems = (count = 3) => {
  const numbers = getUniqueRandomNumbers(count, items.length);
  return numbers.map(getBud);
};

export const getStarterInventory = () => getRandomItems(3) as Inventory;
