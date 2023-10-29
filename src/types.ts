import { RuneClient } from "rune-games-sdk";

export type GameOverState = number | "WON" | "LOST";
export type GameOverPlayers = Record<string, GameOverState>;

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

export type Cooldown = {
  duration: number;
  time: number;
};

export type Cooldowns = Partial<Record<Move, Cooldown>>;

export type CompleteCooldowns = {
  cooldowns: Cooldowns;
  complete: Move[];
};

export type Player = {
  buds: Buds;
  cooldowns: Cooldowns;
  defeatedBuds: Buds;
  events: string[];
  gameOver: boolean;
  id: string;
  lastAction: number;
  inventory: Inventory;
  lastEvent: number;
  name: string;
  ping: number;
  sounds: string[];
  stars: number;
  starters: string[];
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
  sounds: string[];
}

export type GameActions = {
  attack: ({ move, speed }: { move: Move; speed: number }) => void;
  ascend: () => void;
  clearSounds: ({ sounds }: { sounds: string[] }) => void;
  switch: () => void;
  target: ({ target }: { target: string }) => void;
};

declare global {
  const Rune: RuneClient<GameState, GameActions>;
}
