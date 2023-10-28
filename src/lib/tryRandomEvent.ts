import { Buds, GameState } from "../types";
import { getRandomNumber } from "./getRandomNumber";
import { getRandomBud } from "./getStarterBuds";
import { setEvents } from "./setEvent";

const maxBuds = 3;

const setRandomEvent = (game: GameState, id: string) => {
  const player = game.players[id];
  if (!player) return;

  player.lastEvent = game.duration;

  if (player.buds.length < maxBuds) {
    const nextBud = getRandomBud();
    player.buds = [...player.buds, nextBud] as Buds;

    setEvents({
      game,
      events: {
        player: `You befriended ${nextBud.name}!`,
        public: `${nextBud.name} was befriended!`,
        rival: `Rival befriended ${nextBud.name}!`,
      },
      id,
    });
  }
};

export const tryRandomEvent = (game: GameState, id: string) => {
  const randomDelay = getRandomNumber(60000, 120000);
  const { duration, players } = game;
  const player = players[id];
  const { lastEvent } = player;
  const elapsedTime = duration - lastEvent;
  if (elapsedTime > randomDelay) setRandomEvent(game, id);
};
