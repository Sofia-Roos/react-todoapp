import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="container">
      <h1>Welcome to the ToDo company</h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About us</Link>
        </li>
        <li>
          <Link to="/todolist">To-Do-List</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
