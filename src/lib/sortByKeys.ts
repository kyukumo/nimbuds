export function sortByKeys(a: string, b: string) {
  return a.localeCompare(b);
}

export function sortEntriesByKeys<T>(
  [a]: [a: string, value: T],
  [b]: [b: string, value: T]
) {
  return sortByKeys(a, b);
}
