import React, { useState } from 'react';
import './Navbar.css';
import logo from '../assets/FV-logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="navbar">
      <img src={logo} alt="Fresh Vaults Logo" className="logo" />

      <div className="hamburger" onClick={toggleMenu}>
        {isOpen ? '✕' : '☰'}
      </div>

      <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
        <li><a href="#home" onClick={closeMenu}>Home</a></li>
        <li><a href="#about" onClick={closeMenu}>About</a></li>
        <li><a href="#products" onClick={closeMenu}>Products</a></li>
        <li><a href="#bulk-orders" onClick={closeMenu}>Bulk Orders</a></li>
        <li><a href="#events-catering" onClick={closeMenu}>Events</a></li>
        <li><a href="#contact" onClick={closeMenu}>Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
