import React from "react";

import styled from "styled-components";

const Layout = ({ children }: any) => {
    return <LayoutContainer>{children}</LayoutContainer>;
};

const LayoutContainer = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
export default Layout;
