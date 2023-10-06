import type { GameState, Player } from "./types";
import { getStarterBuds } from "./lib/getStarterBuds";
import { getStarterInventory } from "./lib/getStarterInventory";
import { getRandomNumber } from "./lib/getRandomNumber";

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
  lastEvent: Rune.gameTimeInSeconds(),
  stars: 3000,
});

const createPlayers = (players: Record<string, Player>, id: string) => ({
  ...players,
  [id]: createPlayer(id),
});

Rune.initLogic({
  minPlayers: 1,
  maxPlayers: 4,
  events: {
    playerJoined: (id, { game }) => {
      const player = createPlayer(id);
      game.players[id] = player;
    },
    playerLeft: (id, { game }) => {
      delete game.players[id];
    },
  },
  setup: (ids): GameState => {
    return {
      players: ids.reduce(createPlayers, {}),
    };
  },
  actions: {},
  update: ({ game, allPlayerIds }) => {
    const time = Rune.gameTimeInSeconds();

    const setEvent = (id: string) => {
      const randomDelay = getRandomNumber(15, 60);
      const player = game.players[id];
      const { lastEvent } = player;
      const elapsedTime = time - lastEvent;
      if (elapsedTime > randomDelay) player.lastEvent = time;
    };

    allPlayerIds.forEach(setEvent);

    // get current random time
    // see if that has lapsed
    // if so, set new random time
    // trigger random event
    // per player?
  },
});
