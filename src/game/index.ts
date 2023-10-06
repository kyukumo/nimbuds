import { assign, createMachine, interpret } from "xstate";
import { Player } from "../types.js";

type Context = {
  player: Player | null;
  players: Record<string, Player> | null;
};

export const gameMachine = createMachine(
  {
    context: {
      player: null,
      players: null,
    },
    invoke: {
      src: "loop",
    },
    initial: "loading",
    states: {
      loading: {
        always: [
          {
            target: "run",
            cond: "noGame",
          },
          {
            target: "running",
          },
        ],
      },
      run: {
        on: {
          SET_GAME: {
            actions: "setGame",
            target: "running",
          },
        },
      },
      running: {
        on: {
          SET_GAME: {
            actions: "setGame",
          },
        },
      },
    },
    schema: {
      context: {} as Context,
      events: {} as {
        type: "SET_GAME";
        data: Context;
      },
    },
  },
  {
    actions: {
      setGame: assign((_, { data: { player, players } }) => ({
        player,
        players,
      })),
    },
    guards: {
      noGame: ({ player }) => player === null,
    },
    services: {
      loop: () => (callback) =>
        Rune.initClient({
          onChange: ({ game, yourPlayerId = "" }) => {
            const { [yourPlayerId]: player, ...players } = game.players;

            callback({
              type: "SET_GAME",
              data: {
                players,
                player,
              },
            });
          },
        }),
    },
  }
);

export const gameActor = interpret(gameMachine).start();
