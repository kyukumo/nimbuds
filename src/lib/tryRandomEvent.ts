import { maxBuds } from "../data/buds";
import { CurrentBuds, GameState } from "../types";
import { getRandomBud } from "./getStarterBuds";
import { setEvents } from "./setEvent";

const setRandomEvent = (game: GameState, id: string) => {
  const { players } = game;

  const player = players[id];
  if (!player) return;

  player.lastEvent = game.duration;

  if (player.buds.length < maxBuds) {
    const nextBud = getRandomBud(player.starters);

    (player.buds as CurrentBuds).push(nextBud);
    player.starters.push(nextBud.id);

    const { element, name } = nextBud;
    const elements = element.join("-");

    setEvents({
      game,
      events: {
        player: `You befriended <span class="${elements}">${name}</span>!`,
        public: `<span class="${elements}">${name}</span> was befriended!`,
        rival: `Your rival befriended <span class="${elements}">${name}</span>!`,
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
