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
  }
  h1 {
    margin: 0;
  }
  .price {
    font-size: 1.5rem;
    background-color: #031716;
    width: fit-content;
    padding: 10px;
    color: white;
    border-radius: 5px;
    margin: 10px 0;
  }
  .sale-text {
    font-size: 1.5rem;
    font-weight: bold;
  }
  .price--discount {
    font-size: 1.5rem;
    background-color: #031716;
    width: fit-content;
    padding: 10px;
    color: white;
    border-radius: 5px;
    margin: 10px 0;
    border: 5px solid #0c969c;
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
