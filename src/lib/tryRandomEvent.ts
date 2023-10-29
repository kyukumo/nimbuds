import { CurrentBuds, GameState } from "../types";
import { getRandomNumber } from "./getRandomNumber";
import { getRandomBud } from "./getStarterBuds";
import { setEvents } from "./setEvent";

const maxBuds = 3;

const setRandomEvent = (game: GameState, id: string) => {
  const { players } = game;

  const player = players[id];
  if (!player) return;

  player.lastEvent = game.duration;

  if (player.buds.length < maxBuds) {
    const nextBud = getRandomBud(player.starters);

    player.buds = [...player.buds, nextBud] as CurrentBuds;
    player.starters = [...player.starters, nextBud.id];

    setEvents({
      game,
      events: {
        player: `You befriended ${nextBud.name}!`,
        public: `${nextBud.name} was befriended!`,
        rival: `Your rival befriended ${nextBud.name}!`,
      },
      id,
    });
  }
};

const delay = 60000;

export const tryRandomEvent = (game: GameState, id: string) => {
  const { duration, players } = game;
  const player = players[id];
  if (!player) return;
  const { lastEvent } = player;
  const elapsedTime = duration - lastEvent;
  if (elapsedTime > delay) setRandomEvent(game, id);
};
