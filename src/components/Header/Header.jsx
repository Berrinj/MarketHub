import HeaderNav from './Nav';
import { StyledHeader, StyledHeaderItems } from './Header.styles';
import CartIcon from './CartIcon/CartIcon';

function Header() {
  return (
    <StyledHeader>
      <StyledHeaderItems>
      <h1>MarketHub</h1>
      <HeaderNav />
      <CartIcon />
      </StyledHeaderItems>
    </StyledHeader>
  );
}

export default Header;