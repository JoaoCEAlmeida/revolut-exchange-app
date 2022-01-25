import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';

import { ThemeProvider } from 'styled-components';
import { defaultTheme } from './theme';
import GlobalStyles from './styles/globalStyles';

import Wrapper from './components/Wrapper';
import Header from './components/Header';
import ExchangeForm from './components/ExchangeForm';
import Search from './components/Search';

const queryClient = new QueryClient();

const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyles />
        <Wrapper>
          <Router>
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    <Header />
                    <ExchangeForm />
                  </>
                }
              />
              <Route path="/search" element={<Search />} />
            </Routes>
          </Router>
        </Wrapper>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;
