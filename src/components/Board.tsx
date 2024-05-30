import './Board.css';
import { FC } from 'react';
import { Tile } from './Tile.tsx';

export const Board: FC<{ gameState: number[][] }> = ({ gameState }) => {
  return (
    <div className="board">
      {gameState.map((row, rowIndex) => (
        <div className="board-row" key={rowIndex}>
          {row.map((value, index) => (
            <Tile value={value} key={index} />
          ))}
        </div>
      ))}
    </div>
  );
};
