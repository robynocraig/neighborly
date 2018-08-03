import React from "react";
import "./Nav.css";

const Nav = () => (
  <nav className="navbar sticky-top navbar-expand-lg navbar-dark bg-dark" id="navCustom">
  <img src="https://i.imgur.com/uwqO6OC.png" className="ml-3" id="logoImg" alt="logo"/>
  <a className="navbar-brand ml-1" id="navLogo" href="managements">Neighborly
  </a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
      aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse justify-content-end mr-3">
      <ul className="navbar-nav">
          <li className="nav-item pr-1 pl-4">
              <a className="nav-link topNavLink" href="sell.html">Settings</a>
          </li>
          <li className="nav-item pr-1 pl-4">
              <a className="nav-link topNavLink" href="sell.html">Sign Out</a>
          </li>
      </ul>
  </div>
</nav>
);

export default Nav;
