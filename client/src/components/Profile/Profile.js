import React from "react"
import "./Profile.css";

const Profile = props => (

      <div className="card border-0">
      {/*Example Profile!!!
      User needs to be able to upload pictures and information*/}
          <img className="card-img-top" src={props.picture} alt="User Profile Photo" />
          <div className="card-body">
              <h5 className="card-title">{props.name}</h5>
              <p className="card-text">
                  <small>{props.about}</small>
              </p>
          </div>
          <ul className="list-group list-group-flush">
              <li className="list-group-item">Resident Of <br/>
                  <small className="text-muted">{props.address}</small>
              </li>
              <li className="list-group-item">{props.city}<br/>
                  <small className="text-muted">{props.state}|{props.zip}</small>
              </li>
          </ul>
          <div className="card-body">
              <a href="/editprofile" className="card-link">Update Profile</a>
          </div>
      </div>

);

export default Profile;
