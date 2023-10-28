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
import { getPlayerForBattle } from "./lib/getPlayerForBattle";
import { getStarterBuds } from "./lib/getStarterBuds";
import { getStarterInventory } from "./lib/getStarterInventory";
import { reduceCooldowns } from "./lib/reduceCooldowns";
import { removeDefeatedBuds } from "./lib/removeDefeatedBuds";
import { setEvents } from "./lib/setEvent";
import { tryPlayerGameOver } from "./lib/tryPlayerGameOver";
import { tryRandomEvent } from "./lib/tryRandomEvent";
import { getRandomTarget } from "./lib/getRandomTarget";
import { getGetGameOverPlayers } from "./lib/getGameOverPlayers";
import { getGetPlayersWithResetTargets } from "./lib/getGetPlayersWithResetTargets";

const getGetPlayersWithNewTargets =
  (leavingTarget: string) =>
  (all: Players, playerId: string, index: number, playerIds: string[]) => {
    const player = all[playerId];
    const isLeaving = player.target === leavingTarget;
    if (isLeaving) player.target = getRandomTarget(playerId, playerIds);
    return all;
  };

const createPlayer = (id: string, playerIds: string[]): Player => ({
  buds: getStarterBuds(),
  cooldowns: {},
  defeatedBuds: [],
  events: [],
  gameOver: false,
  id,
  inventory: getStarterInventory(),
  lastEvent: Rune.gameTime() / 1000,
  name: id,
  ping: 0,
  sounds: [],
  stars: 3000,
  target: getRandomTarget(id, playerIds),
});

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
    const { phase, players } = game;

    if (phase === Phase.Train) tryRandomEvent(game, id);
    else if (phase === Phase.Battle) {
      removeDefeatedBuds(game, id);
      tryPlayerGameOver(game, id);
    }

    const player = players[id];
    if (player.gameOver) return [...gameOvers, id];
    return gameOvers;
  };

Rune.initLogic({
  minPlayers: 1,
  maxPlayers: 3,
  setup: (playerIds) => ({
    battleType: BattleType.Four,
    duration: 0,
    ended: false,
    events: [],
    phase: Phase.Train,
    phases: {
      [Phase.Train]: 60 * 10 * 1000, // 3 mins
    },
    players: playerIds.reduce(createPlayers, {}),
    playerIds,
    sounds: [],
  }),
  events: {
    playerJoined: (id, { game }) => {
      game.playerIds.push(id);
      game.players[id] = createPlayer(id, game.playerIds);

      if (game.playerIds.length > 1) {
        const [playerOneId] = game.playerIds;
        const playerOne = game.players[playerOneId];

        if (!playerOne.target)
          playerOne.target = getRandomTarget(playerOneId, game.playerIds);
      }
    },
    playerLeft: (id, { game }) => {
      const index = game.playerIds.indexOf(id);
      game.playerIds.splice(index, 1);
      delete game.players[id];
      const { players, playerIds } = game;
      const getPlayersWithNewTargets = getGetPlayersWithNewTargets(id);
      game.players = playerIds.reduce(getPlayersWithNewTargets, players);
    },
  },
  actions: {
    attack: ({ id, move, speed }, { game }) => {
      const cooldown = 6 - speed;

      if (game.phase === Phase.Train)
        game.players[id].cooldowns[move] = cooldown;
      else
        game.players[id].cooldowns = {
          [move]: cooldown,
        };
    },
    battle: (_, { game }) => {
      game.phase = Phase.Battle;
      game.players = game.playerIds.reduce(getPlayerForBattle, game.players);
    },
    clearSounds: ({ id, sounds }, { game }) => {
      const { phase } = game;
      const isNotComplete = (sound: string) => !sounds.includes(sound);

      if (phase === Phase.Battle) {
        game.sounds = game.sounds.filter(isNotComplete);
      } else {
        const { sounds: currentSounds } = game.players[id];
        game.players[id].sounds = currentSounds.filter(isNotComplete);
      }
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

      const event = `${bud.name} ascended to ${nextBud.name}!`;

      setEvents({
        game,
        events: {
          player: event,
          public: event,
          rival: `Your rival's ${bud.name} ascended to ${nextBud.name}!`,
        },
        id,
      });
    },
    switch: ({ id }, { game }) => {
      const player = game.players[id];
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
          id,
        });
      }
    },
    setPlayerName: ({ id, name }, { game: { players } }) => {
      const player = players[id];
      player.name = name;
    },
    target: ({ id, target }, { game }) => {
      game.players[id].target = target;
    },
  },
  update: ({ allPlayerIds, game }) => {
    game.duration = Rune.gameTime();

    const {
      duration,
      phases: { [Phase.Train]: trainDuration },
      playerIds,
    } = game;

    if (duration === trainDuration) {
      game.phase = Phase.Battle;
      game.players = playerIds.reduce(getPlayerForBattle, game.players);
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
        const getPlayersWithResetTargets = getGetPlayersWithResetTargets(
          game.playerIds
        );

        game.players = gameOvers.reduce(
          getPlayersWithResetTargets,
          game.players
        );
      }
    }
  },
});
