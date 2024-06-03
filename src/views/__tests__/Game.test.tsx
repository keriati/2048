import { fireEvent, render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Game } from '../Game.tsx';
import { Game2048 } from '../../lib/Game2048.ts';

const TEST_WIDTH = 6;
const TEST_HEIGHT = 6;

const startNewGame = () => new Game2048(TEST_WIDTH, TEST_HEIGHT);

describe('Game component', () => {
  it('renders without crashing', () => {
    const game = new Game2048(TEST_WIDTH, TEST_HEIGHT);
    const setGame = () => {};
    const { queryByTestId } = render(<Game game={game} setGame={setGame} startNewGame={startNewGame} />);

    expect(queryByTestId('game-2048')).toBeTruthy();
  });

  it('starts a new game when the start button is clicked with 35 tiles set to 0, 1 tile set to 2', () => {
    const game = new Game2048(TEST_WIDTH, TEST_HEIGHT);
    const setGame = () => {};
    const { getByTestId, container } = render(<Game game={game} setGame={setGame} startNewGame={startNewGame} />);
    const startButton = getByTestId('start-button');

    fireEvent.click(startButton);

    expect(container.querySelectorAll('.tile-0')).toHaveLength(35);
    expect(container.querySelectorAll('.tile-2')).toHaveLength(1);
  });
});
