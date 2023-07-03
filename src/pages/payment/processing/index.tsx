import React from "react";

import styled from "styled-components";

import ExpirationPeriodInput from "./ExpirationPeriodInput";
import Input from "./Input";
import PasswordInput from "./PasswordInput";

const PaymentProcessingPage = () => {
    return (
        <div>
            <Input title="카드번호" />
            <ExpirationPeriodInput title="유효기간(월/년)" />
            <PasswordInput title="비밀번호 앞 두자리" />
            <Input title="생년월일 6자리" />
            <Input title="휴대폰 번호 (-제외)" />
            <ButtonDiv>결제하기</ButtonDiv>
        </div>
    );
};

const ButtonDiv = styled.div`
    width: 300px;
    height: 20px;
    background-color: black;
    color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export default PaymentProcessingPage;
