import React, { Component } from "react";
import API from "../../utils/API";
import { Col, Row, Container } from "../../components/Grid";
import { Input, TextArea, FormBtn } from "../../components/Form";
import { Postcard, ListPost } from "../../components/Postcard";

class Comments extends Component {

    state = {
        posts: [],
        title: "",
        comment: ""
    };

    componentDidMount() {
        this.loadComments();
    }

    loadComments = () => {
        API.getComments()
            .then(res =>
                this.setState({ posts: res.data, title: "", comment: ""})
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
        if (this.state.title && this.state.comment) {
            API.saveComment({
                title: this.state.title,
                comment: this.state.comment
            })
                .then(res => this.loadComments())
                .catch(err => console.log(err));
        }
    };

    render() {
        return (
            <Container fluid>
                <Row>
                    <Col size="md-12">
                        <form>
                            <Input
                            value={this.state.title}
                            onChange={this.handleInputChange}
                            name="title"
                            placeholder="Title (required)"
                            />
                            <TextArea
                            value={this.state.comment}
                            onChange={this.handleInputChange}
                            name="comment"
                            placeholder="Comment (required)"
                            />
                            <FormBtn
                            disabled={!(this.state.title && this.state.comment)}
                            onClick={this.handleFormSubmit}
                            >
                            Submit Comment
                            </FormBtn>
                        </form>
                        {this.state.posts.length ? (
                            <ListPost>
                                {this.state.posts.map(post => {
                                    return (
                                        <Postcard>
                                            <a href={"/comments/" + post._id}>
                                                {post.title}
                                            </a>
                                        </Postcard>
                                    )
                                })}
                            </ListPost>
                        ) : (
                            <h3>No results to Display</h3>
                        )}

                    </Col>
                </Row>
            </Container>
        )
    }

}

export default Comments;