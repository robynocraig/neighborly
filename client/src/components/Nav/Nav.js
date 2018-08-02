import React, { Component } from 'react';
import { Navbar, Button } from 'react-bootstrap';

class Nav extends Component {
    render() {
        const isAuthenticated = this.props.isLoggedIn2;

        return (
            <div>
                <Navbar fluid>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <a href="/">Auth0 - React</a>
                        </Navbar.Brand>

                        {
                            !isAuthenticated && (
                                <Button
                                    bsStyle="primary"
                                    className="btn-margin"
                                    onClick={this.props.login}
                                >
                                    Log In
                                </Button>
                            )
                        }
                        {
                            isAuthenticated && (
                                <Button
                                    bsStyle="primary"
                                    className="btn-margin"
                                    onClick={this.props.logout}
                                >
                                    Log Out
                                </Button>
                            )
                        }

                        <Button
                            bsStyle="primary"
                            className="btn-margin"
                        >
                        <a href="/dummy">Dummy</a>
                        </Button>
                    </Navbar.Header>
                </Navbar>
            </div>
        )
    }
}

export default Nav;