import React, { Component } from "react";
import DeleteBtn from "../../components/DeleteBtn";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, FormBtn } from "../../components/Form";

class Managements extends Component {
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
      <Container fluid>
        <Row>
          <Col size="md-6">
            <Jumbotron>
              <h1>Some Management</h1>
            </Jumbotron>
            <form>
              <Input
                value={this.state.title}
                onChange={this.handleInputChange}
                name="title"
                placeholder="Title (required)"
              />
              <Input
                value={this.state.mockString}
                onChange={this.handleInputChange}
                name="mockString"
                placeholder="mockString (required)"
              />
              <FormBtn
                disabled={!(this.state.mockString && this.state.title)}
                onClick={this.handleFormSubmit}
              >
                Submit Management
              </FormBtn>
            </form>
          </Col>
          <Col size="md-6 sm-12">
            <Jumbotron>
              <h1>Managements On My List</h1>
            </Jumbotron>
            {this.state.managements.length ? (
              <List>
                {this.state.managements.map(management => (
                  <ListItem key={management._id}>
                    <Link to={"/managements/" + management._id}>
                      <strong>
                        {management.title} with {management.mockString}
                      </strong>
                    </Link>
                    <DeleteBtn onClick={() => this.deleteManagement(management._id)} />
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Managements;
