import { rotateClockwise, rotateCounterClockwise } from './matrix.ts';
import { shuffleArray } from './shuffle.ts';

export type GameBoard = number[][];
export type BoardSize = [number, number];

export const WIN_SCORE = 2048;
export const HEIGHT = 6;
export const WIDTH = 6;
export const STARTING_TWOS = 1;

export class Game2048 {
  board: GameBoard = [];

  constructor(
    public readonly width = WIDTH,
    public readonly height = HEIGHT,
    public readonly startingTwos: number = STARTING_TWOS,
  ) {
    this.createBoard();
  }

  createBoard() {
    const tiles = Array<number>(this.width * this.height).fill(0);

    for (let i = 0; i < this.startingTwos; i++) {
      tiles[i] = 2;
    }

    shuffleArray(tiles);

    let j = 0;

    for (let y = 0; y < this.height; y++) {
      this.board[y] = [];
      for (let x = 0; x < this.width; x++) {
        this.board[y][x] = tiles[j];
        j++;
      }
    }
  }

  addTwo() {
    const zeroPositions: [number, number][] = [];
    for (let y = 0; y < this.height; y++) {
      for (let x = 0; x < this.width; x++) {
        if (this.board[y][x] === 0) {
          zeroPositions.push([x, y]);
        }
      }
    }

    if (zeroPositions.length === 0) {
      return;
    }

    shuffleArray(zeroPositions);

    const [newX, newY] = zeroPositions[0];

    this.board[newY][newX] = 2;
  }

  static moveRowLeft(row: number[]) {
    const newRow = row.filter((n) => n != 0);

    for (let i = 0; i < newRow.length - 1; i++) {
      if (newRow[i] === newRow[i + 1]) {
        newRow[i + 1] = 0;
        newRow[i] *= 2;
      }
    }

    const newRowMoved = newRow.filter((n) => n != 0);

    while (newRowMoved.length < row.length) {
      newRowMoved.push(0);
    }

    return newRowMoved;
  }

  left() {
    this.board = this.board.map((row) => Game2048.moveRowLeft(row));
    this.addTwo();
  }

  right() {
    this.board = this.board
      .map((row) => row.reverse())
      .map((row) => Game2048.moveRowLeft(row))
      .map((row) => row.reverse());
    this.addTwo();
  }

  up() {
    this.board = rotateClockwise(rotateCounterClockwise(this.board).map((row) => Game2048.moveRowLeft(row)));
    this.addTwo();
  }

  down() {
    this.board = rotateCounterClockwise(rotateClockwise(this.board).map((row) => Game2048.moveRowLeft(row)));
    this.addTwo();
  }

  isWon(): boolean {
    return this.board.flat().includes(WIN_SCORE);
  }

  isLost(): boolean {
    return this.board.flat().filter((n) => n == 0).length < STARTING_TWOS;
  }

  isLostEasyMode(): boolean {
    if (this.board.flat().filter((n) => n == 0).length > 0) return false;

    for (let y = 0; y < this.height; y++) {
      for (let x = 0; x < this.width; x++) {
        const nei = [
          [x + 1, y],
          [x - 1, y],
          [x, y + 1],
          [x, y - 1],
        ];

        for (const [nx, ny] of nei) {
          if (this.board[ny]?.[nx] === this.board[y]?.[x]) {
            return false;
          }
        }
      }
    }

    return true;
  }
}
