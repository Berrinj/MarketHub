import HeaderNav from './Nav';
import { StyledHeader } from './Header.styles';
import CartIcon from './CartIcon/CartIcon';

function Header() {
  return (
    <StyledHeader>
      <h1>MarketHub</h1>
      <HeaderNav />
      <CartIcon />
    </StyledHeader>
  );
}

export default Header;