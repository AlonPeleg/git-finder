import React, { Fragment } from "react";

const Bio = ({ bio, html_url }) => {
  return (
    <div>
      {bio && (
        <Fragment>
          <h3>Bio</h3>
          <p>{bio}</p>
        </Fragment>
      )}
      <a href={html_url} className="btn btn-dark my-1">
        Visit Github Profile
      </a>
    </div>
  );
};

export default Bio;
