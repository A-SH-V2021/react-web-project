import React from "react";
import { Link } from "react-router-dom";
import logo from "../logo.png";
import './Navbar.scss'
const Navbar = () => {
  return (
    <nav className="navbar">
      <img src={logo} alt="" />
      <ul className="nav-links">
        <li>
          <Link to="/" className="nav-link">
            home
          </Link>
        </li>
        <li>
          <Link to='/about' className="nav-link">
            about
          </Link>
        </li>
        <li>
          <Link to='tours' className="nav-link active" >
            tours
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
