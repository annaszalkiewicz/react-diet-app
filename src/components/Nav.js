import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";

import { isNavOpen } from "../store/actions/uiActions";

class Nav extends Component {

  render() {
   
    return (
      <nav className={this.props.navIsOpen ? "header_menu--open" : "header_menu--closed"} >
        <NavLink to="/dashboard" className="header_menu--item" onClick={this.props.toggleNav}>Dashboard</NavLink>
        <div className="header_menu--item disabled">Recipes</div>
        <div className="header_menu--item  disabled">Challenge</div>
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