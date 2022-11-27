import styled from "styled-components";

function RatingButton(props) {
    return(
        <Button {...props}>
            {props.children}
        </Button>
    );
}

const Button = styled.div`
    width: 42px;
    height: 42px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    border-radius: 50%;
    background-color: ${props => props.choosen? '#7C8798': '#262E38'};
    font-family: 'Overpass', sans-serif;
    font-weight: bold;
    color: ${props => props.choosen? '#fff': '#7C8798'};
    cursor: pointer;

    &:hover {
        background-color: #FC7614;
        color: #fff;
    }

    @media (min-width: 768px) {
        width: 51px;
        height: 51px;
    }
`;

export default RatingButton;
