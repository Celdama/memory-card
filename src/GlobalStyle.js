import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root{
    --black: #000;
    --white: #fff;
    --orange: #daa520;
    --bigFont: 1.6rem;
    --medFont: 1.2rem;
    --smallFont: 0.9rem;
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
    background-color: var(--black);
  }
`;
