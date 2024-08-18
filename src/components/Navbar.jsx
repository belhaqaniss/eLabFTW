import React from 'react';
import './Navbar.css';
import logo from '../assets/logo-header.svg'; // Import the SVG file

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="eLabftw Logo" />
      </div>
      <div className="nav-links">
        <a href="#">Home</a>
        <a href="#">Features</a>
        <a href="#">Screenshots</a>
        <a href="#">Documentation</a>
        <a href="#">Contact</a>
      </div>
    </nav>
  );
}

export default Navbar;
