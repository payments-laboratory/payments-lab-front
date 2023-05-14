import React from "react";
import { BrowserRouter } from "react-router-dom";

import { ThemeProvider } from "styled-components";

import AppRoute from "@router/index";
import theme from "@styles/theme";

import GlobalStyle from "./common/styles/global";

const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <BrowserRouter>
                <AppRoute />
            </BrowserRouter>
        </ThemeProvider>
    );
};

export default App;
