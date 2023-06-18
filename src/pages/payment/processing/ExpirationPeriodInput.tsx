import styled from "styled-components";

const ExpirationPeriodInput = ({ title }: any) => {
    return (
        <ExpirationPeriodInputContainer>
            <Label>{title}</Label>
            <InputDiv>
                <Input />
                <Input />
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
