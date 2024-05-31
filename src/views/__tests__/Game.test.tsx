import { render, fireEvent } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Game } from '../Game.tsx';

describe('Game component', () => {
  it('renders without crashing', () => {
    const { queryByTestId } = render(<Game />);

    expect(queryByTestId('game-2048')).toBeTruthy();
  });

  it('starts a new game when the start button is clicked with 35 tiles set to 0, 1 tile set to 2', () => {
    const { getByTestId, getAllByText } = render(<Game />);
    const startButton = getByTestId('start-button');

    fireEvent.click(startButton);

    expect(getAllByText('0')).toHaveLength(35);
    expect(getAllByText('2')).toHaveLength(1);
  });
});
