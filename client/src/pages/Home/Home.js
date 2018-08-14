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
                : {}
            ,
            email: "",
            name: "",
            picture: "",
            address: "",
            city: "",
            state: "",
            zip: "",
            about: "",
            exists: false
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
        this.checkUser();
    }

    checkUser = email => {
        API.getUser(email)
            .then(res => this.setState({ exists: res }))
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
                            !(this.state.exists) &&
                            <div>
                                I'M NOT PRESENT
                            </div>
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