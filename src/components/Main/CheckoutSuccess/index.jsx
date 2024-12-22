import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledCheckoutSuccess = styled.div`
  color: white;
  button {
    background-color: #0c969c;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    margin-top: 20px;
  }
    `;

/**
 * @description CheckoutSuccess component is a functional component that displays a message to the user that their order is placed
 * @returns the CheckoutSuccess component with a message and a button to continue shopping
 */

function CheckoutSuccess() {
    return (
      <StyledCheckoutSuccess>
        <h1>Your order is placed!</h1>
        <p>Thank you for shopping with us</p>
        <Link to="/"><button>Continue shopping</button></Link>
      </StyledCheckoutSuccess>
    );
  }
  
  export default CheckoutSuccess;