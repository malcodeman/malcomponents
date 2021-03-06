import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  html {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: ${(props) => props.theme.malcode.typography.type.primary};
  }

  a {
    text-decoration: none;
    outline: 0;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    margin: 0;
  }

  textarea {
    font-family: ${(props) => props.theme.malcode.typography.type.primary};
  }
`;

export default GlobalStyle;
