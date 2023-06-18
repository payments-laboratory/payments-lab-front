import styled from "styled-components";

const Button = () => {
    const ButtonList = ["충전하기", "토스페이", "네이버페이"];
    return (
        <>
            {ButtonList.map(itm => (
                <ButtonDiv>{itm}</ButtonDiv>
            ))}
        </>
    );
};

const ButtonDiv = styled.div`
    width: 300px;
    height: 20px;
    border: 1px solid;
`;

export default Button;
