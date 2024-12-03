import styled from "styled-components";

const StyledCart = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  list-style: none;
  background-color: #274d60;
  color: #fff;
  width: 80%;
  border-radius: 5px;
  .cart-header {
    margin: 0;
  }

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
    position: relative;
    align-items: center;
    gap: 20px;
    color: #fff;
    width: 90%;
    background-color: #0c969c;
    border-radius: 5px;
    padding: 10px;
    @media (max-width: 480px) {
      flex-direction: column;
    }
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
      .cart-item-title-price-quantity {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        align-items: center;
        width: 100%;
        margin-bottom: 10px;
        margin-right: 30px;
        @media (max-width: 720px) {
          flex-direction: column;
          align-items: flex-start;
        }
        .cart-item-title {
          font-weight: bold;
          width: 150px;
          margin: 0;
          font-size: 1.2rem;
        }
        .cart-item-quantity {
          display: flex;
          gap: 5px;
          align-items: center;
          background-color: #032f30;
          border-radius: 5px;
          width: fit-content;
          height: fit-content;
          .increase-btn,
          .decrease-btn {
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
      }
      .cart-item-sum-del {
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        span {
          font-style: italic;
        }
        .cart-item-delete {
          position: absolute;
          right: 5px;
          top: 5px;
          background-color: #274d60;
          color: #fff;
          border: none;
          padding: 3px;
          display: flex;
          align-items: center;
          border-radius: 5px;
          cursor: pointer;
          &:hover {
            background-color: #274d60;
          }
        }
      }
    }
  }
  .cart-total {
    text-align: center;
    font-size: 1.2rem;
    margin: 0;
  }
  .cart-buttons {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 20px;
    button {
      border: none;
      border-radius: 5px;
      cursor: pointer;
    }
    a {
      text-decoration: none;
      button {
        background-color: #0c969c;
        color: #fff;
        padding: 10px;
        &:hover {
          background-color: #274d60;
        }
      }
    }
    .cart-buttons-checkout {
      text-align: center;
      width: 100%;
      button {
        font-size: 1.2rem;
        border: 1px solid #fff;
      }
    }
    .clear-cart-btn {
      background-color: #032f30;
      color: #fff;
      padding: 5px;
      font-size: 12px;
      &:hover {
        background-color: #274d60;
      }
    }
  }
`;

export default StyledCart;
