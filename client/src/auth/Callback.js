import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import Home from '../pages/Home';

class Callback extends Component {
    componentDidMount() {
        this.props.postLogIn();
        this.props.handleAuthentication();
    }

    render() {
        const isAuthenticated = this.props.isAuthenticated;

        if (isAuthenticated) {
            return (
                <Route exact path="/" component={Home} />
            )
        } else {
            return (
                this.props.login()
            )
        }        
    }
}

export default Callback;