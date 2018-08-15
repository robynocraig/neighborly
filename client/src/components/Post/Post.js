import React, { Component } from "react";
import API from "../../utils/API";
import { Col, Row, Container } from "../../components/Grid";
import { Input, TextArea, FormBtn } from "../../components/Form";
import { List, ListItem } from "../../components/List";
import DeleteBtn from "../../components/DeleteBtn";
import { Postcard } from "../../components/Postcard";

class Post extends Component {

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
          <Container>
              <Row>
                <Col size="md-3 sm-12">
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
                  </Col>
                  <Col size="md-9 sm-12">
                  {this.state.posts.length ? (
                      <List>
                          {this.state.posts.map(post => {
                              return (
                                  <Postcard key={post._id}>
                                  <strong>
                                    <p>{post.title}</p>
                                  </strong>
                                    <p>{post.comment}</p>
                                  <DeleteBtn onClick={() => this.deleteComment(post._id)} />
                                  </Postcard>
                              );
                          })}
                      </List>
                  ) : (
                      <h3></h3>
                  )}
                  </Col>
              </Row>
          </Container>
      )
  }
}
//const Post = () => (
//     <div class="card mt-3 border-danger">
//         <div class="card-body">
//             {/*  POSTER'S AVATAR */}
//             <div class="row">
//                 <div class="col-md-1">
//                     <img src="https://i.imgur.com/brH81MS.png" width="50px" alt="avatar"/>
//                 </div>
//                 <div class="col-md-11 originalPostAvatar">
//                     <h5 class="card-title m-0 p-0">ReAnimate Property Managment Inc.</h5>
//                     <p class="small">5 days ago</p>
//                 </div>
//             </div>
//             <p class="card-text">***AVOID 5th STREET***
//                 <br />5th Street will be closed off until further notice. We expect that the matter will be
//                 resolved quickly and as many of you will be affeced, we will remain in contact to further
//                 inform you. Please contact us for any other questions. Thank you
//                 <a href="" class=""> ...See More</a>
//             </p>
//             <p class="card-text text-center mt-2">
//                 <a href="">Like</a>
//                 <strong>+0</strong>
//             </p>
//         </div>
//         {/* container for user responses */}
//         <div class="container">
//             {/* NEIGHBOR COMMENT RESPONSE #1 */}
//             <div class="card bg-light border-0">
//                 <div class="card-body">
//
//                     {/* NEIGHBOR'S POST AVATAR */}
//                     <div class="row">
//                         <div class="col-md-1">
//                             <img src="https://i.imgur.com/LiqybQ4.png" width="25px" alt="avatar"/>
//                         </div>
//                         <div class="col-md-11 neighborAvatar">
//                             <p class="card-text">Danika Campbells
//                                 <small>
//                                     <em>5 day ago</em>
//                                 </small>
//                             </p>
//                         </div>
//                     </div>
//
//                     <p class="card-text small m-0 p-0">What's the reason for this? I use that as a short-cut to work daily :(</p>
//                     <p class="card-text small text-center mt-2">
//                         <a href="">Like</a>
//                         <strong>+19</strong>
//                     </p>
//                 </div>
//             </div>
//             {/* USER 'CHIME-IN' */}
//             <div class="form-group mt-2 mb-1">
//                 <textarea class="form-control bg-light" id="exampleFormControlTextarea1" rows="3" placeholder="Chime in..."></textarea>
//             </div>
//             <div class="text-right">
//                 <button type="button" class="btn btn-primary mb-3 px-4">Post</button>
//             </div>
//         </div>
//     </div>
// );

export default Post;
