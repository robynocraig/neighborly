import React, { Component } from "react";
import { Col, Row, Container } from "../../components/Grid";
import ShowMoreText from 'react-show-more-text';
import './Postcard.css';

// export const Postcard = ({ title, comments }) => {
//     return (
//     <li className="list-group-item">
//         <div className="card bg-light border-0">
//             <div className="card-header">
//                 {title}
//             </div>
//             <div className="card-body">
//                 {comments}
//             </div>
//         </div>
//     </li>
//     );
// };

export class Postcard extends Component {
  constructor(props) {
    super(props)
  }
  executeOnClick(isExpanded) {
    console.log(isExpanded);
  }

  render() {
    return (
      <div className="card mt-3 border-secondary custom-card">
        <div className="card-body">
          <div className="row">
            <div className="col-md-12">
              <Row>
                <img src={this.props.posterPicture} alt="avatar" className="profile-img" />
                <div className="post-details">
                  <strong>
                    <p className="post-title">{this.props.title}</p>
                    <p className="post-name">By {this.props.posterName}</p>
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
            </div>
          </div>
        </div>
      </div>

    )
  }
}
