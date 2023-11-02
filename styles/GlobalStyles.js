// GlobalStyles.js
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Montserrat', sans-serif;
    background-color: #f8f8f8;
    color: #333;
  }

  h1, h2, h3 {
    color: #1a1a1a;
  }

  a {
    text-decoration: none;
    color: #3498db;
    transition: color 0.3s ease;

    &:hover {
      color: #2980b9;
    }
  }

  // Add your global styles here
  // ...

  // Example of adding a smooth transition to all elements
  transition: all 0.3s ease;
`;

export default GlobalStyles;
