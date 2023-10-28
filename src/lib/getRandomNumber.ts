export const getRandomNumber = (
  min: number,
  max: number,
  exclude: number[] = []
) => {
  const numbers = [];

  for (let index = min; index <= max; index++)
    if (!exclude.includes(index)) numbers.push(index);

  if (!numbers.length) return -1;

  const index = Math.floor(Math.random() * numbers.length);
  return numbers[index];
};
