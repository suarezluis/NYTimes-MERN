import React from "react";
import { Link } from "react-router-dom";


const Nav = () => (
  <nav className="navbar navbar-expand-lg navbar-light">
    <Link className="navbar-brand" to="/">
      NYT-React
    </Link>
    <button
      className="navbar-toggler"
      data-toggle="collapse"
      data-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link" to="/">New Search</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/saved">My Saved Articles</Link>
        </li>
      </ul>
    </div>
  </nav>
);

export default Nav;
