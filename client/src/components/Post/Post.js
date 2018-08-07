import React from "react";
import "./Post.css";

const Post = () => (
    <div className="card mt-3 border-danger">
        <div className="card-body">
            {/*  POSTER'S AVATAR */}
            <div className="row">
                <div className="col-md-1">
                    <img src="https://i.imgur.com/brH81MS.png" width="50px" alt="avatar"/>
                </div>
                <div className="col-md-11 originalPostAvatar">
                    <h5 className="card-title m-0 p-0">ReAnimate Property Managment Inc.</h5>
                    <p className="small">5 days ago</p>
                </div>
            </div>
            <p className="card-text">***AVOID 5th STREET***
                <br />5th Street will be closed off until further notice. We expect that the matter will be
                resolved quickly and as many of you will be affeced, we will remain in contact to further
                inform you. Please contact us for any other questions. Thank you
                <a href="" className=""> ...See More</a>
            </p>
            <p className="card-text text-center mt-2">
                <a href="">Like</a>
                <strong>+0</strong>
            </p>
        </div>
        {/* container for user responses */}
        <div className="container">
            {/* NEIGHBOR COMMENT RESPONSE #1 */}
            <div className="card bg-light border-0">
                <div className="card-body">

                    {/* NEIGHBOR'S POST AVATAR */}
                    <div className="row">
                        <div className="col-md-1">
                            <img src="https://i.imgur.com/LiqybQ4.png" width="25px" alt="avatar"/>
                        </div>
                        <div className="col-md-11 neighborAvatar">
                            <p className="card-text">Danika Campbells
                                <small>
                                    <em>5 day ago</em>
                                </small>
                            </p>
                        </div>
                    </div>

                    <p className="card-text small m-0 p-0">What's the reason for this? I use that as a short-cut to work daily :(</p>
                    <p className="card-text small text-center mt-2">
                        <a href="">Like</a>
                        <strong>+19</strong>
                    </p>
                </div>
            </div>
            {/* USER 'CHIME-IN' */}
            <div className="form-group mt-2 mb-1">
                <textarea className="form-control bg-light" id="exampleFormControlTextarea1" rows="3" placeholder="Chime in..."></textarea>
            </div>
            <div className="text-right">
                <button type="button" className="btn btn-primary mb-3 px-4">Post</button>
            </div>
        </div>
    </div>
);

export default Post;
