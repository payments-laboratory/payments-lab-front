import styled from "styled-components";

const PasswordInput = ({ title }: any) => {
    return (
        <PasswordInputContainer>
            <Label>{title}</Label>
            <InputDiv>
                <Input />
                <Input />
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

const Empty = styled.div`
    width: 100%;
    height: 100%;
    background-color: gray;
`;

export default PasswordInput;
