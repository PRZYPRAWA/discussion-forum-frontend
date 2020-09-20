const { createGlobalStyle } = require("styled-components");

const GlobalStyles = createGlobalStyle`
  * {
    position: relative;
    box-sizing: border-box;
  }
  :root {
    --containerHeaderHeight: 50px;
    font-family: "Lato", Helvetica, sans-serif;
  }
  html, body, #root {
    height: 100%;
    width: 100%;
    margin: 0;
  }
`;

export default GlobalStyles;
