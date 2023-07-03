import React, { useState, useEffect } from "react";

import axios from "axios";
import { useRecoilState } from "recoil";
import styled from "styled-components";

import ExpirationPeriodInput from "./ExpirationPeriodInput";
import Input from "./Input";
import PasswordInput from "./PasswordInput";
import ContentTitle from "../amount/ContentTitle";
import CountButton from "../amount/CountButton";

import Layout from "@components/global/Layout";

import { expirationPeriodState, cardPasswordState } from "@recoil/payment";

const PaymentProcessingPage = () => {
    const [expirationPeriod, setExpirationPeriod] = useRecoilState(expirationPeriodState);
    const [cardPassword, setCardPassword] = useRecoilState(cardPasswordState);
    const cardPasswordMerge = `${cardPassword.firstState}${cardPassword.secondState}`;

    const [userInformation, setUserInformation] = useState({
        amount: "",
        cardNumber: "",
        cardExpirationYear: expirationPeriod.firstState,
        cardExpirationMonth: expirationPeriod.secondState,
        cardPassword: cardPasswordMerge,
        customerIdentityNumber: "",
        phoneNumber: "",
    });

    useEffect(() => {
        setUserInformation({
            ...userInformation,
            cardExpirationYear: expirationPeriod.firstState,
            cardExpirationMonth: expirationPeriod.secondState,
            cardPassword: cardPasswordMerge,
        });
    }, [expirationPeriod.firstState, expirationPeriod.secondState, cardPasswordMerge]);

    const cardNumberInputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.currentTarget;
        setUserInformation((prev: any) => ({ ...prev, cardNumber: value }));
    };

    const phoneNumberInputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.currentTarget;
        setUserInformation((prev: any) => ({ ...prev, phoneNumber: value }));
    };

    const onClickButton = async () => {
        const access_token = "";
        try {
            const res = await axios({
                method: "post",
                url: "/api/v1/toss-payments/key-in",
                headers: {
                    Authorization: `Bearer ${access_token}`,
                    "Content-Type": "application/x-www-form-urlencoded",
                },
            });
        } catch (e: any) {
            console.log("err");
        }
    };

    console.log("userInformation", userInformation);

    return (
        <Layout>
            <CountButton />
            <TotalAmount>
                <ContentTitle title="총 결제할 금액" />
                <TotalAmountDiv>
                    <span>$</span>
                    <AmountBox />
                </TotalAmountDiv>
            </TotalAmount>
            <Input title="카드번호" value={userInformation.cardNumber} onChange={cardNumberInputHandler} />
            <ExpirationPeriodInput title="유효기간(월/년)" />
            <PasswordInput title="비밀번호 앞 두자리" />
            <Input title="생년월일 6자리" />
            <Input title="휴대폰 번호 (-제외)" value={userInformation.phoneNumber} onChange={phoneNumberInputHandler} />
            <ButtonDiv onClick={onClickButton}>결제하기</ButtonDiv>
        </Layout>
    );
};

const TotalAmount = styled.div`
    display: flex;
    flex-direction: column;
`;

const AmountBox = styled.div`
    width: 300px;
    border-bottom: 1px solid black;
`;

const TotalAmountDiv = styled.div`
    display: flex;
    font-size: ${({ theme }) => theme.fontSize.large};
`;

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
