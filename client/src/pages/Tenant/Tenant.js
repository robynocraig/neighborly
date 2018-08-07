import React, { Component } from "react";
import API from "../../utils/API";
import { Col, Row, Container } from "../../components/Grid";
import Profile from "../../components/Profile";
import Post from "../../components/Post";
import Subnav from "../../components/Subnav";
import Comment from "../../components/Comments";

class Tenant extends Component {
  state = {
    tenants: [],
    title: "",
    mockString: ""
  };

  componentDidMount() {
    this.loadTenants();
  }

  loadTenants = () => {
    API.getTenants()
      .then(res =>
        this.setState({ tenants: res.data, title: "", mockString: "" })
      )
      .catch(err => console.log(err));
  };

  deleteTenant = id => {
    API.deleteTenant(id)
      .then(res => this.loadTenants())
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
      API.saveTenant({
        title: this.state.title,
        mockString: this.state.mockString
      })
        .then(res => this.loadTenants())
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
            <Comment />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Tenant;
