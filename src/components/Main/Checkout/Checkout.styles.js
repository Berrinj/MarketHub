import styled from "styled-components";

export const StyledCheckout = styled.div`
  //   display: flex;
  //   flex-direction: column;
  //   align-items: center;
  max-width: 1300px;
  color: white;
  text-align: center;
  ul {
    justify-content: center;
  }
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
      background-color: #274d60;
      color: white;
      padding: 15px;
      font-size: 1.5rem;
      width: 200px;
      &:hover {
        background-color: #0c969c;
      }
    }
    .edit-cart-btn {
      background-color: #032f30;
      color: white;
      padding: 8px;
      font-size: 0.8rem;
      &:hover {
        background-color: #274d60;
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
