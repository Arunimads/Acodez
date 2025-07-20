import { useState } from "react";
import { Button } from "../ui/button/Button";
import "./Navbar.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <img src="./src/assets/images/logo.png" alt="Logo" />
      </div>

      <div className="hamburger" onClick={toggleMenu}>
        <span className={`bar ${isMenuOpen ? "active" : ""}`}></span>
        <span className={`bar ${isMenuOpen ? "active" : ""}`}></span>
        <span className={`bar ${isMenuOpen ? "active" : ""}`}></span>
      </div>

      <ul className={`nav-links ${isMenuOpen ? "mobile-active" : ""}`}>
        <li>
          <a href="#home" onClick={closeMenu}>
            HOME
          </a>
        </li>
        <li>
          <a href="#sustainability" onClick={closeMenu}>
            SUSTAINABILITY
          </a>
        </li>
        <li>
          <a href="#work" onClick={closeMenu}>
            WORK
          </a>
        </li>
        <li>
          <a href="#services" onClick={closeMenu}>
            SERVICE
          </a>
        </li>
        <li>
          <a href="#blog" onClick={closeMenu}>
            BLOG
          </a>
        </li>
        <li>
          <a href="#about" onClick={closeMenu}>
            ABOUT
          </a>
        </li>
        <li>
          <a href="#contact" onClick={closeMenu}>
            CONTACT
          </a>
        </li>
        <li className="mobile-button">
          <Button name="Talk To Experts" />
        </li>
      </ul>

      <div className="desktop-button">
        <Button name="Talk To Experts" />
      </div>
    </nav>
  );
};

export default Navbar;
