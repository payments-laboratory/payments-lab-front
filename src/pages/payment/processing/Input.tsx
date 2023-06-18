import styled from "styled-components";

const Input = ({ title }: any) => {
    return (
        <InputContainer>
            <Label>{title}</Label>
            <InputDiv />
        </InputContainer>
    );
};

const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
`;
const Label = styled.div``;
const InputDiv = styled.input`
    width: 300px;
    height: 20px;
    border: 1px solid black;
`;

export default Input;
