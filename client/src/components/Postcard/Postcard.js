import React from "react";
import { Col, Row, Container } from "../../components/Grid";

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

export const Postcard = props => (

  <Container>
    <Row>
      <Col size="md-9 sm-12">
        <div className="card mt-3 border-dark">
          <div className="card-body">
              <div className="row">
                  <div className="col-md-9">
                      <img src="https://i.imgur.com/uwqO6OC.png" width="50px" alt="avatar"/>
                  </div>
                  <div className="col-md-11 originalPostAvatar">
                      <h5 className="card-title m-0 p-0">{props.children}</h5>
                  </div>
              </div>
          </div>
        </div>
      </Col>
    </Row>
  </Container>

);
