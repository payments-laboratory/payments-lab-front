import React from "react";

import { BrowserRouter } from "react-router-dom";
import { RecoilRoot } from "recoil";
import { ThemeProvider } from "styled-components";

import AppRoute from "@router/index";

import GlobalStyle from "@styles/global";
import theme from "@styles/theme";

const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <RecoilRoot>
                <GlobalStyle />
                <BrowserRouter>
                    <AppRoute />
                </BrowserRouter>
            </RecoilRoot>
        </ThemeProvider>
    );
};

export default App;
