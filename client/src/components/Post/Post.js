import React from "react";
import "./Post.css";

const Post = () => (
    <div class="card mt-3 border-danger">
        <div class="card-body">
            {/*  POSTER'S AVATAR */}
            <div class="row">
                <div class="col-md-1">
                    <img src="https://i.imgur.com/brH81MS.png" width="50px" />
                </div>
                <div class="col-md-11 originalPostAvatar">
                    <h5 class="card-title m-0 p-0">ReAnimate Property Managment Inc.</h5>
                    <p class="small">5 days ago</p>
                </div>
            </div>
            <p class="card-text">***AVOID 5th STREET***
                <br />5th Street will be closed off until further notice. We expect that the matter will be
                resolved quickly and as many of you will be affeced, we will remain in contact to further
                inform you. Please contact us for any other questions. Thank you
                <a href="#" class=""> ...See More</a>
            </p>
            <p class="card-text text-center mt-2">
                <a href="#">Like</a>
                <strong>+0</strong>
            </p>
        </div>
        {/* container for user responses */}
        <div class="container">
            {/* NEIGHBOR COMMENT RESPONSE #1 */}
            <div class="card bg-light border-0">
                <div class="card-body">

                    {/* NEIGHBOR'S POST AVATAR */}
                    <div class="row">
                        <div class="col-md-1">
                            <img src="https://i.imgur.com/LiqybQ4.png" width="25px" />
                        </div>
                        <div class="col-md-11 neighborAvatar">
                            <p class="card-text">Danika Campbells
                                <small>
                                    <em>5 day ago</em>
                                </small>
                            </p>
                        </div>
                    </div>

                    <p class="card-text small m-0 p-0">What's the reason for this? I use that as a short-cut to work daily :(</p>
                    <p class="card-text small text-center mt-2">
                        <a href="#">Like</a>
                        <strong>+19</strong>
                    </p>
                </div>
            </div>
            {/* USER 'CHIME-IN' */}
            <div class="form-group mt-2 mb-1">
                <textarea class="form-control bg-light" id="exampleFormControlTextarea1" rows="3" placeholder="Chime in..."></textarea>
            </div>
            <div class="text-right">
                <button type="button" class="btn btn-primary mb-3 px-4">Post</button>
            </div>
        </div>
    </div>
);

export default Post;
