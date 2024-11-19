import styled from "styled-components";
import { StyledCartIcon, StyledItemCount } from "./CartIcon.styles";
import { FaCartShopping } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import useCartStore from "../../Main/Cart/useCartStore";

const Icon = styled(FaCartShopping)`
  color: white;
  font-size: 1.5rem;
  margin-right: 1rem;
`;

function CartIcon() {
  const cartItems = useCartStore((state) => state.count);
  console.log(cartItems);
  return (
    <StyledCartIcon className="cart-icon-container">
        <Link to="/cart">
        <span className="cart-icon">
              <Icon icon="fa-solid fa-cart-shopping" />
              </span>
      <StyledItemCount className="item-count">{cartItems}</StyledItemCount>
      </Link>
    </StyledCartIcon>
  );
}

export default CartIcon;