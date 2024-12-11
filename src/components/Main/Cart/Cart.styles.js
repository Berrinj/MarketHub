import styled from "styled-components";

const StyledCart = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  list-style: none;
  // background-color: #274d60;
  color: #fff;
  width: 90%;
  border-radius: 5px;
  .cart-header {
    margin: 0;
  }
  .cart-items-summary {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 50px;
    .cart-items {
      width: 55%;
      .cart-items-ul {
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        gap: 15px;
        list-style: none;
        padding-left: 0;
        width: 100%;
        margin: 0;
        li {
          display: flex;
          position: relative;
          align-items: center;
          gap: 20px;
          color: #fff;
          width: 100%;
          background-color: #274d60;
          border-radius: 5px;
          .cart-item-li-content {
            display: flex;
            align-items: center;
            padding: 10px;
            width: 100%;
            img {
              width: 100px;
              height: 100px;
              object-fit: cover;
              display: block;
              border-radius: 5px;
            }
            .cart-item-details {
              display: flex;
              flex-wrap: wrap;
              gap: 10px;
              align-items: center;
              justify-content: space-between;
              padding: 10px;
              width: 100%;
              .cart-item-title-price-quantity {
                display: flex;
                justify-content: space-between;
                flex-wrap: wrap;
                align-items: center;
                width: 100%;
                margin-bottom: 10px;
                // margin-right: 30px;
                // @media (max-width: 580px) {
                //   flex-direction: column;
                //   align-items: flex-start;
                // }
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
                @media (max-width: 580px) {
                  flex-direction: column;
                  align-items: flex-start;
                  .cart-item-title {
                    width: 100%;
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
                    background-color: #032f30;
                  }
                }
              }
            }
            @media (max-width: 410px) {
              flex-direction: column;
              align-items: center;
              a {
                width: 100%;
                img {
                  width: 100%;
                  height: 150px;
                }
              }
            }
          }
        }
      }
    }
    .cart-summary {
      width: 30%;
      min-width: 230px;
      font-size: 0.9rem;
      background-color: #274d60;
      height: fit-content;
      border-radius: 5px;
      padding: 10px;
      h2 {
        margin: 0;
      }
      .cart-summary-ul {
        list-style: none;
        padding: 0;
        li {
          display: flex;
          gap: 10px;
          justify-content: space-between;
          margin-bottom: 10px;
        }
      }
      @media (max-width: 400px) {
        min-width: auto;
      }
    }
    @media (max-width: 797px) {
      .cart-items {
        width: 100%;
      }
      .cart-summary {
        width: 100%;
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
        background-color: #274d60;
        color: #fff;
        padding: 10px;
        &:hover {
          background-color: #0c969c;
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
