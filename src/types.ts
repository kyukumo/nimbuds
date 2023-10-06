import { RuneClient } from "rune-games-sdk";

export type Bud = {
  id: string;
  name: string;
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
  stars: number;
};

export interface GameState {
  players: Record<string, Player>;
}

type GameActions = {};

declare global {
  const Rune: RuneClient<GameState, GameActions>;
}
