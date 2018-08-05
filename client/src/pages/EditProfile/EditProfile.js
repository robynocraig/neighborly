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
            this.setState({ user: res.data, name: "", picture: "", residency: "" })    
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
                  
                    <Profile />
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
                    <ProfileName>
                    <h5 className="card-title">CALL TO API NAME: {this.state.users.name}</h5>
                    
                    </ProfileName>

                </Row>
            
            </Container>

        );

    };

};

export default EditProfile;

