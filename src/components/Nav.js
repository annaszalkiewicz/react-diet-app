import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="header_menu">
      <NavLink exact to="/dashboard" className="header_menu--item">Dashboard</NavLink>
      <NavLink exact to="/recipes" className="header_menu--item">Recipes</NavLink>
      <NavLink exact to="/challenge" className="header_menu--item">Challenge</NavLink>
    </nav>
  );
};

export default Nav;