import styled from "styled-components";
import { StyledCartIcon, StyledItemCount } from "./CartIcon.styles";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import { Link } from 'react-router-dom';

library.add(faCartShopping);

const Icon = styled(FontAwesomeIcon)`
  color: white;
  font-size: 1.5rem;
  margin-right: 1rem;
`;


function CartIcon() {
    let count = 10;
  return (
    <StyledCartIcon className="cart-icon-container">
        <Link to="/cart">
        <span className="cart-icon">
              <Icon icon="fa-solid fa-cart-shopping" />
              </span>
      <StyledItemCount className="item-count">{count}</StyledItemCount>
      </Link>
    </StyledCartIcon>
  );
}

export default CartIcon;