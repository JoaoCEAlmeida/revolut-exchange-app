import { screen, fireEvent } from '@testing-library/react';
import CurrencyInput from './index';
import renderWithProviders from '../../test/providers';

const defaultProps = {
  inputProps: {
    placeholder: 'Placeholder',
    type: 'button',
    error: '',
    onChange: jest.fn()
  },
  pickerProps: {
    currency: 'EUR',
    balance: 1000,
    onClick: jest.fn()
  }
};

describe('CurrencyInput Tests', () => {
  test('should render correctly', () => {
    const { CurrencyInputTest } = renderWithProviders(() => <CurrencyInput {...defaultProps} />);

    expect(CurrencyInputTest).toMatchSnapshot();
  });

  test('should allow editing', () => {
    renderWithProviders(() => <CurrencyInput {...defaultProps} />);
    const input = screen.getByPlaceholderText('Placeholder');

    expect(input.value).toBe('');

    fireEvent.change(input, { target: { value: '1000' } });

    expect(input.value).toBe('1000');
  });

  test('should fire the onClick event', () => {
    const clickHandler = jest.fn();

    renderWithProviders(() => (
      <CurrencyInput
        {...defaultProps}
        pickerProps={{ ...defaultProps.pickerProps, onClick: clickHandler }}
      />
    ));

    fireEvent.click(screen.getByText('EUR'));

    expect(clickHandler).toHaveBeenCalled();
  });

  test('should have the correct balance', () => {
    const balance = 12.23;
    renderWithProviders(() => (
      <CurrencyInput
        {...defaultProps}
        pickerProps={{ ...defaultProps.pickerProps, balance: balance }}
      />
    ));

    expect(screen.getByTestId('test-balance').textContent).toEqual(`Balance: ${balance}`);
  });

  test('should have the correct currency', () => {
    const currency = 'GBP';
    renderWithProviders(() => (
      <CurrencyInput
        {...defaultProps}
        pickerProps={{ ...defaultProps.pickerProps, currency: currency }}
      />
    ));
    expect(screen.getByTestId('test-currency').textContent).toEqual(`${currency}`);
  });
});
