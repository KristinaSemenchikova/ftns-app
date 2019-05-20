import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const NavBar = styled.nav`
  color: white;
`;
const HeaderApp = styled.header`
  grid-area: h;
  display : flex;
  flex-direction : row;

`;
const Link = styled(NavLink)`
  text-decoration: none;
  color: white;
  &.active {
    color: rgb(68, 0, 255);
  }
`;
const Header: React.FC = () => {
  return (
    <HeaderApp>
      <NavBar>
        <Link to="/me"> Me </Link>
        <Link to="/calculator"> Calculator </Link>
        <Link to="/recipes"> Recipes </Link>
        <Link to="/account"> Account </Link>
      </NavBar>
    </HeaderApp>
  );
};

export default Header;
