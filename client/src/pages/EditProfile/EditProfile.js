import React, { Component } from "react";
import { Input, FormBtn } from "../../components/Form";
import { Col, Row, Container } from "../../components/Grid";
import Profile from "../../components/Profile";
import API from "../../utils/API";
// import { Link } from "react-router-dom";
class EditProfile extends Component {

    state = {
        user: [],
        name: "",
        picture: "",
        residency: ""
      };


    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };
//write this and schema together.
      handleFormSubmit = event => {
        event.preventDefault();
        if (this.state.title && this.state.author) {
          API.saveBook({
            title: this.state.title,
            author: this.state.author,
            synopsis: this.state.synopsis
          })
            .then(res => this.loadBooks())
            .catch(err => console.log(err));
        }
      };

    render() {
        return (
            <Container fluid>
                <Row>
                <Profile/>
                    <Col size="md-4">
                    
                        <form>
                            <Input
                                value={this.state.name}
                                onChange={this.handleInputChange}
                                name="name"
                                placeholder="First and Last Name(required)"
                            />
                            <Input
                                value={this.state.picture}
                                onChange={this.handleInputChange}
                                name="picture"
                                placeholder="Weblink to a Photo(required)"
                            />
                            <Input
                                value={this.state.residency}
                                onChange={this.handleInputChange}
                                name="residency"
                                placeholder="Place of Residence"
                            />
                            <FormBtn
                                disabled={!(this.state.name && this.state.picture && this.state.residency)}
                                onClick={this.handleFormSubmit}
                            >
                                Submit Updated Profile
              </FormBtn>
                        </form>
                    </Col>
                </Row>
                
            </Container>

        );

    };

};

export default EditProfile;

