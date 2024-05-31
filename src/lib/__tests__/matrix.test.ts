import { rotateClockwise, rotateCounterClockwise } from '../matrix.ts';

describe('matrix functions', () => {
  describe('rotateClockwise', () => {
    it('rotates a matrix clockwise', () => {
      const matrix = [
        [1, 2],
        [3, 4],
      ];

      expect(rotateClockwise(matrix)).toEqual([
        [3, 1],
        [4, 2],
      ]);
    });
  });

  describe('rotateCounterClockwise', () => {
    it('rotates a matrix CounterClockwise', () => {
      const matrix = [
        [1, 2],
        [3, 4],
      ];

      expect(rotateCounterClockwise(matrix)).toEqual([
        [2, 4],
        [1, 3],
      ]);
    });
  });
});
