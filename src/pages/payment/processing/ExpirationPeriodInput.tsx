import { useRecoilState } from "recoil";
import styled from "styled-components";

import { expirationPeriodState } from "@recoil/payment";

const ExpirationPeriodInput = ({ title }: any) => {
    const [expirationPeriod, setExpirationPeriod] = useRecoilState(expirationPeriodState);

    const expirationPeriodFirstInputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.currentTarget;
        setExpirationPeriod((prev: any) => ({ ...prev, firstState: value }));
        // if (expirationPeriod.firstState.length > 2) {
        //     alert("2자리만 입력해주세요.");
        //     return false;
        // }
    };

    const expirationPeriodSecondInputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.currentTarget;
        setExpirationPeriod((prev: any) => ({ ...prev, secondState: value }));
        // if (expirationPeriod.secondState.length > 2) {
        //     alert("2자리만 입력해주세요.");
        //     return false;
        // }
    };

    return (
        <ExpirationPeriodInputContainer>
            <Label>{title}</Label>
            <InputDiv>
                <Input onChange={expirationPeriodFirstInputHandler} value={expirationPeriod.firstState} />
                <Input onChange={expirationPeriodSecondInputHandler} value={expirationPeriod.secondState} />
            </InputDiv>
        </ExpirationPeriodInputContainer>
    );
};

const ExpirationPeriodInputContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

const Label = styled.div``;
const InputDiv = styled.div`
    width: 600px;
    height: 50px;
    display: flex;
    gap: 2px;
`;

const Input = styled.input`
    width: 100%;
    height: 100%;
    border: 1px solid black;
`;

export default ExpirationPeriodInput;
