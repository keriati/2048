import { joinArrays, splitArray, shuffleArray } from '../array.ts';
import { expect } from 'vitest';

describe('Array Functions', () => {
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

  describe('splitArray', () => {
    it('splits an array into multiple arrays based on the divider', () => {
      const myArray = [0, 0, 0, 1, 0, 0];
      const divider = 1;

      const actual = splitArray(myArray, divider);

      expect(actual).toEqual([
        [0, 0, 0],
        [0, 0],
      ]);
    });

    it('splits an array into multiple arrays based on the divider, resulting in empty arrays', () => {
      const myArray = [1, 1, 0];
      const divider = 1;

      const actual = splitArray(myArray, divider);

      expect(actual).toEqual([[], [], [0]]);
    });
  });

  describe('joinArray', () => {
    it('joins multiple arrays into one array with a divider', () => {
      const myArray = [
        [0, 0],
        [0, 0],
      ];
      const divider = 1;

      const actual = joinArrays(myArray, divider);

      expect(actual).toEqual([0, 0, 1, 0, 0]);
    });

    it('joins multiple arrays into one array with a separator, works with empty arrays', () => {
      const myArray = [[], [], [0]];
      const divider = 1;

      const actual = joinArrays(myArray, divider);

      expect(actual).toEqual([1, 1, 0]);
    });
  });
});
