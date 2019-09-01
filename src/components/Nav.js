import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="header_menu">
      <NavLink to="/" className="header_menu_item">Dashbboard</NavLink>
      <NavLink to="/recipes" className="header_menu_item">Recipes</NavLink>
      <NavLink to="/challenge" className="header_menu_item">Challenge</NavLink>
    </nav>
  );
};

export default Nav;