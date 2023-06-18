import styled from "styled-components";

const CountButton = () => {
    const CountButtonlist = ["1", "2", "3"];
    return (
        <CountButtonContainer>
            {CountButtonlist.map(itm => (
                <CountButtonDiv>{itm}</CountButtonDiv>
            ))}
        </CountButtonContainer>
    );
};

const CountButtonContainer = styled.div`
    display: flex;
`;

const CountButtonDiv = styled.div`
    border: 1px solid black;
    border-radius: 50%;
    width: 30px;
    height: 30px;
    justify-content: center;
    align-items: center;
    display: flex;
`;

export default CountButton;
