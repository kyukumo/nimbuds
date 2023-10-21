import { create } from "zustand";
import { BattleType, GameState, Phase, Player, Players } from "../types";
import { produce } from "immer";

export type Store = {
  battleType: BattleType;
  phase: Phase;
  player: Player | null;
  players: Players;
  setGame: (params: {
    game: GameState;
    yourPlayerId: string | undefined;
  }) => void;
};

export const useStore = create<Store>((set) => ({
  battleType: BattleType.Four,
  phase: Phase.Train,
  player: null,
  players: {},
  setGame: ({ game: { phase, players: allPlayers }, yourPlayerId = "" }) =>
    set(
      produce((state) => {
        const { [yourPlayerId]: player, ...players } = allPlayers;
        state.players = players;
        state.player = player;
        state.phase = phase;
      })
    ),
}));