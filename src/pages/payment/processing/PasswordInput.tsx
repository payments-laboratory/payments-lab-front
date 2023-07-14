import { useRecoilState } from "recoil";
import styled from "styled-components";

import { cardPasswordState } from "@recoil/payment";

const PasswordInput = ({ title }: any) => {
    const [cardPassword, setCardPassword] = useRecoilState(cardPasswordState);

    const passwordFirstInputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.currentTarget;
        setCardPassword(prev => ({ ...prev, firstState: value.slice(0, 1) }));
    };

    const passwordSecondInputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.currentTarget;
        setCardPassword(prev => ({ ...prev, secondState: value.slice(0, 1) }));
    };

    return (
        <PasswordInputContainer>
            <Label>{title}</Label>
            <InputDiv>
                <Input
                    onChange={passwordFirstInputHandler}
                    value={cardPassword.firstState}
                    type="number"
                    onInput={(e: any) => {
                        if (e.target.value.length > 1) {
                            alert("한 자리까지 입력 할 수 있습니다.");
                        }
                    }}
                />
                <Input
                    onChange={passwordSecondInputHandler}
                    value={cardPassword.secondState}
                    type="number"
                    onInput={(e: any) => {
                        if (e.target.value.length > 1) {
                            alert("한 자리까지 입력 할 수 있습니다.");
                        }
                    }}
                />
                <Empty />
                <Empty />
            </InputDiv>
        </PasswordInputContainer>
    );
};

const PasswordInputContainer = styled.div`
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

const Empty = styled.div`
    width: 100%;
    height: 100%;
    background-color: gray;
`;

export default PasswordInput;
