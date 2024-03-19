function getMinMax(str) {
  let numbers = str.match(/-?\d+(\.\d+)?/g);
  if (!numbers) return null;

  let min = Math.min(...numbers.map(Number));
  let max = Math.max(...numbers.map(Number));

  return { min, max };
}
