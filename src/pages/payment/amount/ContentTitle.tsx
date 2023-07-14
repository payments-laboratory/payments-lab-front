import React from "react";

import styled from "styled-components";

const ContentTitle = ({ title }: any) => {
    return <ContnetTitleDiv>{title}</ContnetTitleDiv>;
};

const ContnetTitleDiv = styled.div`
    font-size: ${({ theme }) => theme.fontSize.large};
`;
export default ContentTitle;
