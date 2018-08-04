import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class Callback extends Component {
    componentDidMount() {
        this.props.postLogIn();
        this.props.handleAuthentication();
    }

    render() {
        return (
            <Redirect to="/" />
        )
    }
};

export default Callback;