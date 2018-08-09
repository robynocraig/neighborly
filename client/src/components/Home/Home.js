import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import isAuthenticated from '../../auth/isAuthenticated';
import './Home.css';

class Home extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            isAuthenticated() ? (
                <div>
                    <h2>Home Page</h2>
                    <p>Hey, you’re logged in!</p>
                </div>
            ) : (
                    <Redirect to={{
                        pathname: '/login',
                        state: { from: this.props.location }
                    }} />
                )
        )
    }
}

export default Home;