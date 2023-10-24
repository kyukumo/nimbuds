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

type Stats = {
  attack: number;
  defense: number;
  hp?: number;
  level?: number;
  speed: number;
  xp?: number;
};

export enum Move {
  Blaze = "blaze",
  Blossom = "blossom",
  Breeze = "breeze",
  Cascade = "cascade",
  Drench = "drench",
  Eclipse = "eclipse",
  Flower = "flower",
  Gleam = "gleam",
  Gloom = "gloom",
  Gust = "gust",
  Ignite = "ignite",
  Inferno = "inferno",
  Seed = "seed",
  Shade = "shade",
  Soak = "soak",
  Starfall = "starfall",
  Tornado = "tornado",
  Twinkle = "twinkle",
}

type Moves = [Move] | [Move, Move];

export type Bud = {
  advantage: Element[];
  ascends?: number;
  description: string;
  disadvantage: Element[];
  element: Element[];
  id: string;
  moves: Moves;
  name: string;
  next?: string;
  previous?: string;
  stage: number;
  stats: Stats;
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

export type CurrentBuds = [Bud] | [Bud, Bud] | [Bud, Bud, Bud];
export type Buds = [] | CurrentBuds;

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

export type Cooldowns = Partial<Record<Move, number>>;

export type Player = {
  buds: Buds;
  cooldowns: Cooldowns;
  gameOver: boolean;
  id: string;
  inventory: Inventory;
  lastEvent: number;
  name: string;
  ping: number;
  stars: number;
  target: string | null;
};

export type Players = Record<string, Player>;

export enum BattleType {
  "Four" = "Four",
  "Three" = "Three",
  "Two" = "Two",
}

export enum Phase {
  Train = "train",
  Battle = "battle",
}

export type Phases = Partial<Record<Phase, number>>;

export interface GameState {
  battleType: BattleType;
  duration: number;
  ended: boolean;
  events: string[];
  phase: Phase;
  phases: Phases;
  players: Players;
  playerIds: string[];
}

export type GameActions = {
  attack: ({
    id,
    move,
    speed,
  }: {
    id: string;
    move: Move;
    speed: number;
  }) => void;
  ascend: ({ id }: { id: string }) => void;
  battle: () => void;
  setPlayerName: ({ id, name }: { id: string; name: string }) => void;
  switch: ({ id }: { id: string }) => void;
  target: ({ id, target }: { id: string; target: string }) => void;
  train: () => void;
};

declare global {
  const Rune: RuneClient<GameState, GameActions>;
}
