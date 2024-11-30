import styled from "styled-components";

const MainProduct = styled.div`
  margin-top: 150px;
  margin-bottom: 100px;
  background-color: #f5f5f5;
  padding: 20px;
  border-radius: 10px;
  width: 80%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;

  .product-image {
    margin-bottom: 10px;
    img {
      max-height: 500px;
      width: 100%;
      border-radius: 10px;
      margin: 0 auto;
      object-fit: contain;
    }
  }
  .product-info {
    padding: 0;
    max-width: 600px;
    display: flex;
    flex-direction: column;
    width: 100%;
  }
  h1 {
    margin: 0;
  }
  .price-percent {
    font-size: 0.8rem;
    background-color: #0a7075;
    color: white;
    padding: 5px;
  }
  .price {
    font-size: 1.5rem;
    font-weight: bold;
    width: fit-content;
    margin: 10px 0;
  }
  .price--discount {
    font-size: 1.5rem;
    font-weight: bold;
    width: fit-content;
    color: #ff0000;
    border-radius: 5px;
    margin: 10px 0;
  }
  .price--original {
    text-decoration: line-through;
    margin-top: 5px;
  }
  button {
    font-size: 1.5em;
    background-color: #0c969c;
    color: white;
    padding: 10px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    margin-bottom: 10px;
  }
  .tags {
    display: flex;
    .tag {
      background-color: #6ba3be;
      color: black;
      padding: 5px 10px;
      border-radius: 5px;
      margin-right: 10px;
      font-size: 0.8rem;
    }
  }
  .reviews {
    width: 100%;
    h4 {
      margin-bottom: 0;
    }
  }
`;

export default MainProduct;
