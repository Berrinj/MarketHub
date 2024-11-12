import { NavItem, NavUl } from "./Nav.styles";
import { Link } from "react-router-dom"

function NavItems() {
  return (
    <>
    <NavUl className="nav-items">
      <NavItem> 
      <Link to="/">Home</Link>
      </NavItem>
      <NavItem> 
      <Link to="/about">About</Link>
      </NavItem>
      <NavItem> 
      <Link to="/contact">Contact</Link>
      </NavItem>
    </NavUl>
    </>
  );
}

export default NavItems;