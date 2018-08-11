import React, { Component } from "react";
import { Input, FormBtn, TextArea, Drop } from "../../components/Form";
import { Col, Row, Container } from "../../components/Grid";
import Profile from "../../components/Profile";
import ProfileName from "../../components/ProfileName";
import API from "../../utils/API";
// import { Link } from "react-router-dom";
class EditProfile extends Component {


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


    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        
        event.preventDefault();
        if (this.state.name && this.state.picture && this.state.zip && this.state.address && this.state.aboutMe &&this.state.city&&this.state.drop) {//prevent form from refreshing on submission/ entry, also only allow for save profile function to run only if all of the entries are filled out.
            API.saveProfile({
                picture: this.state.picture,
                name: this.state.name,
                address: this.state.address,
                city: this.state.city,
                zip: this.state.zip,
                drop: this.state.drop,
                aboutMe: this.state.aboutMe
            })
           
                .catch(err => console.log(err));
        }

    };

    render() {
        return (
            <Container fluid>
            <div className="upload">
            WORDS HERE!

            </div>
                <Row>

                    <Col size="md-8">

                        <form>
                            <Input
                                value={this.state.picture}
                                onChange={this.handleInputChange}
                                name="picture"
                                placeholder="Weblink to a Photo(required)"
                            />
                            <Input
                                value={this.state.name}
                                onChange={this.handleInputChange}
                                name="name"
                                placeholder="First and Last Name(required)"
                            />
                            <Input
                                value={this.state.address}
                                onChange={this.handleInputChange}
                                name="address"
                                placeholder="123 Main Street"
                            />
                            <Input
                                value={this.state.city}
                                onChange={this.handleInputChange}
                                name="city"
                                placeholder="City"
                            />
                            <Input
                                value={this.state.zip}
                                onChange={this.handleInputChange}
                                name="zip"
                                placeholder="Zip Code"
                           
                            />
                            <Drop
                            value={this.state.drop}
                            onChange={this.handleInputChange}
                            name="drop"
                            />

                            <TextArea
                                value={this.state.aboutMe}
                                onChange={this.handleInputChange}
                                name="aboutMe"
                                placeholder="Say a little about yourself"
                            />

                            <FormBtn
                                disabled={!(this.state.name && this.state.picture && this.state.zip && this.state.address && this.state.aboutMe &&

                                    this.state.drop&& 

                                    this.state.city)}
                                onClick={this.handleFormSubmit}
                                //form button wont appear until all fields are filled out
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

