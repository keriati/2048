import { render } from '@testing-library/react';
import { Game2048, GameBoard } from '../../lib/Game2048.ts';
import { Board } from '../Board.tsx';

describe('Board component', () => {
  let game: Game2048;
  let board: GameBoard;

  beforeEach(() => {
    game = new Game2048(4, 4);
    board = game.board;
  });

  it('renders without crashing', () => {
    const { queryByTestId } = render(<Board gameBoard={board} won={false} lost={false} />);

    expect(queryByTestId('game-board')).toBeTruthy();
  });

  it('displays winning message when game is won', () => {
    const { queryByTestId } = render(<Board gameBoard={board} won={true} lost={false} />);

    expect(queryByTestId('game-won')).toBeTruthy();
  });

  it('does not display the winning message when game is not won', () => {
    const { queryByTestId } = render(<Board gameBoard={board} won={false} lost={false} />);

    expect(queryByTestId('game-won')).toBeFalsy();
  });

  it('displays lost message when game is lost', () => {
    const { queryByTestId } = render(<Board gameBoard={board} won={false} lost={true} />);

    expect(queryByTestId('game-lost')).toBeTruthy();
  });

  it('does not display the lost message when game is not lost', () => {
    const { queryByTestId } = render(<Board gameBoard={board} won={false} lost={false} />);

    expect(queryByTestId('game-lost')).toBeFalsy();
  });

  //
  // it('displays losing message when game is lost', () => {
  //   const { getByText } = render(<Board gameBoard={board} won={false} lost={true} />);
  //   expect(getByText('You loose 😭!')).toBeInTheDocument();
  // });
  //
  // it('renders correct number of tiles', () => {
  //   const { getAllByRole } = render(<Board gameBoard={board} won={false} lost={false} />);
  //   expect(getAllByRole('tile')).toHaveLength(16);
  // });
});
