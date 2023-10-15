import { create } from "zustand";
import { GameState, Player, Players } from "../types";
import { produce } from "immer";

export type Store = {
  player: Player | null;
  players: Players;
  setGame: (params: {
    game: GameState;
    yourPlayerId: string | undefined;
  }) => void;
};

export const useStore = create<Store>((set) => ({
  player: null,
  players: {},
  setGame: ({ game: { players: allPlayers }, yourPlayerId = "" }) =>
    set(
      produce((state) => {
        const { [yourPlayerId]: player, ...players } = allPlayers;
        state.players = players;
        state.player = player;
      })
    ),
}));
