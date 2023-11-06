import {
  BattleType,
  CurrentBuds,
  GameOverPlayers,
  GameState,
  Phase,
  type Player,
  type Players,
} from "./types";
import { buds, maxBuds, maxLevel } from "./data/buds";
import { getSetPlayerForBattle } from "./lib/getPlayerForBattle";
import { getStarterBuds } from "./lib/getStarterBuds";
import { reduceCooldowns } from "./lib/reduceCooldowns";
import { removeDefeatedBuds } from "./lib/removeDefeatedBuds";
import { setEvent, setEvents } from "./lib/setEvent";
import { tryPlayerGameOver } from "./lib/tryPlayerGameOver";
import { tryRandomEvent } from "./lib/tryRandomEvent";
import { getRandomTarget } from "./lib/getRandomTarget";
import { getGetGameOverPlayers } from "./lib/getGameOverPlayers";
import { getGetPlayersWithNewTargets } from "./lib/getGetPlayersWithNewTargets";
import { getSetPlayersWithResetTargets } from "./lib/getSetPlayersWithResetTargets";
import { moves } from "./data/moves";

const oneMinute = 60000;

const createPlayer = (
  id: string,
  playerIds: string[],
  duration = 0
): Player => {
  const numberOfBuds = Math.min(
    Math.max(Math.ceil(duration / oneMinute), 1),
    maxBuds
  );

  const buds = getStarterBuds(numberOfBuds);
  const [{ id: starterId }] = buds;
  const starters = [starterId];

  return {
    buds,
    cooldowns: {},
    defeatedBuds: [],
    events: [],
    gameOver: false,
    id,
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
    playerJoined: (id, { game }) => {
      const { duration, playerIds } = game;
      game.playerIds.push(id);
      game.players[id] = createPlayer(id, playerIds, duration);

      if (playerIds.length > 1) {
        const [playerOneId] = playerIds;
        const playerOne = game.players[playerOneId];

        if (!playerOne.target)
          playerOne.target = getRandomTarget(playerOneId, playerIds);
      }
    },
    playerLeft: (playerId, { game }) => {
      const { playerIds } = game;
      const index = playerIds.indexOf(playerId);
      playerIds.splice(index, 1);
      delete game.players[playerId];
      const getPlayersWithNewTargets = getGetPlayersWithNewTargets(playerId);
      game.players = playerIds.reduce(getPlayersWithNewTargets, game.players);
    },
  },
  actions: {
    attack: ({ move, speed }, { game, playerId }) => {
      const duration = (6 - speed) * 1000;
      const { duration: time, phase, players } = game;

      const player = players[playerId];
      if (!player) throw Rune.invalidAction();

      if (player.cooldowns[move]) {
        const { element, label } = moves[move];

        setEvent({
          event: `<span class="${element}">${label}</span> has to recharge!`,
          game,
          id: playerId,
        });
      }

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
        const player = players[playerId];
        const { sounds: currentSounds } = player;
        player.sounds = currentSounds.filter(isNotComplete);
      }
    },
    ascend: (_, { game, playerId }) => {
      const { players } = game;

      const player = players[playerId];
      if (!player) throw Rune.invalidAction();

      const [bud] = player.buds;
      if (!bud) throw Rune.invalidAction();

      const { ascends = maxLevel, next } = bud;
      if (!next) throw Rune.invalidAction();

      const {
        stats: { hp, level = 1, xp },
      } = bud;

      if (level < ascends) throw Rune.invalidAction();

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
      player.sounds.push("ascend");

      const { element } = nextBud;
      const elements = element.join("-");

      const event = `<span class="${elements}">${bud.name}</span> ascended to <span class="${elements}">${nextBud.name}</span>!`;

      setEvents({
        game,
        events: {
          player: event,
          public: event,
          rival: `Your rival's ${event}`,
        },
        id: playerId,
      });
    },
    switch: (_, { game, playerId }) => {
      const { players } = game;
      const player = players[playerId];
      const { cooldowns } = player;

      const hasCooldowns = Boolean(Object.keys(cooldowns).sort().length);
      if (hasCooldowns) throw Rune.invalidAction();

      const previousBud = player.buds.shift();

      if (previousBud) {
        (player.buds as CurrentBuds).push(previousBud);

        const [activeBud] = player.buds;
        const previousElements = previousBud.element.join("-");
        const nextElements = activeBud?.element.join("-") ?? "";

        const event = `<span class="${previousElements}">${previousBud?.name}</span> switched with <span class="${nextElements}">${activeBud?.name}</span>!`;

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
  update: ({ game }) => {
    const duration = Rune.gameTime();
    game.duration = duration;

    const {
      phases: { [Phase.Train]: trainDuration },
    } = game;

    if (duration === trainDuration) {
      game.phase = Phase.Battle;
      const setPlayerForBattle = getSetPlayerForBattle(game);
      game.playerIds.forEach(setPlayerForBattle);
    }

    const setUpdates = getSetUpdates(game);
    const gameOvers = game.playerIds.reduce(setUpdates, []);

    if (game.phase === Phase.Battle) {
      const won = gameOvers.length === game.playerIds.length - 1;

      if (won) {
        game.ended = true;
        const getGameOverPlayers = getGetGameOverPlayers(game);

        Rune.gameOver({
          players: game.playerIds.reduce<GameOverPlayers>(
            getGameOverPlayers,
            {}
          ),
        });
      } else {
        const setPlayersWithResetTargets = getSetPlayersWithResetTargets(game);
        gameOvers.forEach(setPlayersWithResetTargets);
      }
    }
  },
});
