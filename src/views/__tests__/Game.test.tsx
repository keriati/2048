import { render, fireEvent } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Game } from '../Game.tsx';
import { Game2048 } from '../../lib/Game2048.ts';

describe('Game component', () => {
  it('renders without crashing', () => {
    const game = new Game2048(6, 6);
    const setGame = () => {};
    const { queryByTestId } = render(<Game game={game} setGame={setGame} />);

    expect(queryByTestId('game-2048')).toBeTruthy();
  });

  it('starts a new game when the start button is clicked with 35 tiles set to 0, 1 tile set to 2', () => {
    const game = new Game2048(6, 6);
    const setGame = () => {};
    const { getByTestId, container } = render(<Game game={game} setGame={setGame} />);
    const startButton = getByTestId('start-button');

    fireEvent.click(startButton);

    expect(container.querySelectorAll('.tile-0')).toHaveLength(35);
    expect(container.querySelectorAll('.tile-2')).toHaveLength(1);
  });
});
