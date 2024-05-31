import './Board.css';
import { FC } from 'react';
import { Tile } from './Tile.tsx';
import type { GameBoard } from '../lib/Game2048.ts';

type Props = { gameBoard: GameBoard; won: boolean; lost: boolean };

export const Board: FC<Props> = ({ gameBoard, won, lost }) => (
  <div className="board" data-testid={'game-board'}>
    {won && <h1 data-testid={'game-won'}>You Win 🤩!</h1>}
    {lost && <h1 data-testid={'game-lost'}>You loose 😭!</h1>}
    {gameBoard.map((row, rowIndex) => (
      <div className="board-row" key={rowIndex}>
        {row.map((value, index) => (
          <Tile value={value} key={index} />
        ))}
      </div>
    ))}
  </div>
);
