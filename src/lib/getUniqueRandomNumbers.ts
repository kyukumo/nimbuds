const getNumber = (_: number, index: number) => index;
const sortRandom = () => Math.random() - 0.5;

export const getUniqueRandomNumbers = (count: number, length = 10) => {
  const numbers = Array(length).fill(null).map(getNumber);
  numbers.sort(sortRandom);
  const indexes = numbers.slice(0, count);
  return indexes;
};
