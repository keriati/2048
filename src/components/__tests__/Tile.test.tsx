import { render } from '@testing-library/react';
import { Tile } from '../Tile.tsx';

describe('Tile component', () => {
  it('renders without crashing', () => {
    const { queryByTestId } = render(<Tile value={2} />);

    expect(queryByTestId('board-tile')).toBeTruthy();
  });

  it('applies the correct CSS class based on the value prop', () => {
    const { container } = render(<Tile value={2} />);

    expect(container.getElementsByClassName('tile-2').length).toEqual(1);
  });

  it('renders the correct value based on the value prop', () => {
    const { getByText } = render(<Tile value={123} />);

    expect(getByText('123')).toBeTruthy();
  });
});
