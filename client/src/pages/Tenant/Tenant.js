import React, { Component } from "react";
import API from "../../utils/API";
import { Col, Row, Container } from "../../components/Grid";
import Profile from "../../components/Profile";
import Post from "../../components/Post";
import Subnav from "../../components/Subnav";

class Tenant extends Component {
  state = {
    users: [],
    picture: "",
    name: "",
    address: "",
    city: "",
    zip: "",
    state:"",
    about: ""

};


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

  render() {
    return (
      <Container>
        <Row>
          <Col size="md-3 sm-12">
          {this.state.users.filter(user => {
                            console.log(user._id);
                            return (user._id === '5b721f3c4fb9a23260aa6fed')

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
    );
  }
}

export default Tenant;
