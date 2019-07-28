import React from "react";

const PersonalImg = ({ avatar_url, name, location }) => {
  return (
    <div className="all-center">
      <img
        src={avatar_url}
        alt=""
        className="round-img"
        style={{ width: 150 }}
      />
      <h1>{name}</h1>
      <p>location: {location}</p>
    </div>
  );
};

export default PersonalImg;
