import { shuffleArray } from '../shuffle.ts';

describe('shuffleArray', () => {
  it('keeps the length of tha array', () => {
    const array = [1, 2, 3, 4, 5];
    const length = array.length;

    shuffleArray(array);

    expect(array.length).toEqual(length);
  });

  it('keeps the same elements after shuffle', () => {
    const array = [1, 2, 3, 4, 5];
    const array2 = [1, 2, 3, 4, 5];

    shuffleArray(array);

    expect(array.sort()).toEqual(array2);
  });

  it('keeps empty array empty', () => {
    const array: number[] = [];

    shuffleArray(array);

    expect(array).toEqual([]);
  });
});
