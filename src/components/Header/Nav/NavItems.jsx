import { NavItem } from "./Nav.styles";
import { NavLink } from "react-router-dom";

/**
 * @returns the NavItems component with the nav items
 */

function NavItems() {

  return (
    <>
      <NavItem> 
      <NavLink to="/">Home</NavLink>
      </NavItem>
      <NavItem> 
      <NavLink to="/contact">Contact</NavLink>
      </NavItem>
    </>
  );
}

export default NavItems;