import { NavItem, NavUl } from "./Nav.styles";
import { Routes, Route, Link } from "react-router-dom"

function Home() {
    return <div>Home</div>
  }
  
  function About() {
    return <div>About</div>
  }
  
  function Contact() {
    return <div>Contact</div>
  }
  function RouteNotFound() {
    return <div>Page not found</div>
  }

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
    <Routes>
    <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="*" element={<RouteNotFound />} />
    </Routes>
    </>
  );
}

export default NavItems;