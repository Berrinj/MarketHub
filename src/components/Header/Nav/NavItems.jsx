import { NavItem, NavUl } from "./Nav.styles";
import { Link } from "react-router-dom"
import { IoIosMenu } from "react-icons/io";
import styled from "styled-components";

const Icon = styled(IoIosMenu)`
  color: white;
  font-size: 1.5rem;
  margin-right: 1rem;
`;

function NavItems() {
  return (
    <>
    <NavUl className="nav-items">
      <Icon />
      <NavItem> 
      <Link to="/">Home</Link>
      </NavItem>
      {/* <NavItem> 
      <Link to="/about">About</Link>
      </NavItem> */}
      <NavItem> 
      <Link to="/contact">Contact</Link>
      </NavItem>
    </NavUl>
    </>
  );
}

export default NavItems;