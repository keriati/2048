export const shuffleArray = <T>(array: T[]) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
};

export const splitArray = <T>(array: T[], divider: string | number): T[][] => {
  const chunks: T[][] = [];
  let chunk: T[] = [];

  for (let i = 0; i < array.length; i++) {
    if (array[i] === divider) {
      chunks.push(chunk);
      chunk = [];
    } else {
      chunk.push(array[i]);
    }
  }

  chunks.push(chunk);

  return chunks;
};

export const joinArrays = <T>(array: T[][], separator: T) => {
  let result: T[] = [];

  for (let i = 0; i < array.length; i++) {
    result = [...result, ...array[i], separator];
  }

  result.pop();

  return result;
};
