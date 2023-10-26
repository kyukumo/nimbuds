import {
  Phase,
  type Player,
  type Players,
  BattleType,
  Move,
  Cooldowns,
  Buds,
  Bud,
  CurrentBuds,
  GameState,
} from "./types";
import { getRandomBud, getStarterBuds } from "./lib/getStarterBuds";
import { getStarterInventory } from "./lib/getStarterInventory";
import { getRandomNumber } from "./lib/getRandomNumber";
import { buds } from "./data/buds";
import { getHp } from "./lib/getHp";
import { moves } from "./data/moves";

const baseXp = 1;
const maxLevel = 100;
const eventCount = 10;
const maxBuds = 3;

const setEvent = ({ event, game }: { event: string; game: GameState }) => {
  if (game.events.length === eventCount) game.events.shift();
  game.events.push(event);
};

// everyone gets a set amount of points/money
// shop to buy things for your creatures/buy creatures
// random events happen to give you items/money
// in the time limit try to train your creatures as much as possible
// trade creatures/items with each other
// at the end, battle 2v2, 1v3, or 4v4
// save a version of your creature to remember it

const createPlayer = (id: string): Player => ({
  buds: getStarterBuds(),
  cooldowns: {},
  gameOver: false,
  id,
  inventory: getStarterInventory(),
  lastEvent: Rune.gameTime() / 1000,
  name: id,
  ping: 0,
  stars: 3000,
  target: null,
});

const createPlayers = (players: Players, id: string) => ({
  ...players,
  [id]: createPlayer(id),
});

type CompleteCooldowns = {
  cooldowns: Cooldowns;
  complete: Move[];
};

const getReducedCooldowns = (
  all: CompleteCooldowns,
  [key, value]: [string, number]
) => {
  const { cooldowns, complete } = all;
  const move = <Move>key;

  if (!value)
    return {
      cooldowns,
      complete: [...complete, move],
    };

  return {
    complete,
    cooldowns: {
      ...cooldowns,
      [move]: value - 1,
    },
  };
};

Rune.initLogic({
  minPlayers: 2,
  maxPlayers: 4,
  setup: (playerIds) => ({
    battleType: BattleType.Four,
    duration: 0,
    ended: false,
    events: [],
    phase: Phase.Train,
    phases: {
      [Phase.Battle]: 60 * 3 * 1000, // 3 mins
      [Phase.Train]: 60 * 3 * 1000, // 3 mins
    },
    players: playerIds.reduce(createPlayers, {}),
    playerIds,
  }),
  events: {
    playerJoined: (id, { game: { playerIds, players } }) => {
      players[id] = createPlayer(id);
      playerIds.push(id);
    },
    playerLeft: (id, { game: { playerIds, players } }) => {
      const index = playerIds.indexOf(id);
      playerIds.splice(index, 1);
      delete players[id];
    },
  },
  actions: {
    attack: ({ id, move, speed }, { game: { players } }) => {
      players[id].cooldowns[move] = 6 - speed;
    },
    battle: (_, { game }) => {
      game.phase = Phase.Battle;
      const { playerIds, players } = game;

      const setPlayerForBattle = (
        playerId: string,
        index: number,
        playerIds: string[]
      ) => {
        const player = players[playerId];
        const nextPlayerId = index + 1;
        const targetIndex = nextPlayerId >= playerIds.length ? 0 : nextPlayerId;
        const target = playerIds[targetIndex];
        player.target = target;
      };

      playerIds.forEach(setPlayerForBattle);
    },
    train: (_, { game }) => {
      game.phase = Phase.Train;
    },
    ascend: ({ id }, { game }) => {
      const { players } = game;
      const player = players[id];

      const [bud] = player.buds;
      if (!bud) return;

      const { ascends = maxLevel, next } = bud;
      if (!next) return;

      const {
        stats: { hp, level = 1, xp },
      } = bud;

      if (level < ascends) return;

      const nextBud = {
        ...buds[next],
        stats: {
          ...buds[next].stats,
          hp,
          level,
          xp,
        },
      };

      player.buds[0] = nextBud;
      player.cooldowns = {};

      setEvent({
        event: `${bud.name} ascended to ${nextBud.name}!`,
        game,
      });
    },
    switch: ({ id }, { game: { players } }) => {
      const player = players[id];
      const { buds, cooldowns } = player;

      const hasCooldowns = Boolean(Object.keys(cooldowns).length);
      if (hasCooldowns) return;

      const activeBud = buds.shift();
      const currentBuds = <CurrentBuds>buds;
      if (activeBud) currentBuds.push(activeBud);

      return;
    },
    setPlayerName: ({ id, name }, { game: { players } }) => {
      const player = players[id];
      player.name = name;
    },
    target: ({ id, target }, { game: { players } }) => {
      players[id].target = target;
    },
  },
  update: ({ allPlayerIds, game }) => {
    game.duration = Rune.gameTime();

    const {
      duration,
      phase,
      phases: { [Phase.Train]: trainDuration },
      playerIds,
      players,
    } = game;

    if (duration === trainDuration) {
      game.phase = Phase.Battle;

      const setPlayerForBattle = (
        playerId: string,
        index: number,
        playerIds: string[]
      ) => {
        const player = players[playerId];
        const nextPlayerId = index + 1;
        const targetIndex = nextPlayerId >= playerIds.length ? 0 : nextPlayerId;
        const target = playerIds[targetIndex];
        player.target = target;
        player.cooldowns = {};
      };

      playerIds.forEach(setPlayerForBattle);
    }

    const setRandomEvent = (id: string) => {
      const player = players[id];
      player.lastEvent = duration;

      if (player.buds.length < maxBuds) {
        const nextBud = getRandomBud();
        player.buds = [...player.buds, nextBud] as Buds;
      }
    };

    const tryRandomEvent = (id: string) => {
      const randomDelay = getRandomNumber(60000, 120000);
      const player = players[id];
      const { lastEvent } = player;
      const elapsedTime = duration - lastEvent;
      if (elapsedTime > randomDelay) setRandomEvent(id);
    };

    const reduceCooldowns = (id: string) => {
      const player = players[id];

      const { complete, cooldowns } = Object.entries(
        player.cooldowns
      ).reduce<CompleteCooldowns>(getReducedCooldowns, {
        cooldowns: {},
        complete: [],
      });

      player.cooldowns = cooldowns;

      const levelUp = () => {
        if (!player.buds.length) return;

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

        console.log(stats.xp >= levelUpXP, stats.xp, levelUpXP);
        if (stats.xp >= levelUpXP) {
          stats.level = level + 1;
          stats.hp = getHp(stats.level);

          setEvent({
            event: `${name} leveled up to ${stats.level}!`,
            game,
          });
        }

        return;
      };

      const finishAttack = (move: Move) => {
        const { target } = player;
        if (!target) return;

        const [bud] = player.buds;
        if (!bud) return;

        const { stats: budStats } = bud;

        const rival = players[target];
        if (!rival.buds.length) return;

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

        return;
      };

      if (phase === Phase.Train) {
        if (!player.buds.length) return;

        const [
          {
            stats: { level = 0 },
          },
        ] = player.buds;

        if (level < maxLevel) complete.forEach(levelUp);
      } else if (phase === Phase.Battle) complete.forEach(finishAttack);
    };

    const tryPlayerGameOver = (id: string) => {
      const player = players[id];
      const gameOver = player.buds.length === 0;
      player.gameOver = gameOver;
    };

    const checkDefeatedBuds = (id: string) => {
      const player = players[id];
      const { buds } = player;

      const removeDefeatedBud = (all: Buds, bud: Bud) => {
        const {
          stats: { hp = 0 },
        } = bud;

        const defeated = hp <= 0;
        if (defeated) return all;
        return [...all, bud] as Buds;
      };

      player.buds = buds.reduce<Buds>(removeDefeatedBud, []);
    };

    const setUpdates = (gameOvers: string[], id: string) => {
      reduceCooldowns(id);

      if (phase === Phase.Train) tryRandomEvent(id);
      else if (phase === Phase.Battle) {
        checkDefeatedBuds(id);
        tryPlayerGameOver(id);
      }

      const player = players[id];
      if (player.gameOver) return [...gameOvers, id];
      return gameOvers;
    };

    const gameOvers = allPlayerIds.reduce(setUpdates, []);
    const won = gameOvers.length === allPlayerIds.length - 1;

    if (won) {
      game.ended = true;

      type GameOverState = number | "WON" | "LOST";
      type GameOverPlayers = Record<string, GameOverState>;

      const getGameOverPlayers = (all: GameOverPlayers, id: string) => {
        const { gameOver } = players[id];
        const value: GameOverState = gameOver ? "LOST" : "WON";

        return {
          ...all,
          [id]: value,
        };
      };

      Rune.gameOver({
        players: allPlayerIds.reduce<GameOverPlayers>(getGameOverPlayers, {}),
      });
    }
  },
});
