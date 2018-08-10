import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import isAuthenticated from '../../auth/isAuthenticated';
import './Home.css';
import API from '../../utils/API';

class Home extends Component {
    constructor(props) {
        super(props);
    }

    state = {
        user: [],
        email: "",
        name: "",
        picture: "",
        address: "",
        city: "",
        state: "",
        zip: "",
        about: ""
    }

    // componentDidMount() {
    //     this.loadUser();
    // }

    // loadUser = () => {
    //     API.getUser()
    //         .then(res =>
    //             this.setState({ user: res.data, email: "", name: "", picture: "", address: "", city: "", state: "", zip: "", about: ""})    
    //         )
    //         .catch(err => console.log(err));
    // }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

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