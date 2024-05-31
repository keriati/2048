import { render } from '@testing-library/react';
import { Header } from '../Header.tsx';

describe('Tile component', () => {
  it('renders without crashing', () => {
    const { queryByTestId } = render(<Header />);

    expect(queryByTestId('header-title')).toBeTruthy();
  });
});
