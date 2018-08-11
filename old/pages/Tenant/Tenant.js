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
    drop:"",
    aboutMe: ""

};


componentDidMount() {
    this.loadProfile();
}

loadProfile = () => {
    API.getProfile()
        .then(res =>
            this.setState({
                users: res.data, 
                picture: "",
                name: "",
                address: "",
                city: "",
                zip: "",
                drop:"",
                aboutMe: ""
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
                            return (user._id === '5b6b57772ed75d3e4c92e663')

                        }).map(user => (
                            <Profile
                                picture={user.picture}
                                name={user.name}
                                aboutMe={user.aboutMe}
                                address={user.address}
                                city={user.city}
                                drop={user.drop}
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
