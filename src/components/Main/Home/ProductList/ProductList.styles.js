import styled from "styled-components";

export const StyledLoadingText = styled.h1`
  color: #6ba3be;
  font-size: 1.5rem;
  text-align: center;
  margin-top: 20px;
`;

export const MainHome = styled.div`
  max-width: 1500px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  .product-cards {
    padding: 0px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
    list-style: none;
  }

  .products {
    max-width: 1300px;
  }
`;
