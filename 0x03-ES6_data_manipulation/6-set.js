export function setFromArray(array) {
  const set = new Set();

  for (const element of array) {
    set.add(element);
  }

  return set;
}
