import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import isAuthenticated from '../../auth/isAuthenticated';
import './Home.css';
import API from '../../utils/API';

class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            user: (this.props.location && this.props.location.state)
                ? this.props.location.state.profile
                : localStorage.getItem('profile')
                    ? JSON.parse(localStorage.getItem('profile'))
                    : {},
            email: "",
            name: "",
            picture: "",
            address: "",
            city: "",
            state: "",
            zip: "",
            about: "",
            exists: null
        }
    }

    // loadUser = () => {
    //     API.getUser()
    //         .then(res =>
    //             this.setState({ user: res.data, email: "", name: "", picture: "", address: "", city: "", state: "", zip: "", about: ""})    
    //         )
    //         .catch(err => console.log(err));
    // }

    componentDidMount() {
        if(this.state.user) {
            this.checkUser(this.state.user.email);
        }
    }

    checkUser = email => {
        API.getUser(email)
            .then(res => this.setState({ exists: res.data.exists }))
            .catch(err => console.log(err));
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    render() {
        return (
            <div>
                {
                    isAuthenticated() &&
                    <div>
                        {
                            (this.state.exists) &&
                            <div>
                                I'M PRESENT
                            </div>
                        }
                        {
                            (this.state.exists === false) &&
                            // <div>
                            //     I'M NOT PRESENT
                            // </div>
                            <Redirect to={{
                                pathname: '/editprofile',
                                state: {
                                    from: this.props.location,
                                    email: this.state.user.email
                                }
                            }} />
                        }
                    </div>
                }
                {
                    !isAuthenticated() &&
                    <Redirect to={{
                        pathname: '/login',
                        state: { from: this.props.location }
                    }} />
                }
            </div>
        )
    }
}

export default Home;