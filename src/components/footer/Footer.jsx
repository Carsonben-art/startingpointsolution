import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';
import './Footer.css';
import logo from '../../assets/logo.png'
const Footer = () => {
  const navigationLinks = [
    { title: 'About', href: '#about' },
    { title: 'Services', href: '#services' },
    { title: 'Impact', href: '#impact' },
    { title: 'Contact Us', href: '#contact' }
  ];

  const socialLinks = [
    { icon: <FaFacebook />, href: 'https://www.facebook.com/profile.php?id=100094086099194&mibextid=ZbWKwL' },
    { icon: <FaTwitter />, href: 'https://x.com/point_star80957' },
    { icon: <FaLinkedin />, href: 'https://ke.linkedin.com/in/starting-point-solution-foundation-993373293' },
    { icon: <FaInstagram />, href: 'https://www.instagram.com/startingpointsolutionfounda' },
  ];

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <img src={logo} alt="Logo" />
        </div>
        
        <nav className="footer-navigation">
          {navigationLinks.map((link, index) => (
            <a key={index} href={link.href} className="nav-link">
              {link.title}
            </a>
          ))}
        </nav>

        <div className="social-links">
          {socialLinks.map((social, index) => (
            <a 
              key={index} 
              href={social.href}
              className="social-icon"
              target="_blank"
              rel="noopener noreferrer"
            >
              {social.icon}
            </a>
          ))}
        </div>

        <div className="footer-bottom">
          <p>© 2024, All Rights Reserved</p>
          <a href="/licenses" className="licenses-link">Licenses</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;