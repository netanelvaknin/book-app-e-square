import {
  StyledEngineProvider,
  Theme,
  ThemeProvider,
} from '@mui/material/styles';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import ContextContainers from './context/ContextContainer';
import GlobalStyle from './styles';
import theme from './theme';

declare module '@mui/styles/defaultTheme' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface DefaultTheme extends Theme {}
}

ReactDOM.render(
  <StyledEngineProvider injectFirst>
    <ThemeProvider theme={theme}>
      <ContextContainers>
        <GlobalStyle />
        <App />
      </ContextContainers>
    </ThemeProvider>
  </StyledEngineProvider>,
  document.getElementById('root'),
);
