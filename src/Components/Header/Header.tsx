import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import style from './Header.module.css';

const Header: React.FC = () => {
  return (
    <header >
      <nav className = {style.navBar}>
        <NavLink to="/me"> Me </NavLink>
        <NavLink to="/calculator"> Calculator </NavLink>
        <NavLink to="/recipes"> Recipes </NavLink>
        <NavLink to="/account"> Account </NavLink>
      </nav>
    </header>
  );
};

export default Header;
