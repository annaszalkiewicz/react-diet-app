import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";

import { isNavOpen } from "../store/actions/uiActions";

class Nav extends Component {

  render() {
   
    return (
      <nav className={this.props.navIsOpen ? "header_menu--open" : "header_menu--closed"} onClick={this.props.toggleNav}>
        <NavLink exact to="/dashboard" className="header_menu--item">Dashboard</NavLink>
        <NavLink exact to="/recipes" className="header_menu--item">Recipes</NavLink>
        <NavLink exact to="/challenge" className="header_menu--item">Challenge</NavLink>
      </nav>
    );
  }
  
};

const mapStateToProps = state => {
  return {
    navIsOpen: state.uiReducer.isNavOpen
  }
}

const mapDispatchToProps = dispatch => {
  return {
    toggleNav: () => dispatch(isNavOpen())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Nav);