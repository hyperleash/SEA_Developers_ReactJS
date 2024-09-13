import React from "react";

import logo from "./images/qalogo.svg";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-sm">
        <a
          href="https://www.qa.com"
          className="navbar-brand"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={logo} alt="QA Ltd" style={{ width: "100px" }} />
        </a>
        <NavLink className="navbar-brand" to="/">
          <h1>Todo App</h1>
        </NavLink>

        <div className="collapse navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="navbar-item">
              <NavLink
                className="nav-link"
                activeClassName="nav-link active"
                to="/"
              >
                Todos
              </NavLink>
            </li>
            <li className="navbar-item">
              <NavLink
                className="nav-link"
                activeClassName="nav-link active"
                to="/add"
              >
                Add Todo
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
