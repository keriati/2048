import './Board.css';
import { FC } from 'react';
import { Tile } from './Tile.tsx';
import type { GameBoard } from '../lib/Game2048.ts';

type Props = { gameBoard: GameBoard; won: boolean; lost: boolean };

export const Board: FC<Props> = ({ gameBoard, won, lost }) => (
  <div className="board" data-testid={'game-board'}>
    {won && (
      <div data-testid={'game-won'} className={'finish-title'}>
        You Won!
        <br />
        Awesome!
      </div>
    )}
    {lost && (
      <div data-testid={'game-lost'} className={'finish-title'}>
        You Lost!
        <br />
        Try again!
      </div>
    )}
    {gameBoard.map((row, rowIndex) => (
      <div key={rowIndex}>
        {row.map((value, index) => (
          <Tile value={value} key={index} />
        ))}
      </div>
    ))}
  </div>
);
