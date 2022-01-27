import renderWithProviders from '../../test/providers';
import Header from './index';

describe('Header:', () => {
  test('should render correctly', async () => {
    const { HeaderTest } = renderWithProviders(() => <Header />);

    expect(HeaderTest).toMatchSnapshot();
  });
});
