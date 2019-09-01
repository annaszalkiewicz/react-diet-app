import React, { useState } from "react";
import Nav from "./Nav";

const Header = () => {
  const [navIsOpen, toggleNav] = useState(false);

  const toggleNavHandler = () => {
    !navIsOpen ? toggleNav(true) : toggleNav(false);
  };

  return (
    <header className="header">
      {!navIsOpen && (
        <svg
          viewBox="0 0 48 38"
          width="48"
          height="38"
          className="header_icon"
          onClick={toggleNavHandler}
        >
          <rect y="4" width="48" height="4" className="rect-1" />
          <rect y="17" width="48" height="4" className="rect-2" />
          <rect y="17" width="48" height="4" className="rect-3" />
          <rect y="30" width="48" height="4" className="rect-1" />
        </svg>
      )}
      {navIsOpen && (
        <React.Fragment>
          <svg
            viewBox="0 0 48 38"
            width="48"
            height="38"
            className="header_icon"
            onClick={toggleNavHandler}
          >
            <rect
              y="17"
              width="48"
              height="4"
              className="rect-2"
              style={{ transform: "rotate(45deg)", transformOrigin: "50%" }}
            />
            <rect
              y="17"
              width="48"
              height="4"
              className="rect-3"
              style={{ transform: "rotate(-45deg)", transformOrigin: "50%" }}
            />
          </svg>
          <Nav />
        </React.Fragment>
      )}
    </header>
  );
};

export default Header;
