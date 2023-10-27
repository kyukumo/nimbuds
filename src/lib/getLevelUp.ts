import { GameState } from "../types";
import { getHp } from "./getHp";
import { setEvent } from "./setEvent";

const baseXp = 1;

export const getLevelUp = (game: GameState, id: string) => () => {
  const player = game.players[id];
  if (!player?.buds.length) return;

  const [
    {
      moves: { length },
      name,
      stats,
    },
  ] = player.buds;

  const { level = 1, xp = 0 } = stats;
  stats.xp = xp + baseXp * (1 / length);
  const levelUpXP = Math.ceil((level * 2 - 1) * 1.2);

  if (stats.xp >= levelUpXP) {
    stats.level = level + 1;
    stats.hp = getHp(stats.level);

    setEvent({
      event: `${name} leveled up to ${stats.level}!`,
      game,
    });
  }
};
