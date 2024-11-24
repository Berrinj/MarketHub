import styled from "styled-components";

export const NavStyle = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 10px;
`;

export const NavUl = styled.ul`
  display: flex;
  justify-content: space-around;
  list-style: none;
  padding: 0;
  margin: 0;
  a {
    text-decoration: none;
    color: #fff;
  }
`;

export const NavItem = styled.li`
  display: inline-block;
  padding: 10px;
`;
