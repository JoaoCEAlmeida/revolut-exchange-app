import { screen, fireEvent } from '@testing-library/react';
import Button from './index';
import renderWithProviders from '../../test/providers';

const defaultProps = {
  text: 'Press me',
  type: 'button',
  disabled: false,
  onClick: jest.fn()
};

describe('Button Tests', () => {
  test('should render correctly', () => {
    const { ButtonTest } = renderWithProviders(() => <Button {...defaultProps} />);

    expect(ButtonTest).toMatchSnapshot();
  });

  test('should fire the onClick event', () => {
    const clickHandler = jest.fn();

    renderWithProviders(() => <Button {...defaultProps} onClick={clickHandler} />);

    fireEvent.click(screen.getByText('Press me'));

    expect(clickHandler).toHaveBeenCalled();
  });

  test('should not fire the onClick event', () => {
    const clickHandler = jest.fn();

    renderWithProviders(() => <Button {...defaultProps} onClick={clickHandler} disabled />);

    fireEvent.click(screen.getByText('Press me'));

    expect(clickHandler).not.toHaveBeenCalled();
  });
});
