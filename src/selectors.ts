import { Store } from "./hooks/useStore";

export const selectPlayer = (state: Store) => state.player;

export const selectPlayers = (state: Store) => state.players;

export const selectPhase = (state: Store) => state.phase;

export const selectPlayerId = (state: Store) => {
  const player = selectPlayer(state);
  return player?.id ?? "";
};

export const selectPing = (state: Store) => {
  const player = selectPlayer(state);
  return player?.ping;
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

export const selectActiveBudElements = (state: Store) => {
  const activeBud = selectActiveBud(state);
  if (!activeBud) return null;
  return activeBud.element;
};

export const selectAscenddActiveBud = (state: Store) => {
  const activeBud = selectActiveBud(state);
  return activeBud?.next;
};

export const selectCanActiveBudAscend = (state: Store) => {
  const advancedActiveBud = selectAscenddActiveBud(state);
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
