import { screen, fireEvent } from '@testing-library/react';
import Input from './index';
import renderWithProviders from '../../test/providers';

const defaultProps = {
  placeholder: 'Placeholder',
  type: 'button',
  error: ''
};

describe('Input Tests', () => {
  test('should render correctly', () => {
    const { InputTest } = renderWithProviders(() => <Input {...defaultProps} />);

    expect(InputTest).toMatchSnapshot();
  });

  test('should allow editing', () => {
    renderWithProviders(() => <Input {...defaultProps} />);
    const input = screen.getByPlaceholderText('Placeholder');

    expect(input.value).toBe('');

    fireEvent.change(input, { target: { value: '1000' } });

    expect(input.value).toBe('1000');
  });
});
