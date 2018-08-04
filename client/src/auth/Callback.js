import React, { Component } from 'react';

class Callback extends Component {
    componentDidMount() {
        this.props.postLogIn();
        this.props.handleAuthentication();
    }
    
    render() {
        return (
            <h2>hi</h2>
        )
    }
};

export default Callback;