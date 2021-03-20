import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";

import GlobalStyles from "../src/utils/global";
import theme from "../src/utils/theme";

import App from "./App";
import { MainWrapper } from "./utils";

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <>
      <MainWrapper>
        <App />
        <GlobalStyles></GlobalStyles>
      </MainWrapper>
    </>
  </ThemeProvider>,
  document.getElementById("root")
);
