import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.jpg'; // Adjust the path as per your directory structure
import '../Navbar/Navbar.css';

function Navbar() {
  return (
    <div className="navbar">
      <div className="container">
        <img src={logo} className="navbar-logo" alt="logo" /> 
        <ul className="navbar-menu">
          <li className="navbar-item">
            <Link to="/" className="navbar-link">Home</Link>
          </li>
          <li className="navbar-item">
            <Link to="/about" className="navbar-link">About</Link>
          </li>
          <li className="navbar-item">
            <Link to="/services" className="navbar-link">Services</Link>
          </li>
          <li className="navbar-item">
            <Link to="/contact" className="navbar-link">Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
