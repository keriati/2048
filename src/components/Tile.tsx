import './Tile.css';
import { FC } from 'react';

export const Tile: FC<{ value: number }> = ({ value }) => {
  return <div className={`tile tile-${value}`}>{value}</div>;
};
