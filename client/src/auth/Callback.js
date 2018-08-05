import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import Home from '../pages/Home';

class Callback extends Component {
    componentDidMount() {
        this.props.postLogIn();
        this.props.handleAuthentication();
    }

    render() {
        return(
            <Route exact path="/" component={Home} />
        )
    }
}

export default Callback;