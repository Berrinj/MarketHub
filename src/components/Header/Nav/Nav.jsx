import { NavStyle, NavUl, Icon, CloseIcon  } from "./Nav.styles";
import NavItems from "./NavItems";
import { useState, useRef, useEffect } from "react";


function Nav() {
   const [isOpen, setIsOpen] = useState(false);
   const navRef = useRef();

   const handleClickOutside = (event) => {
     if (navRef.current && !navRef.current.contains(event.target)) {
       setIsOpen(false);
     }
   };
 
   useEffect(() => {
     document.addEventListener("mousedown", handleClickOutside);
     return () => {
       document.removeEventListener("mousedown", handleClickOutside);
     };
   }, []);

    return (
      <NavStyle ref={navRef}>
      <Icon onClick={() => setIsOpen(!isOpen)} />
      <NavUl className="nav-items" isOpen={isOpen}>
      <CloseIcon onClick={() => setIsOpen(!isOpen)} />     
        <NavItems/>
      </NavUl>
      </NavStyle>
    );
  }
  
  export default Nav;