import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";

import GlobalStyles from "../src/utils/global";
import theme from "../src/utils/theme";

import App from "./App";

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <>
      <App />
      <GlobalStyles></GlobalStyles>
    </>
  </ThemeProvider>,
  document.getElementById("root")
);
