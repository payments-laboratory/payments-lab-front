import React from "react";

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
        </div>
    );
};

export default PaymentProcessingPage;
