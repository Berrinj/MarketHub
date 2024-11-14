import styled from "styled-components";

export const StyledSearchBar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0;
  & input {
    width: 300px;
    height: 40px;
    border: none;
    border-radius: 5px 0 0 5px;
    padding: 10px;
    &:focus {
      outline: none;
    }
  }
  & button {
    background-color: #032f30;
    color: white;
    border: none;
    border-radius: 0 5px 5px 0;
    padding: 10px 20px;
    cursor: pointer;
    height: 40px;
    &:hover {
      background-color: #0c969c;
    }
  }
`;
