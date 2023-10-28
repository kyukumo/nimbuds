import { CompleteCooldowns, GameState, Move, Phase } from "../types";
import { getFinishAttack } from "./getFinishAttack";
import { getLevelUp } from "./getLevelUp";
import { getReducedCooldowns } from "./getReducedCooldowns";
import { maxLevel } from "../data/buds";
import { moves } from "../data/moves";

const getMoveSound = (move: Move) => moves[move].element;

export const reduceCooldowns = (game: GameState, id: string) => {
  const { phase, players } = game;
  const player = players[id];

  const { complete, cooldowns } = Object.entries(
    player.cooldowns
  ).reduce<CompleteCooldowns>(getReducedCooldowns, {
    cooldowns: {},
    complete: [],
  });

  player.cooldowns = cooldowns;
  const sounds: string[] = complete.map(getMoveSound);

  if (phase === Phase.Train) {
    if (!player?.buds.length) return;

    const [
      {
        stats: { level = 0 },
      },
    ] = player.buds;

    if (level < maxLevel) {
      const levelUp = getLevelUp(game, id);
      complete.forEach(levelUp);
    }

    player.sounds.push(...sounds);
  } else if (phase === Phase.Battle) {
    const finishAttack = getFinishAttack(game, id);
    complete.forEach(finishAttack);
    game.sounds.push(...sounds);
  }
};
