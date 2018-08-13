import React, { Component } from "react";
import { Input, FormBtn, TextArea, State } from "../../components/Form";
import { Col, Row, Container } from "../../components/Grid";
import API from "../../utils/API";
import axios from 'axios';
var CLOUDINARY_URL = 'https://api.cloudinary.com/v1_1/neighborlyprofiles/image/upload';
var CLOUDINARY_UPLOAD_PRESET='xztqhhek'
// import { Link } from "react-router-dom";



class EditProfile extends Component {
    state = {
        users: [],
        picture: "",
        name: "",
        address: "",
        city: "",
        zip: "",
        state:"",
        about: "",
        // selectedFile:null
        

    };

    

    fileSelectedHandler=event=>{
        this.setState({selectedFile:event.target.files[0]})
    }

    fileUploadHandler=()=>{
        const fd= new FormData();
        fd.append('file', this.state.selectedFile);
        fd.append('upload_preset', CLOUDINARY_UPLOAD_PRESET);

;        axios.post(CLOUDINARY_URL, fd)
        .then(res=>{
            const cloudinaryImage= res.data.public_id
            console.log(res);
            console.log(res.data);
            console.log(res.data.public_id);
    //   const responseURL='http://res.cloudinary.com/neighborlyprofiles/image/upload'


        });

    }


    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        
        event.preventDefault();
        if (this.state.name && this.state.picture && this.state.zip && this.state.address && this.state.about &&this.state.city&&this.state.state) {//prevent form from refreshing on submission/ entry, also only allow for save profile function to run only if all of the entries are filled out.
            API.saveUser({//was saveProfile
                picture: this.state.picture,
                name: this.state.name,
                address: this.state.address,
                city: this.state.city,
                zip: this.state.zip,
                state: this.state.state,
                about: this.state.about,
                // selectedFile:'http://res.cloudinary.com/neighborlyprofiles/image/upload'
            })
           
                .catch(err => console.log(err));
        }

    };

    render() {
        return (
            <Container fluid>
            <div className="upload">
            <input type="file" onChange={this.fileSelectedHandler}/>
            <button onClick={this.fileUploadHandler}>Upload</button>

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
                            <State
                            value={this.state.state}
                            onChange={this.handleInputChange}
                            name="state"
                            />

                            <TextArea
                                value={this.state.about}
                                onChange={this.handleInputChange}
                                name="about"
                                placeholder="Say a little about yourself"
                            />

                            <FormBtn
                                disabled={!(this.state.name && this.state.picture && this.state.zip && this.state.address && this.state.about &&

                                    this.state.state&& 

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

