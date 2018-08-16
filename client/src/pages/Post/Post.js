import React, { Component } from "react";
import API from "../../utils/API";
import { Row, Container } from "../../components/Grid";
import { Input, TextArea, FormBtn } from "../../components/Form";

class Posts extends Component {
    constructor(props) {
        super(props)

        this.state = {
            posts: [],
            title: "",
            comment: ""
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
        if (this.state.title && this.state.comment) {
            API.saveComment({
                title: this.state.title,
                comment: this.state.comment,
                posterEmail: this.props.posterEmail,
                posterName: this.props.posterName,
                posterPicture: this.props.posterPicture
            })
                .then(res => this.loadComments())
                .catch(err => console.log(err));
        }
    };

    render() {
        return (
            <Container fluid>
                <Row>
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
                            Comment
                        </FormBtn>
                    </form>
                    {this.state.posts.length ? (
                        <List>
                            {this.state.posts.map(post => {
                                return (
                                    <ListItem key={post._id}>
                                        {post.title} by {post.posterName}
                                        <img src={post.posterPicture} />
                                        <br />
                                        {post.comment}
                                    </ListItem>
                                );
                            })}
                        </List>
                    ) : (
                            <h3>No Results to Display</h3>
                        )}
                </Row>
            </Container>
        )
    }
}

export default Posts;