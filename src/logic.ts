import { Phase, type Bud, type Player, type Players } from "./types";
import { getStarterBuds } from "./lib/getStarterBuds";
import { getStarterInventory } from "./lib/getStarterInventory";
import { getRandomNumber } from "./lib/getRandomNumber";
import { buds } from "./data/buds";

// everyone gets a set amount of points/money
// shop to buy things for your creatures/buy creatures
// random events happen to give you items/money
// in the time limit try to train your creatures as much as possible
// trade creatures/items with each other
// at the end, battle 2v2, 1v3, or 4v4
// save a version of your creature to remember it

const createPlayer = (id: string): Player => ({
  buds: getStarterBuds(),
  id,
  inventory: getStarterInventory(),
  lastEvent: Rune.gameTime() / 1000,
  name: id,
  ping: 0,
  stars: 3000,
});

const createPlayers = (players: Players, id: string) => ({
  ...players,
  [id]: createPlayer(id),
});

const MATCH = 300; // seconds

Rune.initLogic({
  minPlayers: 1,
  maxPlayers: 4,
  setup: (ids) => ({
    duration: 0,
    phase: Phase.Train,
    players: ids.reduce(createPlayers, {}),
  }),
  events: {
    playerJoined: (id, { game }) => {
      game.players[id] = createPlayer(id);
    },
    playerLeft: (id, { game }) => {
      delete game.players[id];
    },
  },
  actions: {
    battle: (_, { game }) => {
      game.phase = Phase.Battle;
    },
    train: (_, { game }) => {
      game.phase = Phase.Train;
    },
    ping: ({ id }, { game: { players } }) => {
      players[id].ping = Rune.gameTime();
    },
    ascend: ({ id }, { game }) => {
      const player = game.players[id];
      const [bud] = player.buds;

      const { next } = bud;
      if (!next) return;

      // todo: find by index
      const nextBud = buds[next];
      player.buds = [nextBud];
    },
    setPlayerName: ({ id, name }, { game }) => {
      const player = game.players[id];
      player.name = name;
    },
  },
  update: ({ allPlayerIds, game }) => {
    game.duration = Rune.gameTime();
    const seconds = game.duration / 1000;

    // if (seconds === MATCH) Rune.actions.battle();

    if (game.phase === Phase.Train) {
      const { players } = game;

      const setRandomEvent = (id: string) => {
        const player = players[id];
        player.lastEvent = seconds;
      };

      const tryRandomEvent = (id: string) => {
        const randomDelay = getRandomNumber(15, 120);
        const player = players[id];
        const { lastEvent } = player;
        const elapsedTime = seconds - lastEvent;
        if (elapsedTime > randomDelay) setRandomEvent(id);
      };

      allPlayerIds.forEach(tryRandomEvent);
    }
  },
});
