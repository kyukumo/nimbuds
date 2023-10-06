import { ItemType, type Item } from "../types";

const keyValues: Record<string, Item> = {
  one: {
    id: "one",
    name: "one",
    type: ItemType.Battle,
  },
  two: {
    id: "two",
    name: "two",
    type: ItemType.Treat,
  },
  three: {
    id: "three",
    name: "three",
    type: ItemType.Vitamin,
  },
  four: {
    id: "four",
    name: "four",
    type: ItemType.Treat,
  },
  five: {
    id: "five",
    name: "five",
    type: ItemType.Battle,
  },
};

export const items = Object.values(keyValues);
