/**
 * From my Advent of Code repository.
 * See https://github.com/keriati/aoc/blob/master/util/matrix.ts
 */
export function rotateClockwise<T>(matrix: T[][]) {
  return matrix[0].map((_value, index) => matrix.map((row) => row[index]).reverse());
}

export function rotateCounterClockwise<T>(matrix: T[][]) {
  return matrix[0].map((_value, index) => matrix.map((row) => row[row.length - 1 - index]));
}
