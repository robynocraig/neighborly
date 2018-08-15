import React, { Component } from "react";
import API from "../../utils/API";
import { Col, Row, Container } from "../../components/Grid";
import Profile from "../../components/Profile";
import Post from "../../components/Post";
import Subnav from "../../components/Subnav";
import Comment from "../../components/Comments";

const styles = {
  body: {
    background: "#FCECD6",
    color: "black",
    font:" Arial, Helvetica, sans-serif"
  }
};

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
            <Comment />
          </Col>
        </Row>
      </Container>

      </div>
    );
  }
}

export default Tenant;
