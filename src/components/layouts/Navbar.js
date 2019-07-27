import React from "react";

const Navbar = ({ icon }) => {
  return (
    <div>
      <nav className="navbar bg-primary">
        <h1>
          <i className={icon} /> GitFind
        </h1>
      </nav>
    </div>
  );
};

export default Navbar;
