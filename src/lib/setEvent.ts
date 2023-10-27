import { GameState } from "../types";

const eventCount = 10;

export const setEvent = ({
  event,
  game,
}: {
  event: string;
  game: GameState;
}) => {
  if (game.events.length === eventCount) game.events.shift();
  game.events.push(event);
};
