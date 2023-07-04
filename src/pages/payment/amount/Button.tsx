import { useState } from "react";

import { Link } from "react-router-dom";
import styled from "styled-components";

const Button = () => {
    const [buttonState, setButtonState] = useState();

    const ButtonList = [
        { title: "충전하기", page: "/processing" },
        { title: "토스페이", page: "/" },
        { title: "네이버페이", page: "/" },
    ];

    const buttonHandler = (e: any) => {
        setButtonState(e.target.value);
    };

    return (
        <ButtonContainer>
            {ButtonList.map(itm => (
                <Link to={`${itm.page}`}>
                    <ButtonDiv value={itm.title} onClick={buttonHandler}>
                        {itm.title}
                    </ButtonDiv>
                </Link>
            ))}
        </ButtonContainer>
    );
};

const ButtonContainer = styled.div`
    margin-top: 80px;
`;
const ButtonDiv = styled.div<any>`
    width: 600px;
    height: 70px;
    background-color: ${props => props.color};
    color: black;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 10px;
    cursor: pointer;
    border: 1px solid black;
    :hover {
        background-color: #66c8ff;
    }
`;

export default Button;
