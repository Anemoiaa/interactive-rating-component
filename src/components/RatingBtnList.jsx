import styled from "styled-components";
import RatingButton from "./UI/Button/RatingButton";

function RatingBtnList(props) {
    return (
        <List>
            {props.btnList.map(rating =>
                <RatingButton
                    key={rating}
                    choosen={props.choosenRating === rating}
                    onClick={() => props.onClick(rating)}>
                    {rating}
                </RatingButton>
            )}
        </List>
    );
}

const List = styled.div`
    display: flex;
    justify-content: space-between;
`;

export default RatingBtnList;