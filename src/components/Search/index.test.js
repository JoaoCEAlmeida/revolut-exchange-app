import renderWithProviders from '../../test/providers';
import { screen, fireEvent, act } from '@testing-library/react';
import Search from './index';

describe('SearchTest:', () => {
  test('should render correctly', () => {
    const { SearchTest } = renderWithProviders(() => <Search />);

    expect(SearchTest).toMatchSnapshot();
  });

  test('should show not found message', () => {
    renderWithProviders(() => <Search />);

    const searchInput = screen.getByPlaceholderText('Search...');

    act(() => {
      fireEvent.change(searchInput, { target: { value: 'asd' } });
    });

    expect(screen.getByTestId('not-found').textContent).toBe(
      'The searched currency is not available.'
    );
  });

  test('should filter accounts', () => {
    renderWithProviders(() => <Search />);

    const searchInput = screen.getByPlaceholderText('Search...');

    expect(screen.getAllByTestId('button')).toHaveLength(3);

    act(() => {
      fireEvent.change(searchInput, { target: { value: 'Gbp' } });
    });

    expect(screen.getAllByTestId('button')).toHaveLength(1);

    expect(screen.getByText('GBP')).toBeVisible();
  });
});
