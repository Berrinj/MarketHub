import HeaderNav from './Nav';
import { StyledHeader, StyledHeaderItems } from './Header.styles';
import CartIcon from './CartIcon/CartIcon';
import { Link }from 'react-router-dom';
import logo from '../../images/logo.png';

/** 
 * @returns the Header component with the logo, nav, and cart icon
 */

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