import React, { Component } from "react";
import { Input, FormBtn, TextArea, Drop } from "../../components/Form";
import { Col, Row, Container } from "../../components/Grid";
//import './Management.css';

const styles = {
  body: {
    background: "#FCECD6",
    color: "black",
    font:" Arial, Helvetica, sans-serif"
  },
  button: {
    margin: 10
  }
};

export default class Management extends Component {
  render() {
    return (
    <div style={styles.body}>
    <Container>
      <Row>

        <Col size="md-3 sm-12">
          <div className="card border-0">
              <img className="card-img-top" src="https://i.imgur.com/brH81MS.png" alt="Card image cap" />
              <div className="card-body">
                  <h5 className="card-title">Leon Craig</h5>
                  <p className="card-text">
                      <small>I am the landlord of two properties. Please reach out to me with any questions!</small>
                  </p>
              </div>
              <ul className="list-group list-group-flush">
                  <li className="list-group-item">Landlord Of:
                      <br/>
                      <small className="text-muted">1000 Capcom Lane</small>
                      <br/>
                      <small className="text-muted">2000 Capcom Lane</small>
                  </li>
              </ul>
              <ul className="list-group list-group-flush">
                  <li className="list-group-item">Contact Information:
                      <br/>
                      <small className="text-muted">651-555-5555</small>
                      <br/>
                      <small className="text-muted">craigproperties@gmail.com</small>
                  </li>
              </ul>
              <div className="card-body">
                  <a href="/editprofile" className="card-link">Update Profile</a>
              </div>
          </div>
          <br/>
          <div className="card border-0">
              <div className="card-body">
                  <h5 className="card-title">Add a New Tenant</h5>
                  <p className="card-text">
                      <small>Start the process below and send a new tenant an invitation to join Neighborly.</small>
                  </p>
              </div>
              <div className="card-body">
                  <a href="/" className="card-link">Add a Tenant</a>
              </div>
          </div>

        </Col>

        <Col size="md-9 sm-12">

        <div className="card mt-3 border-danger">
            <div className="card-body">
                <div className="row">
                    <div className="col-md-1">
                        <img src="https://i.imgur.com/brH81MS.png" width="50px" alt="avatar"/>
                    </div>
                    <div className="col-md-11 originalPostAvatar">
                        <h5 className="card-title m-0 p-0">Craig Property Managment Inc.</h5>
                    </div>
                </div>
                <div className="form-group mt-2 mb-1">
                    <textarea className="form-control bg-light" id="exampleFormControlTextarea1" rows="3" placeholder="Post Something"></textarea>
                </div>
                <div className="text-right">
                    <button type="button" className="btn btn-primary mb-3 px-4" style={styles.button}>POST</button>
                </div>
            </div>
        </div>

        <br/>
        <div className="alert alert-secondary" role="alert">
          REMOVE OR EDIT EXISTING POSTS
        </div>

        <div className="card mt-3 border-dark">
          <div className="card-body">
              <div className="row">
                  <div className="col-md-1">
                      <img src="https://i.imgur.com/brH81MS.png" width="50px" alt="avatar"/>
                  </div>
                  <div className="col-md-11 originalPostAvatar">
                      <h5 className="card-title m-0 p-0">Craig Property Managment Inc.</h5>
                      <p className="small">1 day ago</p>
                  </div>
              </div>
              <p className="card-text">***AVOID 5th STREET***
                  <br />5th Street will be closed off until further notice. We expect that the matter will be
                  resolved quickly and as many of you will be affeced, we will remain in contact to further
                  inform you. Please contact us for any other questions. Thank you!
              </p>
              <div className="text-right">
                  <button type="button" className="btn btn-primary mb-3 px-4" style={styles.button}>EDIT</button>
                  <button type="button" className="btn btn-primary mb-3 px-4" style={styles.button}>DELETE</button>
              </div>
          </div>
        </div>

        <div className="card mt-3 border-dark">
          <div className="card-body">
              <div className="row">
                  <div className="col-md-1">
                      <img src="https://i.imgur.com/brH81MS.png" width="50px" alt="avatar"/>
                  </div>
                  <div className="col-md-11 originalPostAvatar">
                      <h5 className="card-title m-0 p-0">Craig Property Managment Inc.</h5>
                      <p className="small">2 days ago</p>
                  </div>
              </div>
              <p className="card-text">Reminder rent is due on August 31st.
              </p>
              <div className="text-right">
                  <button type="button" className="btn btn-primary mb-3 px-4" style={styles.button}>EDIT</button>
                  <button type="button" className="btn btn-primary mb-3 px-4" style={styles.button}>DELETE</button>
              </div>
          </div>
        </div>

        <div className="card mt-3 border-dark">
          <div className="card-body">
              <div className="row">
                  <div className="col-md-1">
                      <img src="https://i.imgur.com/brH81MS.png" width="50px" alt="avatar"/>
                  </div>
                  <div className="col-md-11 originalPostAvatar">
                      <h5 className="card-title m-0 p-0">Craig Property Managment Inc.</h5>
                      <p className="small">5 days ago</p>
                  </div>
              </div>
              <p className="card-text">Join your fellow tenants for a end of summer gathering!<br/>
                Saturday, August 25th<br/>
                4pm-7pm<br/>
                Rooftop Common Area<br/>
                Bring something to share!
              </p>
              <div className="text-right">
                  <button type="button" className="btn btn-primary mb-3 px-4" style={styles.button}>EDIT</button>
                  <button type="button" className="btn btn-primary mb-3 px-4" style={styles.button}>DELETE</button>
              </div>
          </div>
        </div>

        </Col>
      </Row>
    </Container>
    </div>
      );
    }
}
