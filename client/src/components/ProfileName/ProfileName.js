import React from "react";
import "./ProfileName.css";

const ProfileName = props => (

    <div className="card border-0">

    <img className="card-img-top" src={props.picture} alt="User Profile" />
    <div className="card-body">
        <h5 className="card-title">{props.profileName}</h5>
    </div>
    <ul className="list-group list-group-flush">
        <li className="list-group-item">Resident Of <br />
            <small className="text-muted">{props.residency}</small>
        </li>
    </ul>
    <div className="card-body">
        <a href="/editprofile" className="card-link">Update Profile</a>
    </div>
</div>

);

export default ProfileName;
