import { GameState, Move, Phase } from "../types";
import { getFinishAttack } from "./getFinishAttack";
import { getLevelUp } from "./getLevelUp";
import { getGetCompleteCooldowns } from "./getGetCompleteCooldowns";
import { maxLevel } from "../data/buds";
import { moves } from "../data/moves";

const getMoveSound = (move: Move) => moves[move].element;

export const reduceCooldowns = (game: GameState, id: string) => {
  const { duration, phase, players } = game;

  const player = players[id];
  if (!player) return;

  const hasCooldowns = Boolean(Object.keys(player.cooldowns).length);
  if (!hasCooldowns) return;

  const getCompleteCooldowns = getGetCompleteCooldowns(duration);

  const complete = Object.entries(player.cooldowns).reduce<Move[]>(
    getCompleteCooldowns,
    []
  );

  const removeCooldown = (move: Move) => delete player.cooldowns[move];
  complete.forEach(removeCooldown);

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

    const { sounds: currentSounds } = player;
    player.sounds = [...currentSounds, ...sounds];
  } else if (phase === Phase.Battle) {
    const finishAttack = getFinishAttack(game, id);
    complete.forEach(finishAttack);
    game.sounds = [...game.sounds, ...sounds];
  }
};
