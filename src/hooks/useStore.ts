import { create } from "zustand";
import {
  BattleType,
  GameState,
  Phase,
  Phases,
  Player,
  Players,
} from "../types";
import { produce } from "immer";

export type Store = {
  battleType: BattleType;
  duration: number;
  ended: boolean;
  phase: Phase;
  phases: Phases;
  player: Player | null;
  players: Players;
  ready: boolean;
  setGame: (params: {
    game: GameState;
    yourPlayerId: string | undefined;
  }) => void;
};

export const useStore = create<Store>((set) => ({
  battleType: BattleType.Four,
  duration: 0,
  ended: false,
  phase: Phase.Train,
  phases: {},
  player: null,
  players: {},
  ready: false,
  setGame: ({
    game: { duration, ended, phase, phases, players: allPlayers },
    yourPlayerId = "",
  }) =>
    set(
      produce((state) => {
        const { [yourPlayerId]: player, ...players } = allPlayers;
        state.duration = duration;
        state.ended = ended;
        state.phase = phase;
        state.phases = phases;
        state.player = player;
        state.players = players;
        state.ready = true;
      })
    ),
}));
