import { screen, fireEvent } from '@testing-library/react';
import SwitchButton from './index';
import renderWithProviders from '../../test/providers';

const defaultProps = {
  transactionType: 'Sell',
  onClick: jest.fn()
};

describe('SwitchButton Tests', () => {
  test('should render correctly', () => {
    const { SwitchButtonTest } = renderWithProviders(() => <SwitchButton {...defaultProps} />);

    expect(SwitchButtonTest).toMatchSnapshot();
  });

  test('should fire the onClick event', () => {
    const clickHandler = jest.fn();

    renderWithProviders(() => <SwitchButton {...defaultProps} onClick={clickHandler} />);

    fireEvent.click(screen.getByTestId('test-switchButton'));

    expect(clickHandler).toHaveBeenCalled();
  });
});
