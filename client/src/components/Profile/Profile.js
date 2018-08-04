import React from "react";
import "./Profile.css";

const Profile = () => (

      <div className="card border-0">
      {/*Example Profile!!!
      User needs to be able to upload pictures and information*/}
          <img className="card-img-top" src="https://i.imgur.com/ovACRPz.jpg" alt="User Profile" />
          <div className="card-body">
              <h5 className="card-title">John Doe</h5>
              <p className="card-text">
                  <small>A longtime resident and former council member of Racoon City.</small>
              </p>
          </div>
          <ul className="list-group list-group-flush">
              <li className="list-group-item">Resident Of <br/>
                  <small className="text-muted">1234 Capcom Lane</small>
              </li>
              <li className="list-group-item">Neighboring<br/>
                  <small className="text-muted">1998 people</small>
              </li>
          </ul>
          <div className="card-body">
              <a href="/editprofile" className="card-link">Update Profile</a>
          </div>
      </div>

);

export default Profile;
