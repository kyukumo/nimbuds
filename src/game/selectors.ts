import { gameMachine } from ".";

export const selectPlayer = ({ context: { player } }: typeof gameMachine) =>
  player;

export const selectMyBuds = (state: typeof gameMachine) => {
  const player = selectPlayer(state);
  if (!player) return null;
  return player.buds.map(({ name }) => name).join(", ");
};

export const selectRivals = ({ context: { players } }: typeof gameMachine) =>
  players ? Object.keys(players).join(", ") : "";
