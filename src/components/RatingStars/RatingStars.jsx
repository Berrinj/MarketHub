import { IoMdStarOutline, IoMdStarHalf, IoMdStar } from "react-icons/io";
import styled from "styled-components";

const StyledStars = styled.div`
    display: flex;
    align-items: flex-end;
    height: 1.5rem;
    svg {
        color: gold;
        font-size: 1.5rem;
        }
    `;

  const RatingNumber = styled.div`
    margin-left: 5px;
    `;
  const Reviews = styled.div`
    margin-left: 5px;
    font-style: italic;
    `;  
    

function RatingStars({ rating, reviews }) {
  const stars = [];
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  for (let i = 0; i < fullStars; i++) {
    stars.push(<IoMdStar key={`full-${i}`} />);
  }

  if (hasHalfStar) {
    stars.push(<IoMdStarHalf key="half" />);
  }

  for (let i = 0; i < emptyStars; i++) {
    stars.push(<IoMdStarOutline key={`empty-${i}`} />);
  }

 

  return <StyledStars>
    {stars}
    {rating && <RatingNumber>{rating}</RatingNumber>}
    {reviews > 0 && <Reviews><span>({reviews})</span></Reviews>} 
    </StyledStars>;
}

export default RatingStars;