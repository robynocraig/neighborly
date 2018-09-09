import React, { Component } from "react";
import { Col, Row, Container } from "../../components/Grid";
import ShowMoreText from 'react-show-more-text';
import './Postcard.css';
import API from "../../utils/API";
import Modal from '../../components/Modal';
import { Input, TextArea, FormBtn } from "../../components/Form";
import {ReplyBox} from "../../components/ReplyBox"

// The modal button

const styles = {
  button: {
    marginLeft: "15px",
    fontSize: "12px",
    backgroundColor: "#57b2ed",
    borderColor: "#57b2ed",
    lineHeight: 1
  },
  modalimg: {
    width: "35%",
    height: "35%",
    objectFit: "scale-down",
    marginBottom: "15px",
    marginRight: "15px"
  }
};

export class Postcard extends Component {
  constructor(props) {
    super(props);
    this.state = { isOpen: false };
  }
  executeOnClick(isExpanded) {
    console.log(isExpanded);
  }
  toggleModal = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }


  render() {
    return (
      <div>
        <div className="card mt-3 border-secondary custom-card">
          <div className="card-body">
            <div className="row">
              <div className="col-md-12">
                <Row>
                  <img src={this.props.posterPicture} alt="avatar" className="profile-img" />
                  <div className="post-details">
                    <strong>
                      <p className="post-title">{this.props.title}</p>
                      <p className="post-name">By {this.props.posterName}
                        <button className="btn btn-info" onClick={this.toggleModal} style={styles.button}>
                          View Neighbor Details
                    </button>
                      </p>
                      <p className="post-date">{this.props.date}</p>
                    </strong>

                  </div>
                </Row>
                <ShowMoreText

                  lines={5}
                  more='Show more'
                  less='Show less'
                  anchorClass=''
                  onClick={this.executeOnClick}
                >
                  {this.props.comment}
                </ShowMoreText>
                <ReplyBox value={this.props.post_id}/>
          

              </div>
            </div>
          </div>
        </div>

        <Modal show={this.state.isOpen}
          onClose={this.toggleModal}>
          <Row>
            <img src={this.props.posterPicture} alt="avatar" style={styles.modalimg} />
            <div>
              <p>{this.props.posterName}</p>
              <p>{this.props.posterEmail}</p>
              <p>{this.props.posterAddress}</p>
            </div>
          </Row>
        </Modal>
      </div>
    )
  }
}
