import React from "react";
import p1 from "../assets/logo.webp";
import { Link } from "react-router-dom";
import "./navbar.css";

const Nav = () => {
  return (
    <div className="navbar">
      <img src={p1} alt="logo" />
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="about">About</Link>
        </li>
        <li>
          <Link to="contact">Contact</Link>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
