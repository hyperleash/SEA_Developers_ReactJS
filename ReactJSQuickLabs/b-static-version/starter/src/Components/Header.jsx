import React from "react";
import logo from "./images/qalogo.svg";
import PropTypes from "prop-types";

function Header() {
  return (
    <header>
      <nav className="navbars navbar-expand-sm">
        <a
          href="https://www.qa.com"
          className="navbar-brand"
          target="_blank"
          rel="noopener noreffer"
        >
          <img src={logo} alt="QA Ltd" width="100" />
        </a>
        <a href="/" className="navbar-brand">
          <h1>Todo App</h1>
        </a>
      </nav>
    </header>
  );
}

Header.defaultProps = {
  headerProp: "This is the default heading",
  contentProp: "This is default content",
};

Header.propTypes = {
  headerProp: PropTypes.string.isRequired,
  contentProp: PropTypes.string.isRequired,
  numberProp: PropTypes.number,
};

export default Header;
