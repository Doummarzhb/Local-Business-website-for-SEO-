import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Home, Business, Info, Mail, Place } from "@mui/icons-material"; 
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="header">
      <Link to="/" className="logo">
        HamsterPOS
      </Link>

      <div className="hamburger" onClick={toggleNavbar}>
        <div className={isOpen ? "line open" : "line"}></div>
        <div className={isOpen ? "line open" : "line"}></div>
        <div className={isOpen ? "line open" : "line"}></div>
      </div>

      <nav className={`navbar ${isOpen ? "active" : ""}`}>
        <Link to="/" className="nav-item">
          <Home fontSize="small" /> Home
        </Link>
        <Link to="/service" className="nav-item">
          <Business fontSize="small" /> Service
        </Link>
        <Link to="/about" className="nav-item">
          <Info fontSize="small" /> About Us
        </Link>
        <Link to="/contact" className="nav-item">
          <Mail fontSize="small" /> Contact
        </Link>
        <Link to="/location" className="nav-item"> 
          <Place fontSize="small" /> Location
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;
