import type { BoardSize } from '../types/Game2048.ts';

export const parseSize = (newSize: string): BoardSize => newSize.split('x').map(Number) as BoardSize;
