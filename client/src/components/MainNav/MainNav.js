import React, { Component } from 'react';
import "./MainNav.css";

class MainNav extends Component {
    render() {
        const isAuthenticated = this.props.isLoggedIn;

        return (
            <nav className="navbar sticky-top navbar-expand-lg navbar-dark bg-dark" id="navCustom">
                <img src="https://i.imgur.com/uwqO6OC.png" className="ml-3" id="logoImg" alt="logo" />
                <a className="navbar-brand ml-1" id="navLogo" href="/">Neighborly</a>

                {/* Toggler/collapsible button */}
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* Navbar links */}
                <div className="collapse navbar-collapse justify-content-end mr-3" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item pr-1 pl-4">
                            <a className="nav-link topNavLink" href="/">Home</a>
                        </li>
                        {
                            !isAuthenticated && (
                                <li className="nav-item pr-1 pl-4">
                                    <a className="nav-link topNavLink" onClick={this.props.login}>Log In</a>
                                </li>
                            )
                        }
                        {
                            isAuthenticated && (
                                <li className="nav-item pr-1 pl-4">
                                    <a className="nav-link topNavLink" onClick={this.props.logout}>Log Out</a>
                                </li>
                            )
                        }
                    </ul>
                </div>
            </nav>
        );
    }
}

export default MainNav;
