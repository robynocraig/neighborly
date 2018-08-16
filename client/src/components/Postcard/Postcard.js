import React, { Component } from "react";
import { Col, Row, Container } from "../../components/Grid";
import ShowMoreText from 'react-show-more-text';

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
      <Container>
        <Row>
          <Col size="md-12 sm-12">
            <div className="card mt-3 border-dark">
              <div className="card-body">
                <div className="row">
                  <div className="col-md-9">
                    <img src={"https://i.imgur.com/uwqO6OC.png"} width="50px" alt="avatar" />
                  </div>
                  <div className="col-md-11 originalPostAvatar">
                    <img src={this.props.posterPicture} />
                    <strong>
                      <p>{this.props.title} by {this.props.posterName} on {this.props.date}</p>
                    </strong>
                    <ShowMoreText

                      lines={2}
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
          </Col>
        </Row>
      </Container >
    )
  }
}



