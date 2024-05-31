import { render, fireEvent } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Game } from '../Game.tsx';

describe('Game component', () => {
  it('renders without crashing', () => {
    const { queryByTestId } = render(<Game />);

    expect(queryByTestId('game-2048')).toBeTruthy();
  });

  it('starts a new game when the start button is clicked', () => {
    const { getByText } = render(<Game />);
    const startButton = getByText('Start!');

    fireEvent.click(startButton);

    expect(getByText('2048')).toBeTruthy();
  });
  //
  // it('changes the board size when a new size is selected', () => {
  //   const { getByLabelText, getByText } = render(<Game />);
  //   const select = getByLabelText('Board Size');
  //
  //   fireEvent.change(select, { target: { value: '5x5' } });
  //
  //   const startButton = getByText('Start!');
  //   fireEvent.click(startButton);
  // });
  //
  // it('toggles easy mode when the switch is clicked', () => {
  //   const { getByLabelText } = render(<Game />);
  //   const switchButton = getByLabelText('Easy Mode');
  //
  //   fireEvent.click(switchButton);
  //
  //   expect(switchButton.checked).toEqual(true);
  // });
});
