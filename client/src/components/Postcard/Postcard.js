import React from "react";

export const Postcard = ({ title, comments }) => {
    return (
    <li className="list-group-item">
        <div className="card bg-light border-0">
            <div className="card-header">
                {title}
            </div>
            <div className="card-body">
                {comments}
            </div>
        </div>
    </li>
    );
};