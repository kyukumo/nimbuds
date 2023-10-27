import { GameState } from "../types";

const eventCount = 10;

export const setEvent = ({
  event,
  game,
  id,
}: {
  event: string;
  game: GameState;
  id?: string;
}) => {
  if (id) {
    const player = game.players[id];
    if (player.events.length === eventCount) player.events.shift();
    player.events.push(event);
  } else {
    if (game.events.length === eventCount) game.events.shift();
    game.events.push(event);
  }
};

export const setRivalsEvent = ({
  event,
  game,
  id,
}: {
  game: GameState;
  event: string;
  id: string;
}) => {
  const setRivalEvents = (rivalId: string) =>
    setEvent({
      game,
      event,
      id: rivalId,
    });

  const playerIds = Object.keys(game.players);
  const index = playerIds.indexOf(id);
  playerIds.splice(index, 1);
  playerIds.forEach(setRivalEvents);
};

type Events = {
  player: string;
  public: string;
  rival: string;
};

export const setEvents = ({
  events,
  game,
  id,
}: {
  events: Events;
  game: GameState;
  id: string;
}) => {
  setEvent({
    game,
    event: events.public,
  });

  setEvent({
    game,
    event: events.player,
    id,
  });

  setRivalsEvent({
    game,
    event: events.rival,
    id,
  });
};
