import { useLocation } from "react-router-dom";
import styled from "styled-components";

const CountButton = () => {
    const location = useLocation();
    const currentPage = location.pathname;

    const CountButtonlist = ["1", "2", "3"];

    return (
        <CountButtonContainer>
            {CountButtonlist.map((itm, idx) => (
                <CountButtonDiv value={idx}>{itm}</CountButtonDiv>
            ))}
        </CountButtonContainer>
    );
};

const CountButtonContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 300px;
    gap: 10px;
`;

const CountButtonDiv = styled.div<any>`
    border: 1px solid black;
    border-radius: 50%;
    width: 30px;
    height: 30px;
    justify-content: center;
    align-items: center;
    display: flex;
    background-color: ${props => props.color};
`;

export default CountButton;
