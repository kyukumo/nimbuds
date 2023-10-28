import { Element, Move } from "../types";
import dark from "../sounds/dark.ogg";
import earth from "../sounds/earth.ogg";
import fire from "../sounds/fire.ogg";
import light from "../sounds/light.ogg";
import water from "../sounds/water.ogg";
import wind from "../sounds/wind.ogg";

export const paths = {
  [Element.Dark]: dark,
  [Element.Earth]: earth,
  [Element.Fire]: fire,
  [Element.Light]: light,
  [Element.Water]: water,
  [Element.Wind]: wind,
};

export const moves = {
  [Move.Blaze]: {
    element: Element.Fire,
    label: "Blaze",
    level: 2,
  },
  [Move.Blossom]: {
    element: Element.Earth,
    label: "Blossom",
    level: 3,
  },
  [Move.Breeze]: {
    element: Element.Wind,
    label: "Breeze",
    level: 1,
  },
  [Move.Cascade]: {
    element: Element.Water,
    label: "Cascade",
    level: 3,
  },
  [Move.Drench]: {
    element: Element.Water,
    label: "Drench",
    level: 2,
  },
  [Move.Eclipse]: {
    element: Element.Dark,
    label: "Eclipse",
    level: 3,
  },
  [Move.Flower]: {
    element: Element.Earth,
    label: "Flower",
    level: 2,
  },
  [Move.Gleam]: {
    element: Element.Light,
    label: "Gleam",
    level: 2,
  },
  [Move.Gloom]: {
    element: Element.Dark,
    label: "Gloom",
    level: 1,
  },
  [Move.Gust]: {
    element: Element.Wind,
    label: "Gust",
    level: 2,
  },
  [Move.Ignite]: {
    element: Element.Fire,
    label: "Ignite",
    level: 1,
  },
  [Move.Inferno]: {
    element: Element.Fire,
    label: "Inferno",
    level: 3,
  },
  [Move.Seed]: {
    element: Element.Earth,
    label: "Seed",
    level: 1,
  },
  [Move.Shade]: {
    element: Element.Dark,
    label: "Shade",
    level: 2,
  },
  [Move.Soak]: {
    element: Element.Water,
    label: "Soak",
    level: 2,
  },
  [Move.Starfall]: {
    element: Element.Light,
    label: "Starfall",
    level: 3,
  },
  [Move.Tornado]: {
    element: Element.Wind,
    label: "Tornado",
    level: 3,
  },
  [Move.Twinkle]: {
    element: Element.Light,
    label: "Twinkle",
    level: 1,
  },
};
