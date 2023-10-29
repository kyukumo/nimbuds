import { Element } from "../types";

export const block = 5;
export const scale = 5;

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

export const disadvantage: Record<Element, Element> = {
  [Element.Dark]: Element.Light,
  [Element.Earth]: Element.Wind,
  [Element.Fire]: Element.Water,
  [Element.Light]: Element.Dark,
  [Element.Water]: Element.Earth,
  [Element.Wind]: Element.Fire,
};

export const advantage: Record<Element, Element> = {
  [Element.Dark]: Element.Light,
  [Element.Earth]: Element.Water,
  [Element.Fire]: Element.Wind,
  [Element.Light]: Element.Dark,
  [Element.Water]: Element.Fire,
  [Element.Wind]: Element.Earth,
};

export const elementLabel = {
  [Element.Dark]: "Dark",
  [Element.Earth]: "Earth",
  [Element.Fire]: "Fire",
  [Element.Light]: "Light",
  [Element.Water]: "Water",
  [Element.Wind]: "Wind",
};
