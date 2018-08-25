import React, { Component } from "react";
import API from "../../utils/API";
import { Col, Row, Container } from "../../components/Grid";
import { Input, TextArea, FormBtn } from "../../components/Form";
import { List } from "../../components/List";
import { Postcard } from "../../components/Postcard";
import moment from "moment/moment.js";
import "./Post.css"

class Post extends Component {
    constructor(props) {
        super(props)

        this.state = {
            posts: [],
            title: "",
            comment: "",
            posterEmail: this.props.posterEmail,
            posterName: this.props.posterName,
            posterPicture: this.props.posterPicture,
            posterAddress: this.props.posterAddress
        };
    }

    componentDidMount() {
        this.loadComments();
    }

    loadComments = () => {
        API.getComments()
            .then(res =>
                this.setState({ posts: res.data, title: "", comment: "" })
            )
            .catch(err => console.log(err));
    };

    deleteComment = id => {
        API.deleteComment(id)
            .then(res => this.loadComments())
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

        const time = moment().format();

        if (this.state.title && this.state.comment) {
            API.saveComment({
                title: this.state.title,
                comment: this.state.comment,
                posterEmail: this.state.posterEmail,
                posterName: this.state.posterName,
                posterPicture: this.state.posterPicture,
                posterAddress: this.state.posterAddress,
                date: time
            })
                .then(res => this.loadComments())
                .catch(err => console.log(err));
        }
    };

    render() {
        return (
                <Row>
                    <Col size="md-12 sm-12">
                        <div className="card border-danger">
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-md-1">
                                        <img src="https://i.imgur.com/brH81MS.png" width="50px" alt="avatar" />
                                    </div>
                                    <div className="col-md-10 offset-md-1 originalPostAvatar">
                                        <h5 className="card-title m-0 p-0">Craig Property Managment Inc.</h5>
                                        <p className="small">1 day ago</p>
                                    </div>
                                </div>
                                <p className="card-text">***AVOID 5th STREET***
                                <br />
                                5th Street will be closed off until further notice. We expect that the matter will be
                                resolved quickly and as many of you will be affeced, we will remain in contact to further
                                inform you. Please contact us for any other questions. Thank you!
                                </p>
                            </div>
                        </div>
                    </Col>
                    <Col size="md-12 sm-12">
                        <div className="card mt-3 border-secondary">
                            <div className="card-body">
                                <form>
                                    <Input
                                        value={this.state.title}
                                        onChange={this.handleInputChange}
                                        name="title"
                                        placeholder="Title (required)"
                                        className="form-control bg-light"
                                    />
                                    <TextArea
                                        value={this.state.comment}
                                        onChange={this.handleInputChange}
                                        name="comment"
                                        placeholder="Comment (required)"
                                        className="form-control bg-light"
                                    />
                                    <FormBtn
                                        disabled={!(this.state.title && this.state.comment)}
                                        onClick={this.handleFormSubmit}
                                    >
                                        Add Post
                                    </FormBtn>
                                </form>
                            </div>
                        </div>
                    </Col>

                    <Col size="md-12 sm-12" >
                        {this.state.posts.length ? (
                            <List>
                                {this.state.posts.map(post => {
                                    return (
                                        <Postcard
                                            key={post._id}
                                            title={post.title}
                                            comment={post.comment}
                                            posterName={post.posterName}
                                            posterPicture={post.posterPicture}
                                            date={moment(post.date).fromNow()}
                                            posterAddress={post.posterAddress}
                                            posterEmail={post.posterEmail}
                                        />
                                    );
                                })}
                            </List>
                        ) : (
                                <h3></h3>
                            )}
                    </Col>

                </Row>

        )
    }

}

export default Post;
