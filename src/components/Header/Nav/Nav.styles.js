import styled from "styled-components";
import { IoMdClose } from "react-icons/io";
import { IoIosMenu } from "react-icons/io";

export const NavStyle = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 10px;
  @media (max-width: 600px) {
    justify-content: flex-end;
  }
`;

export const NavUl = styled.ul.attrs(({ isOpen }) => ({
  "data-isopen": isOpen,
}))`
  display: flex;
  align-items: center;
  justify-content: space-around;
  list-style: none;
  padding: 0;
  margin: 0;
  @media (max-width: 600px) {
    display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
    flex-direction: column;
    align-items: center;
    padding: 20px;
    position: absolute;
    top: 81px;
    background: #000;
    right: 0;
    left: 0;
  }
`;

export const NavItem = styled.li`
  padding: 10px;
  position: relative;
  a {
    text-decoration: none;
    color: #fff;
    transition: 0.3s ease-in-out;
    &:hover,
    &.active {
      color: #0c969c;
      &::after {
        content: "";
        width: 40%;
        height: 2px;
        background: #0c969c;
        position: absolute;
        left: 10px;
        bottom: 4px;
        @media (max-width: 600px) {
          left: 0;
          width: 100%;
        }
      }
    }
  }
`;

export const CloseIcon = styled(IoMdClose)`
  display: none;
  @media screen and (max-width: 600px) {
    display: block;
    color: white;
    font-size: 1.5rem;
    margin-right: 1rem;
    align-self: flex-end;
    cursor: pointer;
  }
`;

export const Icon = styled(IoIosMenu)`
  display: none;
  @media screen and (max-width: 600px) {
    display: block;
    color: white;
    font-size: 1.5rem;
    margin-right: 1rem;
    cursor: pointer;
  }
`;
