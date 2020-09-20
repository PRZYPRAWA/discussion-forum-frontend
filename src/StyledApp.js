import { createGlobalStyle } from "styled-components";

const StyledApp = createGlobalStyle`
  :root {
    --containerHeaderHeight: 50px;
  }

  body {
    background: rgba(191, 191, 191, 0.35);
    font-family: "Lato", -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
      "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
      "Helvetica Neue", sans-serif;

  }

  .container {
    display: grid;
    margin-top: 2rem;
    grid-template-columns: 1fr 4fr 3fr 1fr;
    grid-template-rows: 60px auto;
    grid-gap: 30px;
    height: 100%;
  }
`;

export default StyledApp;
