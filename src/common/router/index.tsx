import React, { Suspense } from "react";

import { Route, Routes } from "react-router-dom";

import PageRoutes from "@router/config";

const AppRoute = () => {
    return (
        <div>
            <Routes>
                {PageRoutes.map(({ name, path, Component }) => {
                    return (
                        <Route
                            key={`${name}`}
                            path={path}
                            element={
                                <Suspense>
                                    <Component />
                                </Suspense>
                            }
                        />
                    );
                })}
            </Routes>
        </div>
    );
};

export default AppRoute;
