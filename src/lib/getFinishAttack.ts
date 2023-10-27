import { moves } from "../data/moves";
import { GameState, Move } from "../types";
import { getRandomNumber } from "./getRandomNumber";
import { setEvent } from "./setEvent";

export const getFinishAttack =
  (game: GameState, id: string) => (move: Move) => {
    const player = game.players[id];
    if (!player) return;

    const { target } = player;
    if (!target) return;

    const [bud] = player.buds;
    if (!bud) return;

    const { stats: budStats } = bud;
    const rival = game.players[target];
    if (!rival?.buds.length) return;

    const [rivalBud] = rival.buds;
    const { advantage, disadvantage, stats: rivalStats } = rivalBud;
    const { hp: rivalHp = 1, defense: rivalDefense } = rivalStats;
    const { attack: baseAttack } = budStats;

    const { element, label: moveName } = moves[move];
    const resist = advantage.includes(element);
    const weak = disadvantage.includes(element);

    const chance = getRandomNumber(0, 255);
    const threshold = getRandomNumber(0, 2);
    const critical = chance <= threshold;

    let attack = baseAttack;
    if (resist) attack *= 0.5;
    if (weak) attack *= 2;
    if (critical) attack *= 1.5;

    const damage = Math.ceil(
      attack >= rivalDefense
        ? attack * 2 - rivalDefense
        : (attack * attack) / rivalDefense
    );

    rivalStats.hp = rivalHp - damage;

    const event = [
      `${bud.name} used ${moveName} on ${rivalBud.name}!`,
      critical && "Critical hit!",
      resist && "It's ineffective...",
      weak && "It's effective!",
    ]
      .filter(Boolean)
      .join(" ");

    setEvent({
      event,
      game,
    });
  };
