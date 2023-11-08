import React from "react";

import styled from "styled-components";

const RP: string[] = ["5,000원", "10,000원", "50,000원"];

const AmountBox = () => {
    return (
        <AmountBoxDiv>
            {RP.map(item => (
                <RPdiv>{item}</RPdiv>
            ))}
            ;
        </AmountBoxDiv>
    );
};
const AmountBoxDiv = styled.div`
    display: flex;
    justify-content: space-between;
    width: 980px;
`;

const RPdiv = styled.div`
    width: 300px;
    height: 200px;
    border: solid 1px black;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: ${({ theme }) => theme.fontSize.large};
`;

export default AmountBox;
