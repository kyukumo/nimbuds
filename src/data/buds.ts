import type { Bud } from "../types";

const keyValues: Record<string, Bud> = {
  one: {
    id: "one",
    name: "one",
  },
  two: {
    id: "two",
    name: "two",
  },
  three: {
    id: "three",
    name: "three",
  },
  four: {
    id: "four",
    name: "four",
  },
  five: {
    id: "five",
    name: "five",
  },
};

export const buds = Object.values(keyValues);
