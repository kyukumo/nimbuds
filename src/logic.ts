import {
  BattleType,
  Bud,
  GameOverPlayers,
  GameState,
  Phase,
  type Player,
  type Players,
} from "./types";
import { buds, maxLevel } from "./data/buds";
import { getSetPlayerForBattle } from "./lib/getPlayerForBattle";
import { getStarterBuds } from "./lib/getStarterBuds";
import { getStarterInventory } from "./lib/getStarterInventory";
import { reduceCooldowns } from "./lib/reduceCooldowns";
import { removeDefeatedBuds } from "./lib/removeDefeatedBuds";
import { setEvents } from "./lib/setEvent";
import { tryPlayerGameOver } from "./lib/tryPlayerGameOver";
import { tryRandomEvent } from "./lib/tryRandomEvent";
import { getRandomTarget } from "./lib/getRandomTarget";
import { getGetGameOverPlayers } from "./lib/getGameOverPlayers";
import { getGetPlayersWithNewTargets } from "./lib/getGetPlayersWithNewTargets";
import { getSetPlayersWithResetTargets } from "./lib/getSetPlayersWithResetTargets";

const createPlayer = (id: string, playerIds: string[]): Player => {
  const buds = getStarterBuds();
  const [{ id: starterId }] = buds;
  const starters = [starterId];

  return {
    lastAction: 0,
    buds,
    cooldowns: {},
    defeatedBuds: [],
    events: [],
    gameOver: false,
    id,
    inventory: getStarterInventory(),
    lastEvent: 0,
    name: id,
    ping: 0,
    sounds: [],
    stars: 3000,
    starters,
    target: getRandomTarget(id, playerIds),
  };
};

const createPlayers = (
  players: Players,
  id: string,
  index: number,
  playerIds: string[]
) => ({
  ...players,
  [id]: createPlayer(id, playerIds),
});

const getSetUpdates =
  (game: GameState) => (gameOvers: string[], id: string) => {
    reduceCooldowns(game, id);
    const { phase } = game;

    if (phase === Phase.Train) tryRandomEvent(game, id);
    else {
      removeDefeatedBuds(game, id);
      tryPlayerGameOver(game, id);
    }

    const player = game.players[id];
    if (player.gameOver) return [...gameOvers, id];
    return gameOvers;
  };

Rune.initLogic({
  minPlayers: 1,
  maxPlayers: 4,
  setup: (playerIds) => ({
    battleType: BattleType.Four,
    duration: 0,
    ended: false,
    events: [],
    phase: Phase.Train,
    phases: {
      [Phase.Train]: 60 * 3 * 1000, // 3 mins
    },
    players: playerIds.reduce(createPlayers, {}),
    playerIds,
    sounds: [],
  }),
  events: {
    playerJoined: (id, { game: { players, playerIds } }) => {
      playerIds.push(id);
      players[id] = createPlayer(id, playerIds);

      if (playerIds.length > 1) {
        const [playerOneId] = playerIds;
        const playerOne = players[playerOneId];

        if (!playerOne.target)
          playerOne.target = getRandomTarget(playerOneId, playerIds);
      }
    },
    playerLeft: (id, { game }) => {
      const { playerIds, players } = game;
      const index = playerIds.indexOf(id);
      playerIds.splice(index, 1);
      delete players[id];
      const getPlayersWithNewTargets = getGetPlayersWithNewTargets(id);
      game.players = playerIds.reduce(getPlayersWithNewTargets, players);
    },
  },
  actions: {
    attack: ({ move, speed }, { game, playerId }) => {
      const duration = (6 - speed) * 1000;
      const { phase, players } = game;

      const player = players[playerId];
      if (!player) return;

      const time = Rune.gameTime();
      player.lastAction = time;

      if (phase === Phase.Train) {
        const cooldown = player.cooldowns[move] ?? {
          duration,
        };

        player.cooldowns[move] = {
          ...cooldown,
          time,
        };
      } else
        player.cooldowns = {
          [move]: {
            duration,
            time,
          },
        };
    },
    clearSounds: ({ sounds: nextSounds }, { game, playerId }) => {
      const { phase, players, sounds } = game;
      const isNotComplete = (sound: string) => !nextSounds.includes(sound);

      if (phase === Phase.Battle) game.sounds = sounds.filter(isNotComplete);
      else {
        const { sounds: currentSounds } = players[playerId];
        players[playerId].sounds = currentSounds.filter(isNotComplete);
      }
    },
    ascend: (_, { game, playerId }) => {
      const { players } = game;

      const player = players[playerId];
      if (!player) return;

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

      const event = `${bud.name} ascended to ${nextBud.name}!`;

      setEvents({
        game,
        events: {
          player: event,
          public: event,
          rival: `Your rival's ${bud.name} ascended to ${nextBud.name}!`,
        },
        id: playerId,
      });
    },
    switch: (_, { game, playerId }) => {
      const { players } = game;
      const player = players[playerId];
      const { cooldowns } = player;

      const hasCooldowns = Boolean(Object.keys(cooldowns).length);
      if (hasCooldowns) return;

      const previousBud = player.buds.shift();

      if (previousBud) {
        (player.buds as Bud[]).push(previousBud);
        const [activeBud] = player.buds;
        const event = `${previousBud?.name} switched with ${activeBud?.name}!`;

        setEvents({
          game,
          events: {
            player: event,
            public: event,
            rival: `Your rival's ${event}`,
          },
          id: playerId,
        });
      }
    },
    target: ({ target }, { game, playerId }) => {
      game.players[playerId].target = target;
    },
  },
  update: ({ allPlayerIds, game }) => {
    game.duration = Rune.gameTime();

    const {
      duration,
      phases: { [Phase.Train]: trainDuration },
    } = game;

    if (duration === trainDuration) {
      game.phase = Phase.Battle;
      const setPlayerForBattle = getSetPlayerForBattle(game);
      game.playerIds.forEach(setPlayerForBattle);
    }

    const setUpdates = getSetUpdates(game);
    const gameOvers = allPlayerIds.reduce(setUpdates, []);

    if (game.phase === Phase.Battle) {
      const won = gameOvers.length === allPlayerIds.length - 1;

      if (won) {
        game.ended = true;
        const getGameOverPlayers = getGetGameOverPlayers(game);

        Rune.gameOver({
          players: allPlayerIds.reduce<GameOverPlayers>(getGameOverPlayers, {}),
        });
      } else {
        const setPlayersWithResetTargets = getSetPlayersWithResetTargets(
          game,
          allPlayerIds
        );

        gameOvers.forEach(setPlayersWithResetTargets);
      }
    }
  },
});
