import styled from "styled-components";

export const StyledHeader = styled.header`
  display: flex;
  justify-content: center;
  width: 100%;
  position: relative;
  background-color: #032f30;
  color: #fff;
  height: 80px;
  align-items: center;
  color: #fff;
  border-bottom: 1px solid #274d60;
  position: fixed;
  top: 0;
  z-index: 100;
`;

export const StyledHeaderItems = styled.div`
  display: flex;
  align-items: center;
  max-width: 1500px;
  padding: 0 10px;
  width: 100%;
  h1 {
    font-size: 2rem;
    margin: 0;
  }
  .logo {
    width: auto;
    height: 30px;
  }
`;
