import { moves } from "./data/moves";
import { Store } from "./hooks/useStore";
import { Bud, Move, Phase, Player } from "./types";

export const selectEvents = (state: Store) => state.events;

export const selectReady = (state: Store) => state.ready;

export const selectPlayer = (state: Store) => state.player;

export const selectGameEnded = (state: Store) => state.ended;

export const selectGameOver = (state: Store) => {
  const player = selectPlayer(state);
  return player?.gameOver;
};

export const selectTarget = (state: Store) => {
  const player = selectPlayer(state);
  return player?.target;
};

export const selectCooldowns = (state: Store) => {
  const player = selectPlayer(state);
  return player?.cooldowns;
};

export const selectHasCooldown = (state: Store) => {
  const cooldowns = selectCooldowns(state);
  if (!cooldowns) return false;
  return Boolean(Object.keys(cooldowns).length);
};

export const selectDuration = (state: Store) => {
  return state.duration;
};

export const selectTrainPhaseDuration = (state: Store) => {
  return state.phases[Phase.Train] ?? 0;
};

export const selectPlayers = (state: Store) => state.players;

export const selectPhase = (state: Store) => state.phase;

export const selectBattleType = (state: Store) => state.battleType;

export const selectPlayerId = (state: Store) => {
  const player = selectPlayer(state);
  return player?.id ?? "";
};

export const selectIsSpectator = (state: Store) => {
  const id = selectPlayerId(state);
  return !id;
};

export const selectLastEvent = (state: Store) => {
  const player = selectPlayer(state);
  return player?.lastEvent ?? null;
};

export const selectBuds = (state: Store) => {
  const player = selectPlayer(state);
  if (!player) return null;
  return player.buds;
};

export const selectActiveBud = (state: Store) => {
  const buds = selectBuds(state);
  if (!buds) return null;
  const [activeBud] = buds;
  return activeBud;
};

export const selectCanSwitch = (state: Store) => {
  const buds = selectBuds(state);
  if (!buds) return false;
  return buds?.length > 1;
};

export const selectActiveBudMoves = (state: Store) => {
  const activeBud = selectActiveBud(state);
  const cooldowns = selectCooldowns(state);

  const getMove = (move: Move) => ({
    ...moves[move],
    cooldown: cooldowns?.[move],
    move,
  });

  return activeBud?.moves.map(getMove) ?? [];
};

export const selectActiveBudName = (state: Store) => {
  const activeBud = selectActiveBud(state);
  return activeBud?.name;
};

export const selectActiveBudDescription = (state: Store) => {
  const activeBud = selectActiveBud(state);
  return activeBud?.description;
};

export const selectActiveBudStats = (state: Store) => {
  const activeBud = selectActiveBud(state);
  return activeBud?.stats;
};

export const selectActiveBudSpeed = (state: Store) => {
  const stats = selectActiveBudStats(state);
  return stats?.speed ?? 0;
};

export const selectActiveBudElements = (state: Store) => {
  const activeBud = selectActiveBud(state);
  if (!activeBud) return null;
  return activeBud.element;
};

export const selectAscendedActiveBud = (state: Store) => {
  const activeBud = selectActiveBud(state);
  return activeBud?.next;
};

export const selectActiveBudAscendsAt = (state: Store) => {
  const activeBud = selectActiveBud(state);
  return activeBud?.ascends;
};

export const selectCanActiveBudAscend = (state: Store) => {
  const ascendedBud = selectAscendedActiveBud(state);
  if (!ascendedBud) return false;
  const stats = selectActiveBudStats(state);
  if (!stats) return false;
  const { level = 1 } = stats;
  const ascendsAt = selectActiveBudAscendsAt(state);
  if (!ascendsAt) return false;
  return level >= ascendsAt;
};

export const selectMyBuds = (state: Store) => {
  const player = selectPlayer(state);
  if (!player) return null;

  return player.buds
    .map(
      ({ name, element, next }) =>
        `${name}: ${element.join(", ")}${next ? `; grows to ${next}` : ""}`
    )
    .join(", ");
};

export const selectRivals = (state: Store) => {
  const players = selectPlayers(state);
  return Object.values(players);
};

interface RivalBud extends Bud {
  playerId: string;
}

const hasBuds = ({ buds: { length } }: Player) => Boolean(length);

export const selectRivalActiveBuds = (state: Store) => {
  const rivals = selectRivals(state);

  const getRivalBuds = (a: RivalBud[], { buds: [bud], id }: Player) => [
    ...a,
    {
      ...bud,
      playerId: id,
    } as RivalBud,
  ];

  const rivalBuds = rivals.filter(hasBuds).reduce<RivalBud[]>(getRivalBuds, []);
  return rivalBuds;
};

export const selectActiveBuds = (state: Store) => {
  const players = selectPlayers(state);

  const getActiveBud = (
    all: RivalBud[],
    { buds: [bud], id: playerId }: Player
  ) =>
    bud
      ? [
          ...all,
          {
            ...bud,
            playerId,
          },
        ]
      : all;

  const activeBuds = Object.values(players).reduce<RivalBud[]>(
    getActiveBud,
    []
  );

  return activeBuds;
};
