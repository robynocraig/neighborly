import React, { Component } from "react";
import { Col, Row, Container } from "../Grid";
import ShowMoreText from 'react-show-more-text';
import './ReplyBox.css';
import API from "../../utils/API";
import { Input, TextArea, FormBtn } from "../Form";


export class ReplyBox extends Component {
  constructor(props) {
    super(props)
    
    this.state = {
      replyId:this.props.replyId,
      reply:this.props.reply
  };

  

  }
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
        [name]: value
    });
};

  handleReplySubmit = event => {
    
    event.preventDefault();
    API.saveReply({
        reply:this.state.reply
        
    })

    // .then(res=> this.loadComments())
    .catch(err=>console.log(err));
}

  render() {

    return (

      <div>
        <div className="card mt-3 border-secondary custom-card">
          <div className="card-body">
            <div className="row">
              <div className="col-md-12">
  <TextArea value={this.state.reply}
                                    onChange={this.handleInputChange}
                                    name="reply"
                                    placeholder="Reply to this"
                                    className="form-control bg-light"
                                    />

                            <FormBtn onClick={this.handleReplySubmit} 
                            >Reply </FormBtn>
                           
            
              </div>
              
            </div>

          </div>
        </div>
        </div>
        )
      }
    }
