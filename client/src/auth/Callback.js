import { Component } from 'react';

class Callback extends Component {
    componentDidMount() {
        this.props.postLogIn();
        this.props.handleAuthentication(this.props.history);
    }

    render() {
        return (
            null
        )
    }
}

export default Callback;