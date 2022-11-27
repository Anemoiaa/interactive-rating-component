import { useState } from 'react';
import styled from 'styled-components';
import { ReactComponent as IconStart } from "./assets/images/icon-star.svg";
import FeedBackForm from './components/FeedBackForm';
import ImageThankYou from "./assets/images/illustration-thank-you.svg";

function App() {
    const [choosenRating, setChoosenRating] = useState("");
    const [isSubmitted, setIsSubmitted] = useState(false);

    function handleSubmit(e) {
        e.preventDefault();
        setIsSubmitted(true);
    }

    const Default = () => {
        return (
            <>
                <IconWrapper>
                    <IconStart />
                </IconWrapper>
                <Paragraph align={"left"}>
                    <h3>How did we do?</h3>
                    <p>
                        Please let us know how we did with your support request.
                        All feedback is appreciated to help us improve our offering!
                    </p>
                </Paragraph>
                <FeedBackForm
                    choosenRating={choosenRating}
                    setChoosenRating={setChoosenRating}
                    handleSubmit={handleSubmit}
                />
            </>
        );
    }

    const AfterSubmit = () => {
        return (
            <>
                <ImageWrapper>
                    <img src={ImageThankYou} alt="illustration-phone" />
                </ImageWrapper>
                <Result>
                    <div>You selected {choosenRating} out of 5</div>
                </Result>
                <Paragraph align={"center"}>
                    <h3>Thank you!</h3>
                    <p>
                        We appreciate you taking the time to give a rating.
                        If you ever need more support, don’t hesitate to get in touch!
                    </p>
                </Paragraph>
            </>
        );
    }

    return (
        <Container className="App">
            <Block>
                {isSubmitted
                    ? <AfterSubmit />
                    : <Default />
                }
            </Block>
        </Container>
    );
}

export default App;

const Container = styled.div`
    width: 100vw;
    min-width: 375px;
    min-height: 100vh;
    padding: 0 24px 0 24px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #131518;
`;

const Block = styled.div`
    width: 100%;
    box-sizing: border-box;
    max-width: 327px;
    padding: 24px 24px 32px 24px;
    background: radial-gradient(98.96% 98.96% at 50% 0%, #232A34 0%, #181E27 100%);
    border-radius: 30px;

    @media (min-width: 768px) {
        max-width: 412px;
        padding: 32px 39px 32px 32px;        
    }
`;

const IconWrapper = styled.div`
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    background-color: #262E38;

    @media (min-width: 768px) {
        width: 48px;
        height: 48px;       
    }
`;

const Paragraph = styled.div`
    margin-top: 16px;
    text-align: ${props => props.align};

    h3 {
        font-size: 24px;
        line-height: 1.25;
        color: #fff;
    }

    p {
        margin-top: 13px;
        font-size: 14px;
        line-height: 1.57;
        color: #969FAD;
    }

    @media (min-width: 768px) {
        margin-top: 30px;    
        
        h3 {
            font-size: 28px;
        }

        p {
            maring-top: 7px;
            font-size: 15px;
        }
    }

`;

const ImageWrapper = styled.div`
    display: flex;
    justify-content: center;

    img {
        width: 144px;
    }

    @media (min-width: 768px) {
        img {
            width: auto;
        }
    }
`;

const Result = styled.div`
    margin-top: 24px;
    
    div {
        width: fit-content;
        margin: 0 auto;
        padding: 5px 12px 10px 12px;
        background-color: #262E38;
        font-size: 14px;
        line-height: 1.57;
        color: #FC7614;
        border-radius: 22.5px;

    }

`;





