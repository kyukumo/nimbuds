import { Buds, GameState } from "../types";
import { getRandomNumber } from "./getRandomNumber";
import { getRandomBud } from "./getStarterBuds";

const maxBuds = 3;

const setRandomEvent = (game: GameState, id: string) => {
  const { duration, players } = game;
  const player = players[id];
  player.lastEvent = duration;

  if (player.buds.length < maxBuds) {
    const nextBud = getRandomBud();
    player.buds = [...player.buds, nextBud] as Buds;
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
