import React, { useState } from "react";
import Nav from "./Nav";
import User from "./User";

const Header = () => {
  const [navIsOpen, toggleNav] = useState(false);

  const toggleNavHandler = () => {
    !navIsOpen ? toggleNav(true) : toggleNav(false);
  };

  return (
    <header className="header">
      <div className="header_left">
        {!navIsOpen && (
          <svg
            viewBox="0 0 38 38"
            width="38"
            height="38"
            className="header_left--icon"
            onClick={toggleNavHandler}
          >
            <rect y="4" width="38" height="4" className="rect-1" />
            <rect y="17" width="38" height="4" className="rect-2" />
            <rect y="17" width="38" height="4" className="rect-3" />
            <rect y="30" width="38" height="4" className="rect-1" />
          </svg>
        )}
        {navIsOpen && (
          <React.Fragment>
            <svg
              viewBox="0 0 38 38"
              width="38"
              height="38"
              className="header_left--icon"
              onClick={toggleNavHandler}
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
                style={{ transform: "rotate(-45deg)", transformOrigin: "50%" }}
              />
            </svg>
            <Nav />
          </React.Fragment>
        )}
      </div>
      <User />
    </header>
  );
};

export default Header;
