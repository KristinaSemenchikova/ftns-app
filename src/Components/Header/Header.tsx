import React from "react";
import { NavLink } from "react-router-dom";
import s from './Header.module.css';
import {Icon} from  'antd';

let iconSize = {fontSize : '2em'};
const Header: React.FC = () => {
  return (
    <header >
      <nav className = {s.navBar}>
        <NavLink to="/me"> <Icon  style = {iconSize} type="user" /> </NavLink>
        <NavLink to="/calculator"> <Icon style = {iconSize} type="calculator" /> </NavLink>
        <NavLink to="/notes"> <Icon  style = {iconSize}type="read" /> </NavLink>
        <NavLink to="/settings"> <Icon style = {iconSize} type="setting" /> </NavLink>
      </nav>
    </header>
  );
};

export default Header;
