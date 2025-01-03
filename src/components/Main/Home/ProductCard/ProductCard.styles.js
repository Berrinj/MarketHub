import styled from "styled-components";

export const Card = styled.div`
  background-color: #fff;
  // color: #031716;
  border-radius: 8px;
  margin-bottom: 16px;
  width: 300px;
  min-height: 400px;
  border: 2px solid #274d60;
  position: relative;
  z-index: 0;
  @media (max-width: 685px) {
    width: 200px;
    h2 {
      font-size: 1.2rem;
    }
    p {
      font-size: 0.9rem;
    }
    .product-card--details {
      height: 180px;
    }
  }

  a {
    text-decoration: none;
    color: #031716;
  }
  img {
    width: 100%;
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
    height: 200px;
    object-fit: cover;
    border-bottom: 1px solid #274d60;
  }
  .price-percent {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    position: absolute;
    top: 10px;
    right: 10px;
    height: 25px;
    width: 25px;
    background-color: #0a7075;
    color: white;
    padding: 5px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.8rem;
  }
  h2 {
    margin: 5px 0;
    height: 50px;
    padding: 0 16px;
    display: flex;
    align-items: center;
  }
  .product-card--details {
    padding: 0 16px;
    height: 150px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .price {
      padding: 5px 0;
      font-weight: bold;
      font-size: 1.5rem;
      margin: 0;
      margin-bottom: 10px;
    }
  }
  .sale-price-container {
    margin-bottom: 10px;
    .sale-price {
      display: flex;
      align-items: center;
    }
    .price--discount,
    .price--original {
      margin: 0;
    }

    .price--discount {
      color: red;
      font-weight: bold;
      font-size: 1.5rem;
      padding: 5px;
    }
    .price--original {
      text-decoration: line-through;
      margin-left: 10px;
      padding: 5px;
    }
  }
  button {
    background-color: #274d60;
    color: white;
    border: none;
    padding: 8px 16px;
    // border-radius: 4px;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
    cursor: pointer;
    width: 100%;
    height: 40px;
    &:hover {
      background-color: #0c969c;
    }
  }
  @media (max-width: 485px) {
    max-width: 150px;
    font-size: 0.8rem;
    .product-card--img {
      height: 150px;
    }
    h2 {
      font-size: 1rem;
      padding: 0 10px;
    }
    .product-card--details {
      padding: 0 10px;
      height: 150px;
      .price {
        font-size: 1rem;
        margin-bottom: 5px;
      }
      .product-card--description {
        margin: 0;
      }
      .sale-price-container {
        .sale-price {
          .price--discount {
            font-size: 1rem;
            padding: 0;
          }
          .price--original {
            font-size: 0.7rem;
            padding: 0;
          }
        }
      }
    }
  }
  @media (max-width: 385px) {
    max-width: 130px;
  }
  @media (max-width: 344px) {
    max-width: 100%;
  }
`;
