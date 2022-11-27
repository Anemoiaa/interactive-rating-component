import styled from "styled-components";
import RatingBtnList from "./RatingBtnList";
import SubmitButton from "./UI/Button/SubmitButton"

function FeedBackForm(props) {
    const defaultRatings = ["1", "2", "3", "4", "5"];
    return (
        <Form 
            onSubmit={props.handleSubmit}
        >
            <RatingBtnList
                btnList={defaultRatings}
                choosenRating={props.choosenRating}
                onClick={props.setChoosenRating}
            />
            <SubmitButton />
        </Form>
    );
}

const Form = styled.form`
    margin-top: 24px;
`;

export default FeedBackForm;
