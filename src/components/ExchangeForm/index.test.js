import renderWithProviders from '../../test/providers';
import { screen, fireEvent, act } from '@testing-library/react';
import ExchangeForm from './index';

describe('ExchangeFormTest:', () => {
  test('should render correctly', () => {
    const { ExchangeFormTest } = renderWithProviders(() => <ExchangeForm />);

    expect(ExchangeFormTest).toMatchSnapshot();
  });

  test('Exhange button should be disable if input is empty', () => {
    renderWithProviders(() => <ExchangeForm />);

    expect(screen.getByText('Sell EUR for USD')).toBeDisabled();
  });

  test('should sell currency based on user input', () => {
    const amountToSell = 10;
    renderWithProviders(() => <ExchangeForm />);
    const [currencyFromInput] = screen.getAllByPlaceholderText('0');
    const [currencyFromBalanceNode] = screen.getAllByTestId('test-balance');
    const [, currencyFromBalance] = currencyFromBalanceNode.textContent.split(': ');

    act(() => {
      fireEvent.change(currencyFromInput, { target: { value: amountToSell } });
    });

    act(() => {
      fireEvent.click(screen.getByText('Sell EUR for USD'));
    });

    const [newcurrencyFromBalanceNode] = screen.getAllByText(/Balance:/);
    const [, newcurrencyFromBalance] = newcurrencyFromBalanceNode.textContent.split(':');

    expect(Number(newcurrencyFromBalance.trim())).toBe(currencyFromBalance - amountToSell);
  });

  test('should buy currency based on user input', () => {
    const amountToBuy = 10;
    renderWithProviders(() => <ExchangeForm />);
    const [, currencyToInput] = screen.getAllByPlaceholderText('0');
    const [, currencyToBalanceNode] = screen.getAllByTestId('test-balance');
    const [, currencyToBalance] = currencyToBalanceNode.textContent.split(': ');

    act(() => {
      fireEvent.click(screen.getByTestId('test-switchButton'));
    });

    act(() => {
      fireEvent.change(currencyToInput, { target: { value: amountToBuy } });
    });

    act(() => {
      fireEvent.click(screen.getByText('Buy EUR with USD'));
    });

    const [, newcurrencyToBalanceNode] = screen.getAllByText(/Balance:/);
    const [, newcurrencyToBalance] = newcurrencyToBalanceNode.textContent.split(':');

    expect(Number(newcurrencyToBalance.trim())).toBe(currencyToBalance - amountToBuy);
  });

  test('should disable transaction button when user type an amount higher than balance', () => {
    const amountToSell = 1200;
    renderWithProviders(() => <ExchangeForm />);
    act(() => {
      fireEvent.click(screen.getByTestId('test-switchButton'));
    });

    const [currencyFromInput] = screen.getAllByPlaceholderText('0');

    act(() => {
      fireEvent.change(currencyFromInput, { target: { value: amountToSell } });
    });

    expect(screen.getByText('Sell EUR for USD')).toBeDisabled();
    expect(screen.getByTestId('test-error').textContent).toBe('Amount exceeds balance limit');
  });

  test('should disable transaction button when user type values that are not numbers', () => {
    renderWithProviders(() => <ExchangeForm />);

    const [currencyFromInput] = screen.getAllByPlaceholderText('0');

    act(() => {
      fireEvent.change(currencyFromInput, { target: { value: 'asd' } });
    });

    expect(screen.getByText('Sell EUR for USD')).toBeDisabled();
    expect(screen.getByTestId('test-error').textContent).toBe(
      'Only numbers allowed (max 2 decimals)'
    );
  });
});
