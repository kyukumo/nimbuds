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

    setEvents({
      game,
      events: {
        player: `${name} leveled up to ${bud.stats.level}!`,
        public: `${name} leveled up to ${bud.stats.level}!`,
        rival: `Your rival's ${name} leveled up to ${bud.stats.level}!`,
      },
      id,
    });
  }
};
