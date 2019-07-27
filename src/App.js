import React from "react";
import Navbar from "./components/layouts/Navbar";
import Users from "./components/users/Users";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <Users />
      </div>
    </div>
  );
};

export default App;
