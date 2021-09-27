import BlockUi from 'react-block-ui';
import styled, { createGlobalStyle } from 'styled-components';

export const StyledBlockUI = styled(BlockUi)`
  .block-ui-container {
    height: 100vh;
  }
`;

const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    font-family: 'Heebo';
  }
  html, body, #root {
    height: 100%;
    overflow-x: hidden;
  }
  html {
    scroll-behavior: smooth;
    font-size: 62.5%;
  }
  body {
    font-size: 1.6rem;
  }
`;

export default GlobalStyle;
