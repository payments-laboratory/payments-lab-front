import { useRecoilState } from "recoil";
import styled from "styled-components";

import { expirationPeriodState } from "@recoil/payment";

const ExpirationPeriodInput = ({ title }: any) => {
    const [expirationPeriod, setExpirationPeriod] = useRecoilState(expirationPeriodState);

    const expirationPeriodFirstInputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.currentTarget;
        setExpirationPeriod((prev: any) => ({ ...prev, firstState: value }));
    };

    const expirationPeriodSecondInputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.currentTarget;
        setExpirationPeriod((prev: any) => ({ ...prev, secondState: value }));
    };

    return (
        <ExpirationPeriodInputContainer>
            <Label>{title}</Label>
            <InputDiv>
                <Input
                    onChange={expirationPeriodFirstInputHandler}
                    value={expirationPeriod.firstState}
                    type="number"
                    onInput={(e: any) => {
                        if (e.target.value.length > 2) {
                            alert("2자리까지 입력 할 수 있습니다.");
                        }
                    }}
                />
                <Input
                    onChange={expirationPeriodSecondInputHandler}
                    value={expirationPeriod.secondState}
                    type="number"
                    onInput={(e: any) => {
                        if (e.target.value.length > 2) {
                            alert("2자리까지 입력 할 수 있습니다.");
                        }
                    }}
                />
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
