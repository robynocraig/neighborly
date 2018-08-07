import React from "react";
import "./Card.css";

const Card = props => (

  <div className="row">
        <div className="col-md-4 offset-4">
            <div className="card text-center border-0" id="signupLogin">
                <div className="card-body">
                    <img src="https://i.imgur.com/uwqO6OC.png" id="loginLogoIcon" alt="Neighborly"></img>
                    <p id="loginLogoName">Neighborly</p>
                    <button type="button" className="btn btn-primary btn-lg" data-toggle="modal" data-target="">
                      Log In
                    </button>
                    <small id="emailHelp" className="form-text text-muted">Not yet a member? Click here to <a href="newusersignup.html">Sign up</a></small>
                </div>
            </div>
        </div>
    </div>

);

export default Card;
