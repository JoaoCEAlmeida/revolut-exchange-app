import { screen, fireEvent } from '@testing-library/react';
import CurrencyPicker from './index';
import renderWithProviders from '../../test/providers';

const defaultProps = {
  currency: 'EUR',
  balance: 1000,
  onClick: jest.fn()
};

describe('CurrencyPickerTests', () => {
  test('should render correctly', () => {
    const { CurrencyPickerTest } = renderWithProviders(() => <CurrencyPicker {...defaultProps} />);

    expect(CurrencyPickerTest).toMatchSnapshot();
  });

  test('should fire the onClick event', () => {
    const clickHandler = jest.fn();

    renderWithProviders(() => <CurrencyPicker {...defaultProps} onClick={clickHandler} />);

    fireEvent.click(screen.getByText('EUR'));

    expect(clickHandler).toHaveBeenCalled();
  });

  test('should have the correct balance', () => {
    const balance = 500;
    renderWithProviders(() => <CurrencyPicker {...defaultProps} balance={balance} />);

    expect(screen.getByTestId('test-balance').textContent).toEqual(`Balance: ${balance}`);
  });

  test('should have the correct currency', () => {
    const currency = 'USD';
    renderWithProviders(() => <CurrencyPicker {...defaultProps} currency={currency} />);

    expect(screen.getByTestId('test-currency').textContent).toEqual(`${currency}`);
  });
});
