import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.css';
import logo from '../../assets/logo.png'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={`navbar ${hasScrolled ? 'glass' : ''}`}>
      <div className="nav-content">
        <div className="logo">
          <a href="#home">
          <img src={logo} alt="Logo" />
          {/* <span>SPS</span> */}
          </a>
          
        </div>

        {/* Desktop Navigation */}
        <div className={`nav-links ${isOpen ? 'active' : ''}`}>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#impact">Impact</a>
          <a href="#gallery">Gallery</a>
          <a href="#contact" className="contact-btn">Contact Us</a>
        </div>

        {/* Mobile Menu Button */}
        <button className="mobile-menu-btn" onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;