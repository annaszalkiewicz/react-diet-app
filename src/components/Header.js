import React, { Component } from "react";
import { connect } from "react-redux";

import { isNavOpen } from "../store/actions/uiActions";
import Nav from "./Nav";
import User from "./User";

class Header extends Component {
  toggleNavHandler = () => {
    this.props.toggleNav();
  };

  render() {
    const { navIsOpen } = this.props;

    return (
      <header className="header">
        <div className="header_left">
          {!navIsOpen && (
            <React.Fragment>
              <svg
                viewBox="0 0 38 38"
                width="38"
                height="38"
                className="header_left--icon"
                onClick={this.toggleNavHandler}
              >
                <rect y="4" width="38" height="4" className="rect-1" />
                <rect y="17" width="38" height="4" className="rect-2" />
                <rect y="17" width="38" height="4" className="rect-3" />
                <rect y="30" width="38" height="4" className="rect-1" />
              </svg>
              <Nav />
            </React.Fragment>
          )}
          {navIsOpen && (
            <React.Fragment>
              <svg
                viewBox="0 0 38 38"
                width="38"
                height="38"
                className="header_left--icon"
                onClick={this.toggleNavHandler}
              >
                <rect
                  y="17"
                  width="38"
                  height="4"
                  className="rect-2"
                  style={{ transform: "rotate(45deg)", transformOrigin: "50%" }}
                />
                <rect
                  y="17"
                  width="38"
                  height="4"
                  className="rect-3"
                  style={{
                    transform: "rotate(-45deg)",
                    transformOrigin: "50%"
                  }}
                />
              </svg>
              <Nav />
            </React.Fragment>
          )}
        </div>
        <User />
      </header>
    );
  }
}

const mapStateToProps = state => {
  return {
    navIsOpen: state.uiReducer.isNavOpen
  };
};

const mapDispatchToProps = dispatch => {
  return {
    toggleNav: () => dispatch(isNavOpen())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
