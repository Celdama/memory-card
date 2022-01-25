import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root{

  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: 'Karla', sans-serif;
  }

  .App {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }

  .content {
    flex-grow: 1;
    background-color: #333;
  }
`;
