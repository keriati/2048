import './Board.css';
import { FC } from 'react';
import { Tile } from './Tile.tsx';
import type { GameBoard } from '../lib/Game2048.ts';

export const Board: FC<{ gameBoard: GameBoard; won: boolean; lost: boolean }> = ({ gameBoard, won, lost }) => {
  return (
    <div className="board">
      {won && <h1>You Win 🤩!</h1>}
      {lost && <h1>You loose 😭!</h1>}
      {!won &&
        !lost &&
        gameBoard.map((row, rowIndex) => (
          <div className="board-row" key={rowIndex}>
            {row.map((value, index) => (
              <Tile value={value} key={index} />
            ))}
          </div>
        ))}
    </div>
  );
};
