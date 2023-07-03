import { useRecoilState } from "recoil";
import styled from "styled-components";

import { expirationPeriodState } from "@/src/common/recoil/payment";

const ExpirationPeriodInput = ({ title }: any) => {
    const [expirationPeriod, setExpirationPeriod] = useRecoilState(expirationPeriodState);

    const expirationPeriodFirstInputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.currentTarget;
        setExpirationPeriod((prev: any) => ({ ...prev, firstState: value }));
    };

    const expirationPeriodSecondInputHandler = e => {
        const { value } = e.currentTarget;
        setExpirationPeriod((prev: any) => ({ ...prev, secondState: value }));
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
    width: 300px;
    height: 20px;
    display: flex;
    gap: 2px;
`;

const Input = styled.input`
    width: 100%;
    height: 100%;
    border: 1px solid black;
`;

export default ExpirationPeriodInput;
