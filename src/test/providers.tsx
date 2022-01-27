import { render } from '@testing-library/react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';

import { store } from '../app/store';
import { Provider } from 'react-redux';

import { ThemeProvider } from 'styled-components';
import { defaultTheme } from '../theme';
import GlobalStyles from '../styles/globalStyles';

import Wrapper from '../components/Wrapper';

const queryClient = new QueryClient();
const renderWithProviders = (Component: any) =>
  render(
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={defaultTheme}>
          <GlobalStyles />
          <Wrapper>
            <Router>
              <Routes>
                <Route path="/" element={<Component />} />
              </Routes>
            </Router>
          </Wrapper>
        </ThemeProvider>
      </QueryClientProvider>
    </Provider>
  );

export default renderWithProviders;
