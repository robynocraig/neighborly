import React, { Component } from 'react';

class Callback extends Component {
    componentDidMount() {
        this.props.postLogIn();
        this.props.handleAuthentication();
    }

    render() {
        return (
            <h2>hello world</h2>
        )
    }
}

export default Callback;