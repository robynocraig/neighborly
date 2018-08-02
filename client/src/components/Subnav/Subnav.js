import React from "react";
import "./Subnav.css";

const Subnav = () => (
  <nav className="navbar sticky-top navbar-expand-lg navbar-dark bg-dark justify-content-end rounded" id="subNavCustom">
      <div className="container mx-auto">
          <div className="input-group" id="navSearchBar">
              <input type="text" className="form-control" placeholder=""></input>
              <div className="input-group-append">
                  <button className="btn btn-outline-light pl-5 pr-5" id="searchBtn" type="button">FIND</button>
              </div>
          </div>
      </div>
      <ul className="navbar-nav">
          <li className="nav-item">
              <a className="nav-link" href="#">Management</a>
          </li>
          <li className="nav-item">
              <a className="nav-link" href="#">Neighbors</a>
          </li>
          <li className="nav-item">
              <a className="nav-link" href="#">Events</a>
          </li>
          <li className="nav-item">
              <a className="nav-link" href="#">All</a>
          </li>
      </ul>
  </nav>
);

export default Subnav;
