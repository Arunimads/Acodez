// src/components/Navbar.jsx
import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src='./src/assets/images/logo.png'/>
      </div>
      <ul className="nav-links">
        <li>HOME</li>
        <li>SUSTAINABILITY</li>
        <li>WORK</li>
        <li>SERVICE</li>
        <li>BLOG</li>
        <li>ABOUT</li>
        <li>CONTACT</li>
      </ul>
      <button className="cta-button">Talk To Experts</button>
    </nav>
  );
};

export default Navbar;
