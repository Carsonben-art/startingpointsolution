import React from 'react';
import './HeroSection.css';

import woman from '../../assets/woman.png'
import heart from '../../assets/heart.png'
const Hero = () => {
  return (
    <section className="hero-container">
      <div className="hero-content">
        <div className="hero-icons">
          
          <div className="tag">Stand Up, Speak Out</div>
          <img src={heart} alt="Flag Icon" className="bulb-icon" />
        </div>
        
        <h1 className="hero-title">
        Empowering Young Mothers{' '}
          <span className="highlight">A New Beginning</span>
          <br />
          for <span className="highlight">Kenya's Teens</span>
        </h1>
        
        <p className="hero-subtitle">
        Starting Point Solution Kenya empowers teenage mothers and their children through psychosocial support, mentorship, life skills, and basic education.
        </p>
        
        <div className="hero-buttons">
          <button className="btn primary">Our Services</button>
          <button className="btn secondary">About Us</button>
        </div>
      </div>
      
      <div className="decorative-elements">
        <img src={woman} alt="" className="left-cloud" />
        {/* <img src={heart} alt="" className="right-cloud" /> */}
      </div>
    </section>
  );
};

export default Hero;