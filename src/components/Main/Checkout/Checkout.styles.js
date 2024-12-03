import styled from "styled-components";

export const StyledCheckout = styled.div`
  //   display: flex;
  //   flex-direction: column;
  //   align-items: center;
  margin: 100px auto;
  max-width: 1300px;
  color: white;
  button {
    border-radius: 5px;
    border: 1px solid #d3d3d3;
    cursor: pointer;
  }
  .checkout-buttons {
    display: flex;
    flex-direction: column;
    gap: 30px;
    .complete-checkout-btn {
      background-color: lightgreen;
      padding: 15px;
      font-size: 1.5rem;
      width: 200px;
      &:hover {
        background-color: green;
        color: white;
      }
    }
  }
`;

export const StyledCheckoutUl = styled.ul`
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
  max-width: 1000px;
  gap: 20px;
  padding: 0;
  li {
    img {
      width: 100px;
      height: 100px;
      object-fit: cover;
    }
    p {
      margin: 0;
      font-size: 0.9rem;
    }
  }
`;
