import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import isAuthenticated from '../../auth/isAuthenticated';
import './Home.css';
import API from '../../utils/API';
import { Col, Row, Container } from "../../components/Grid";
import Profile from "../../components/Profile";
import Post from "../../components/Post";
import Subnav from "../../components/Subnav";

const styles = {
    body: {
      background: "#FCECD6",
      color: "black",
      font:" Arial, Helvetica, sans-serif"
    }
  };



class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: (this.props.location && this.props.location.state)
                ? this.props.location.state.email
                : localStorage.getItem('email')
                    ? localStorage.getItem('email')
                    : "",
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
        if(this.state.email) {
            this.checkUser(this.state.email);
        }
    }

    componentDidMount() {
        this.loadProfile();
    }


    loadProfile = () => {
        API.getUsers()
            .then(res =>
                this.setState({
                    users: res.data,
                    picture: "",
                    name: "",
                    address: "",
                    city: "",
                    zip: "",
                    state:"",
                    about: ""
                })
            )
            .catch(err => console.log(err));
    };


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
                            <div style={styles.body}>

<Container>
  <Row>
    <Col size="md-3 sm-12">
    {this.state.users.filter(user => {
                      console.log(user._id);
                      return (user.email ==="mbarbotiko@gmail.com")

                      // console.log(user._id);
                      // return (user.email ===localStorage.email)

                  }).map(user => (
                      <Profile
                          picture={user.picture}
                          name={user.name}
                          about={user.about}
                          address={user.address}
                          city={user.city}
                          state={user.state}
                          zip={user.zip} />
                  ))}


    </Col>
    <Col size="md-9 sm-12">
      <Subnav />
      <Post />
    </Col>
  </Row>
</Container>

</div>
                        }
                        {
                            (this.state.exists === false) &&
                            <Redirect to={{
                                pathname: '/editprofile',
                                state: {
                                    from: this.props.location,
                                    email: this.state.email
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