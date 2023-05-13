import React from "react";
import { BrowserRouter } from "react-router-dom";

import AppRoute from "@router/index";

const App = () => {
    return (
        <BrowserRouter>
            <AppRoute />
        </BrowserRouter>
    );
};

export default App;
