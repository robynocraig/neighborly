import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { Input, FormBtn, TextArea, State } from "../../components/Form";
import { Col, Row, Container } from "../../components/Grid";
import API from "../../utils/API";
import axios from 'axios';
import isAuthenticated from '../../auth/isAuthenticated';
var CLOUDINARY_URL = 'https://api.cloudinary.com/v1_1/neighborlyprofiles/image/upload';
var CLOUDINARY_UPLOAD_PRESET = 'xztqhhek';

const styles = {
    body: {
        background: "#FCECD6",
        color: "black",
        font: " Arial, Helvetica, sans-serif",
        minHeight: "100vh"
    },
    img: {
        margin: 10,
        fontSize: 30
    },
    upload: {
        margin: 10
    },
    container: {
        width: "100%",
        margin: "auto"
    }
};

class EditProfile extends Component {
    state = {
        email: (this.props.location && this.props.location.state)
            ? this.props.location.state.email
            : localStorage.getItem('email')
                ? localStorage.getItem('email')
                : "",
        name: "",
        address: "",
        city: "",
        zip: "",
        state: "",
        about: "",
        picture: null,
        referrer: null
    };

    fileSelectedHandler = event => {
        this.setState({ selectedFile: event.target.files[0] })
    }

    handleInputChange = event => {

        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {

        event.preventDefault();
        if (this.state.name && this.state.zip && this.state.address && this.state.about && this.state.city && this.state.state) {
            const fd = new FormData();
            fd.append('file', this.state.selectedFile);
            fd.append('upload_preset', CLOUDINARY_UPLOAD_PRESET);

            axios.post(CLOUDINARY_URL, fd)
                .then(res => {
                    const cloudinaryImage = res.data.public_id
                    const responseURL = 'http://res.cloudinary.com/neighborlyprofiles/image/upload/' + cloudinaryImage

                    API.saveUser({
                        email: this.state.email,
                        name: this.state.name,
                        address: this.state.address,
                        city: this.state.city,
                        zip: this.state.zip,
                        state: this.state.state,
                        about: this.state.about,
                        picture: responseURL
                    }).catch(err => console.log(err))
                        .then(this.setState({
                            referrer: '/'
                        }));
                });
        }
    };

    render() {
        const { referrer } = this.state;

        if (isAuthenticated()) {
            if (referrer) {
                console.log(this.state);

                return <Redirect to={{
                    pathname: '/',
                    state: { email: this.state.email }
                }} />;
            }
            else {
                return (
                    <div style={styles.body}>
                        <Container style={styles.container}>
                            <p>Thank you for joining Neighborly! Please fill in the details below and get started connecting with your neighbors.</p>
                            <i className="fas fa-image" style={styles.img}></i>
                            <div className="upload" style={styles.upload}>
                                <input type="file" onChange={this.fileSelectedHandler} />
                            </div>
                            <Row>
                                <Col size="md-8">
                                    <form>
                                        <i className="fas fa-user-circle" style={styles.img}></i>
                                        <Input
                                            value={this.state.name}
                                            onChange={this.handleInputChange}
                                            name="name"
                                            placeholder="First and Last Name(required)"
                                        />
                                        <i className="fas fa-home" style={styles.img}></i>
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
                                        <State
                                            value={this.state.state}
                                            onChange={this.handleInputChange}
                                            name="state"
                                        />
                                        <i className="fas fa-keyboard" style={styles.img}></i>

                                        <TextArea
                                            value={this.state.about}
                                            onChange={this.handleInputChange}
                                            name="about"
                                            placeholder="Say a little about yourself"
                                        />
                                        <FormBtn
                                            disabled={!(this.state.name && this.state.zip && this.state.address && this.state.about &&
                                                //statepicture???
                                                this.state.state && this.state.city)}
                                            onClick={this.handleFormSubmit}
                                        >
                                            Submit Updated Profile
                                </FormBtn>
                                    </form>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                );
            }
        } else {
            return (
                <Redirect to={{
                    pathname: '/login',
                    state: { from: this.props.location }
                }} />
            )
        }
    };
};

export default EditProfile;
