import type { BoardSize } from './lib/Game2048.ts';

export const KEY_LEFT = 'ArrowLeft';
export const KEY_UP = 'ArrowUp';
export const KEY_RIGHT = 'ArrowRight';
export const KEY_DOWN = 'ArrowDown';

export const AUTOPLAY_INPUT_DELAY = 30;
export const AUTOPLAY_NEW_TWO_COUNT = 5;

export const BOARD_SIZES: BoardSize[] = [
  [4, 4],
  [6, 6],
  [8, 8],
  [10, 10],
  [14, 14],
  [6, 8],
  [6, 10],
  [2, 10],
  [5, 5],
];
export const DEFAULT_SIZE: BoardSize = [6, 6];

export const DEFAULT_OBSTACLES = 0;
export const NUM_OBSTACLES = [0, 1, 2, 3, 4];
