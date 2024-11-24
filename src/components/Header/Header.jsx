import HeaderNav from './Nav';
import { StyledHeader, StyledHeaderItems } from './Header.styles';
import CartIcon from './CartIcon/CartIcon';
import { Link }from 'react-router-dom';

function Header() {
  return (
    <StyledHeader>
      <StyledHeaderItems>
        <Link to="/"><img src="/src/images/logo.png" alt="MarketHub Logo" className="logo"/></Link>
        <HeaderNav />
        <CartIcon />
      </StyledHeaderItems>
    </StyledHeader>
  );
}

export default Header;