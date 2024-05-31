import type { BoardSize } from '../lib/Game2048.ts';

export const parseSize = (newSize: string): BoardSize => newSize.split('x').map(Number) as BoardSize;
