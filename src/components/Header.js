import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className="header__container">
      <nav className="navbar navbar-expand-lg">
        <Link className="navbar-brand" to="/">
          Movie App
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <Link className="nav-link" to="/">
                Home <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Explore">
                Explore
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Header;