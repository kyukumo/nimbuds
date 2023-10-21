import { moves } from "./data/moves";
import { Store } from "./hooks/useStore";
import { Bud, Move } from "./types";

export const selectPlayer = (state: Store) => state.player;

export const selectCooldowns = (state: Store) => {
  const player = selectPlayer(state);
  return player?.cooldowns;
};

export const selectPlayers = (state: Store) => state.players;

export const selectPhase = (state: Store) => state.phase;

export const selectBattleType = (state: Store) => state.battleType;

export const selectPlayerId = (state: Store) => {
  const player = selectPlayer(state);
  return player?.id ?? "";
};

export const selectLastEvent = (state: Store) => {
  const player = selectPlayer(state);
  return player?.lastEvent ?? null;
};

export const selectActiveBud = (state: Store) => {
  const player = selectPlayer(state);
  if (!player) return null;
  const [activeBud] = player.buds;
  return activeBud;
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

export const selectCanActiveBudAscend = (state: Store) => {
  const advancedActiveBud = selectAscendedActiveBud(state);
  return Boolean(advancedActiveBud);
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

export const selectRivalActiveBuds = (state: Store) => {
  const rivals = selectRivals(state);

  return rivals.reduce<RivalBud[]>(
    (a, { buds: [bud], id }) => [
      ...a,
      {
        ...bud,
        playerId: id,
      },
    ],
    []
  );
};
