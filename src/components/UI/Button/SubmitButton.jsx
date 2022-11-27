import styled from "styled-components";

function SubmitButton(props) {
    return (
        <Button>
            Submit
        </Button>
    )
}

const Button = styled.button`
    margin-top: 24px;
    width: 100%;
    background-color: #FC7614;
    border: none;
    border-radius: 22.5px;
    padding: 12px 0 15px 0;
    font-family: 'Overpass', sans-serif;
    font-weight: bold;
    font-size: 14px;
    line-height: 1.26;
    color: #fff;
    letter-spacing: 1.87px;
    text-transform: uppercase;
    cursor: pointer;

    &:hover {
        color: #FC7614;
        background-color: #fff ;
    }

    @media (min-width: 768px) {
        margin-top: 32px;
        font-size: 15px;
        letter-spacing: 2px;
    }
`;

export default SubmitButton;