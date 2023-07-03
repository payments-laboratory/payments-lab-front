import styled from "styled-components";

const Button = () => {
    const ButtonList = ["충전하기", "토스페이", "네이버페이"];
    return (
        <ButtonContainer>
            {ButtonList.map((itm, idx) => (
                <ButtonDiv value={itm}>{itm}</ButtonDiv>
            ))}
        </ButtonContainer>
    );
};

const ButtonContainer = styled.div`
    margin-top: 80px;
`;
const ButtonDiv = styled.div<any>`
    width: 400px;
    height: 70px;
    background-color: #fff;
    color: black;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 10px;
    cursor: pointer;
    border: 1px solid black;
`;

export default Button;
