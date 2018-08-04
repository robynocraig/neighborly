import React, { Component } from "react";
import API from "../../utils/API";
// import { Col, Row, Container } from "../../components/Grid";
import Profile from "../../components/Profile";
import Post from "../../components/Post";
import Subnav from "../../components/Subnav";

class Management extends Component {
  state = {
    managements: [],
    title: "",
    mockString: ""
  };

  componentDidMount() {
    this.loadManagements();
  }

  loadManagements = () => {
    API.getManagements()
      .then(res =>
        this.setState({ managements: res.data, title: "", mockString: "" })
      )
      .catch(err => console.log(err));
  };

  deleteManagement = id => {
    API.deleteManagement(id)
      .then(res => this.loadManagements())
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.title && this.state.mockString) {
      API.saveManagement({
        title: this.state.title,
        mockString: this.state.mockString
      })
        .then(res => this.loadManagements())
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <Container>
        <Row>
          <Col size="md-3 sm-12">
          <Profile />
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

export default Management;
