import React, { Component } from 'react';
import Home from '../pages/Home';

class Callback extends Component {
    componentDidMount() {
        this.props.postLogIn();
        this.props.handleAuthentication();
    }

    render() {
        return (
            <Home />
        )
    }
}

export default Callback;