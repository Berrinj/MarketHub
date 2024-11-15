import styled from "styled-components";

export const StyledSearchBar = styled.div`
  width: 100%;

  & .search-bar {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: fit-content;
    margin: 20px auto;

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
      background-color: #0c969c;
      color: white;
      border: none;
      border-radius: 0 5px 5px 0;
      padding: 10px 20px;
      cursor: pointer;
      height: 40px;
      &:hover {
        background-color: #0a7d83;
      }
      &:disabled {
        background-color: #ccc;
        cursor: not-allowed;
      }
    }

  & .search-results {
    position: absolute;
    top: 100%;
    background-color: #fff;
    max-height: 200px;
    overflow-y: auto;
    list-style: none;
    margin: 0;
    left: 0;
    right: 0;
    padding: 10px;

    & p {
      font-style: italic;
      border-bottom: 1px solid #000;
      margin: 0;
    }

    & li {
      width: 100%;
    }

    & a {
      width: 100%;
      cursor: pointer;
      display: flex;
      align-items: center;
      margin-bottom: 10px 0;
      text-decoration: none;
      color: #000;
      &:hover {
        color: #fff;
        background-color: #0c969c;
      }

      & img {
        width: 50px;
        height: 50px;
        object-fit: cover;
        margin: 10px;
        border-radius: 5px;
      }
    }

    .no-results {
      display: block;
      margin-top: 10px;
      font-size: 0.9rem;
    }
  }
`;
