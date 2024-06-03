export type GameBoard = number[][];
export type BoardSize = [number, number];

export interface IGame2048 {
  board: GameBoard;

  readonly width: number;
  readonly height: number;
  readonly startingTwos: number;
  readonly obstacles: number;

  left(): void;

  right(): void;

  up(): void;

  down(): void;

  isWon(): boolean;

  isLost(): boolean;

  isLostEasyMode(): boolean;
}

export type GameControls = 'up' | 'down' | 'left' | 'right';
