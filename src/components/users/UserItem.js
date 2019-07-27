import React from "react";

const UserItem = ({ user }) => {
  return (
    <div className="card text-center">
      <img
        src={user.avatar_url}
        className="round-img"
        style={{ width: 60 }}
        alt="userPic"
      />
      <h3>{user.login}</h3>
      <a href={user.html_url} className="btn btn-dark btn-sm my-1">
        More
      </a>
    </div>
  );
};

export default UserItem;