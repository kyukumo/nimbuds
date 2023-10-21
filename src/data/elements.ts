import { Element } from "../types";

export const block = 5;
export const scale = 4;

export const size = block * scale;

export const tile = {
  [Element.Dark]: {
    x: 30,
    y: 0,
  },
  [Element.Earth]: {
    x: 30,
    y: 25,
  },
  [Element.Fire]: {
    x: 30,
    y: 5,
  },
  [Element.Light]: {
    x: 30,
    y: 10,
  },
  [Element.Water]: {
    x: 30,
    y: 20,
  },
  [Element.Wind]: {
    x: 30,
    y: 15,
  },
};
