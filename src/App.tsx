import React from 'react';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from './theme';
import GlobalStyles from './styles/globalStyles';

import Wrapper from './components/Wrapper';
import Header from './components/Header';
import ExchangeForm from './components/ExchangeForm';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <Wrapper>
        <>
          <Header />
          <ExchangeForm />
        </>
      </Wrapper>
    </ThemeProvider>
  );
};

export default App;
