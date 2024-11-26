import styled from "styled-components";

const StyledCart = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  list-style: none;
  margin-top: 120px;
  margin-bottom: 100px;
  background-color: #274d60;
  color: #fff;
  width: 80%;
  border-radius: 5px;

  ul {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 20px;
    list-style: none;
    padding-left: 0;
  }

  li {
    display: flex;
    align-items: center;
    gap: 20px;
    color: #fff;
    width: 90%;
    background-color: #0c969c;
    border-radius: 5px;
    padding: 10px;
    img {
      width: 100px;
      height: 100px;
      object-fit: cover;
    }
    .cart-item-details {
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      .cart-item-title {
        font-weight: bold;
        width: 30%;
        margin: 0;
      }
      .cart-item-quantity {
        display: flex;
        gap: 5px;
        align-items: center;
        background-color: #032f30;
        border-radius: 5px;
        .increase-btn, .decrease-btn {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 1.5rem;
        width: 30px;
        height: 30px;
        background-color: #032f30;
        color: #fff;
        border: none;
        padding: 5px;
        border-radius: 5px;
        cursor: pointer;
        &:hover {
          background-color: #274d60;
        }
    }
}
      .cart-item-delete {
        background-color: #274d60;
        color: #fff;
        border: none;
        padding: 5px;
        border-radius: 5px;
        cursor: pointer;
        &:hover {
          background-color: #274d60;
        }
      }
  }
`;

export default StyledCart;
