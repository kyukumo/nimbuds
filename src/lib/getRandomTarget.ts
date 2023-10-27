import { getRandomNumber } from "./getRandomNumber";

export const getRandomTarget = (id: string, playerIds: string[]) => {
  const index = playerIds.indexOf(id);
  const ids = [...playerIds];
  ids.splice(index, 1);
  const targetIndex = getRandomNumber(0, ids.length - 1);
  return ids[targetIndex];
};
