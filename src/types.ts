import { RuneClient } from "rune-games-sdk";

export enum Element {
  Dark = "dark",
  Earth = "earth",
  Fire = "fire",
  Light = "light",
  Water = "water",
  Wind = "wind",
}

type Tile = {
  x: number;
  y: number;
};

export type Bud = {
  element: Element[];
  description: string;
  id: string;
  name: string;
  next?: string;
  previous?: string;
  tile: Tile;
};

export enum ItemType {
  Treat = "treat",
  Vitamin = "vitamin",
  Battle = "battle",
}

export type Item = {
  id: string;
  name: string;
  type: ItemType;
};

export type Buds = [Bud] | [Bud, Bud] | [Bud, Bud, Bud];

export type Inventory = [
  Item?,
  Item?,
  Item?,
  Item?,
  Item?,
  Item?,
  Item?,
  Item?,
  Item?,
  Item?,
  Item?,
  Item?
];

export type Player = {
  buds: Buds;
  id: string;
  inventory: Inventory;
  lastEvent: number;
  name: string;
  stars: number;
};

export type Players = Record<string, Player>;

export interface GameState {
  players: Players;
}

export type GameActions = {
  advance: ({ id }: { id: string }) => void;
  setPlayerName: ({ id, name }: { id: string; name: string }) => void;
};

declare global {
  const Rune: RuneClient<GameState, GameActions>;
}
