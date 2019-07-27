import React from "react";

const Navbar = ({ title, icon }) => {
  return (
    <div>
      <nav className="navbar bg-primary">
        <h1>
          <i className={icon} /> {title}
        </h1>
      </nav>
    </div>
  );
};

export default Navbar;
