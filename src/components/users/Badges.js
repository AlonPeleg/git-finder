import React from "react";

const Badges = ({ followers, following, public_repos, public_gists }) => {
  return (
    <div className="card text-center">
      <div className="badge badge-primary">Followers: {followers}</div>
      <div className="badge badge-success">Following: {following}</div>
      <div className="badge badge-light">Public Repos: {public_repos}</div>
      <div className="badge badge-dark">Public Gists: {public_gists}</div>
    </div>
  );
};

export default Badges;
