import React, { Component } from "react";
import { Input, FormBtn } from "../../components/Form";
import { Col, Row, Container } from "../../components/Grid";
import Profile from "../../components/Profile";
import ProfileName from "../../components/ProfileName";
import API from "../../utils/API";
// import { Link } from "react-router-dom";
class EditProfile extends Component {


    state = {
        users: [],
        name: "",
        picture: "",
        residency: ""

    };


    componentDidMount() {
        this.loadProfile();


    }

    loadProfile = () => {
        API.getProfile()
            .then(res =>
                this.setState({ users: res.data, name: "", picture: "", residency: "" })
            )
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
        if (this.state.name && this.state.picture && this.state.residency) {
            API.saveProfile({
                name: this.state.name,
                picture: this.state.picture,
                residency: this.state.residency
            })
                .then(res => this.loadProfile())
                .catch(err => console.log(err));

        }

    };


    render() {

        return (
            <Container fluid>
                <Row>
                    <ProfileName>
                        {this.state.users.map(user => (

                            // <h5 key={user._id}>
                            //     {user.name}
                            // </h5>



                            <div className="card border-0">

                                <img className="card-img-top" src={user.picture} alt="User Profile" />
                                <div className="card-body">
                                    <h5 className="card-title">{user.name}</h5>
                                </div>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item">Resident Of <br />
                                        <small className="text-muted">{user.residency}</small>
                                    </li>
                                </ul>
                                <div className="card-body">
                                    <a href="/editprofile" className="card-link">Update Profile</a>
                                </div>
                            </div>
                        ))}

                    </ProfileName>


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

