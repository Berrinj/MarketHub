import HeaderNav from './Nav';
import { StyledHeader, StyledHeaderItems } from './Header.styles';
import CartIcon from './CartIcon/CartIcon';
import { Link }from 'react-router-dom';
import logo from '../../images/logo.png';

function Header() {
  return (
    <StyledHeader>
      <StyledHeaderItems>
        <Link to="/"><img src={logo} alt="MarketHub Logo" className="logo"/></Link>
        <HeaderNav />
        <CartIcon />
      </StyledHeaderItems>
    </StyledHeader>
  );
}

export default Header;