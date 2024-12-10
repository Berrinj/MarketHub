import styled from "styled-components";

export const StyledContactForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 20px auto;
  max-width: 350px;
  width: 100%;
  h1 {
    text-align: center;
    color: #0c969c;
  }
  label {
    margin: 5px 0;
    text-align: left;
    color: white;
    width: 100%;
  }
  input {
    width: 100%;
    height: 30px;
    padding: 5px;
    border-radius: 5px;
    border: 1px solid #d3d3d3;
    margin-bottom: 10px;
  }
  textarea {
    width: 100%;
    height: 100px;
    padding: 5px;
    border-radius: 5px;
    border: 1px solid #d3d3d3;
    margin-bottom: 10px;
  }
  .form-msg {
    border: 1px solid #d3d3d3;
    border-radius: 5px;
    padding: 5px;
    text-align: center;
  }
  .form-success {
    background-color: lightgreen;
  }
  .form-error {
    background-color: red;
  }
  .btn-container {
    display: flex;
    flex-direction: column;
    align-content: center;
    flex-wrap: wrap;
  }
  button {
    width: 100px;
    height: 30px;
    padding: 5px;
    border-radius: 5px;
    border: 1px solid #d3d3d3;
    background-color: #f8f8f8;
    cursor: pointer;
  }
  button:hover {
    background-color: #d3d3d3;
  }
  .submit-btn {
    margin-top: 10px;
    background-color: #0c969c;
    width: 100px;
    align-self: center;
    &:hover {
      background-color: green;
      color: white;
    }
  }
  .reset-btn {
    margin-top: 30px;
    background-color: #032f30;
    color: white;
    width: 100px;
    height: 25px;
    font-size: 0.8rem;
    font-style: italic;
    cursor: pointer;
  }
  .form-error {
    background-color: red;
    padding: 5px;
    border-radius: 5px;
    font-size: 0.8rem;
    font-style: italic;
    margin-top: 0;
  }
`;
