import { Game2048, WIN_SCORE } from '../Game2048.ts';
import { describe, expect } from 'vitest';

const getGame = () => {
  const game = new Game2048(4, 4);
  const spy = vi.spyOn(game, 'addTwo');
  spy.mockImplementation(() => {});

  game.board = [
    [2, 0, 2, 2],
    [0, 0, 0, 0],
    [2, 2, 0, 2],
    [4, 0, 0, 4],
  ];

  return game;
};

describe('Game2048', () => {
  describe('#constructor()', () => {
    it('can be constructed with 0 ', () => {
      const game = new Game2048(2, 2, 0);

      expect(game.board).toEqual([
        [0, 0],
        [0, 0],
      ]);
    });

    it('contains one times the number 2 by default', () => {
      const game = new Game2048(2, 2);

      expect(game.board.flat()).include(2);
    });

    it('contains multiple times the number 2 when provided', () => {
      const game = new Game2048(2, 2, 4);

      expect(game.board).toEqual([
        [2, 2],
        [2, 2],
      ]);
    });
  });

  describe('#moveRowLeft()', () => {
    it('moves the tiles to the left, merging numbers', () => {
      const game = new Game2048(4, 4);
      const row = [2, 0, 2, 2];

      const newRow = game.moveRowLeft(row);

      expect(newRow).toEqual([4, 2, 0, 0]);
    });

    it('moves the tiles to the left, not merging numbers', () => {
      const game = new Game2048(4, 4);
      const row = [0, 0, 0, 2];

      const newRow = game.moveRowLeft(row);

      expect(newRow).toEqual([2, 0, 0, 0]);
    });

    it('does not change rows containing only 0', () => {
      const game = new Game2048(4, 4);
      const row = [0, 0, 0, 0];

      const newRow = game.moveRowLeft(row);

      expect(newRow).toEqual([0, 0, 0, 0]);
    });
  });

  describe('#left()', () => {
    it('moves the board to left', () => {
      const game = getGame();

      game.left();

      expect(game.board).toEqual([
        [4, 2, 0, 0],
        [0, 0, 0, 0],
        [4, 2, 0, 0],
        [8, 0, 0, 0],
      ]);
    });
  });

  describe('#right()', () => {
    it('moves the board to right', () => {
      const game = getGame();

      game.right();

      expect(game.board).toEqual([
        [0, 0, 2, 4],
        [0, 0, 0, 0],
        [0, 0, 2, 4],
        [0, 0, 0, 8],
      ]);
    });
  });

  describe('#up()', () => {
    it('moves the board to right', () => {
      const game = getGame();

      game.up();

      expect(game.board).toEqual([
        [4, 2, 2, 4],
        [4, 0, 0, 4],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
      ]);
    });
  });

  describe('#down()', () => {
    it('move the board down', () => {
      const game = getGame();

      game.down();

      expect(game.board).toEqual([
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [4, 0, 0, 4],
        [4, 2, 2, 4],
      ]);
    });
  });

  describe('#addTwo()', () => {
    it('adds a two to the board', () => {
      const game = new Game2048(2, 2);
      game.board = [
        [4, 4],
        [4, 0],
      ];

      game.addTwo();

      expect(game.board).toEqual([
        [4, 4],
        [4, 2],
      ]);
    });

    it('does not change the board when it is full', () => {
      const game = new Game2048(2, 2);
      game.board = [
        [4, 4],
        [4, 4],
      ];

      game.addTwo();

      expect(game.board).toEqual([
        [4, 4],
        [4, 4],
      ]);
    });
  });

  describe('#isWon()', () => {
    it('returns true if the win score is reached', () => {
      const game = new Game2048(2, 2);
      game.board = [
        [2, WIN_SCORE],
        [0, 0],
      ];

      expect(game.isWon()).toBeTruthy();
    });

    it('returns false if the win score is reached', () => {
      const game = new Game2048(2, 2);
      game.board = [
        [2, 0],
        [0, 0],
      ];

      expect(game.isWon()).toBeFalsy();
    });
  });

  describe('#isLost()', () => {
    it('returns true if there are no more spots to put a zero', () => {
      const game = new Game2048(2, 2);
      game.board = [
        [2, 2],
        [8, 16],
      ];

      expect(game.isLost()).toBeTruthy();
    });

    it('returns false if there is still a spot to put a zero', () => {
      const game = new Game2048(2, 2);
      game.board = [
        [0, 4],
        [2, 16],
      ];

      expect(game.isLost()).toBeFalsy();
    });
  });

  describe('#isLostEasyMode()', () => {
    it('returns true if the game is lost', () => {
      const game = new Game2048(2, 2);
      game.board = [
        [2, 4],
        [8, 16],
      ];

      expect(game.isLostEasyMode()).toBeTruthy();
    });

    it('returns false if the game is not lost', () => {
      const game = new Game2048(2, 2);
      game.board = [
        [2, 4],
        [2, 16],
      ];

      expect(game.isLostEasyMode()).toBeFalsy();
    });

    it('returns false if the game is not lost 2', () => {
      const game = new Game2048(2, 2);
      game.board = [
        [2, 2],
        [4, 16],
      ];

      expect(game.isLostEasyMode()).toBeFalsy();
    });
  });
});
