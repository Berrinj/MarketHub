import styled from "styled-components";

export const Card = styled.div`
  background-color: #fff;
  // color: #031716;
  border-radius: 8px;
  // padding: 16px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  margin-bottom: 16px;
  width: 300px;
  min-height: 400px;
  border: 2px solid #274d60;
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
  }
  button {
    background-color: #274d60;
    color: white;
    border: none;
    padding: 8px 16px;
    border-radius: 4px;
    cursor: pointer;
    width: 100%;
    height: 40px;
  }
`;
