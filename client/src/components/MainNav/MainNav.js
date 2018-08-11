import React from 'react';
import { Link } from 'react-router-dom';
import "./MainNav.css"
import isAuthenticated from '../../auth/isAuthenticated';

const MainNav = () => (
  // <header>
  //   <h1>React Auth0 App</h1>
  //   <nav>
  //     <ul>
  //       <li><Link to='/'>Top</Link></li>
  //       <li><Link to='/private'>Private</Link></li>
  //       {
  //         !isAuthenticated() && (
  //           <li><Link to='/login'>Login</Link></li>
  //         )
  //       }
  //       {
  //         isAuthenticated() && (
  //           <li><Link to='/logout'>Logout</Link></li>
  //         )
  //       }
  //     </ul>
  //   </nav>
  // </header>

  <nav className="navbar stick-top navbar-expand-lg navbar-dark bg-dark" id="navCustom">
    <Link className="navbar-brand ml-1" id="navBrand" to="/">
      <img src="https://i.imgur.com/uwqO6OC.png" className="ml-3" id="navLogo" alt="logo" />
      Neighborly
    </Link>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <ul className="navbar-nav ml-auto">
      {/* mr-auto if we want buttons on the left */}
        <li className="nav-item active">
          <Link className="nav-link" to="/">Home<span className="sr-only">(current)</span></Link>
        </li>
        {/* <li className="nav-item">
          <Link className="nav-link" to="/private">Private</Link>
        </li> */}
        {
          !isAuthenticated() && (
            <li className="nav-item">
              <Link className="nav-link" to="/login">Login</Link>
            </li>
          )
        }
        {
          isAuthenticated() && (
            <li className="nav-item">
              <Link className="nav-link" to="/logout">Logout</Link>
            </li>
          )
        }
      </ul>
    </div>
  </nav>
)

export default MainNav;