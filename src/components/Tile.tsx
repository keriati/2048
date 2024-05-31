import './Tile.css';
import { FC } from 'react';

export const Tile: FC<{ value: number }> = ({ value }) => {
  return (
    <div data-testid="board-tile" className={`tile tile-${value}`}>
      {value}
    </div>
  );
};
