import { GameState } from "../types";
import { getHp } from "./getHp";
import { setEvents } from "./setEvent";

const baseXp = 1;

export const getLevelUp = (game: GameState, id: string) => () => {
  const { players } = game;

  const player = players[id];
  if (!player?.buds.length) return;

  const [bud] = player.buds;

  const {
    moves: { length },
    name,
    stats: { level = 1, xp = 0 },
  } = bud;

  bud.stats.xp = xp + baseXp * (1 / length);
  const levelUpXP = Math.ceil((level * 2 - 1) * 1.2);

  if (bud.stats.xp >= levelUpXP) {
    bud.stats.level = level + 1;
    bud.stats.hp = getHp(bud.stats.level);

    const elements = bud.element.join("-");

    const event = `<span class="${elements}">${name}</span> leveled up to <span class="earth">${bud.stats.level}</span>!`;

    setEvents({
      game,
      events: {
        player: event,
        public: event,
        rival: `Your rival's ${event}`,
      },
      id,
    });
  }
};
