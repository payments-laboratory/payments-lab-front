import styled from "styled-components";

const Input = (props: any) => {
    const { title, onChange, type } = props;
    return (
        <InputContainer>
            <Label>{title}</Label>
            <InputDiv onChange={onChange} type={type} />
        </InputContainer>
    );
};

const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
`;
const Label = styled.div``;
const InputDiv = styled.input<any>`
    width: 600px;
    height: 50px;
    border: 1px solid black;
`;

export default Input;
