import styled, { keyframes } from "styled-components";

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(30deg);
  }
`;

const reverseSpin = keyframes`
  from {
    transform: rotate(30deg);
  }
  to {
    transform: rotate(0deg);
  }
`;

export const StyledCartIcon = styled.div`
  position: relative;
  height: 70px;
  display: flex;
  align-items: center;
  @media (max-width: 600px) {
   width: 100%;
    justify-content: flex-end;
`;

export const StyledItemCount = styled.span`
  position: absolute;
  top: 5px;
  right: 0px;
  background-color: #0a7075;
  color: white;
  border-radius: 50%;
  padding: 3px;
  height: 15px;
  width: 15px;
  cursor: pointer;
  font-size: 0.8rem;
  text-align: center;
  animation: ${reverseSpin} 0.5s forwards;

  &:hover {
    animation: ${spin} 0.5s forwards;
  }
`;
