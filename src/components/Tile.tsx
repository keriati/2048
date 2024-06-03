import './Tile.css';
import type { FC } from 'react';

type Props = { value: number };

export const Tile: FC<Props> = ({ value }) => (
  <div data-testid="board-tile" className={`tile tile-${value.toString()}`}>
    {value}
  </div>
);
