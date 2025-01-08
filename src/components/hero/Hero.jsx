import React, { useEffect, useState } from 'react';
import './HeroSection.css';

import woman from '../../assets/woman.png';
import heart from '../../assets/heart.png';

const Hero = ({id}) => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  return (
    <section id={id} className={`hero-container ${animate ? 'fade-in' : ''}`}>
      <div className="hero-content">
        <div className="hero-icons">
          <div className="tag slide-up">Stand Up, Speak Out</div>
          <img src={heart} alt="Flag Icon" className="bulb-icon float" />
        </div>
        
        <h1 className={`hero-title ${animate ? 'slide-in' : ''}`}>
          Empowering Young Mothers{' '}
          <span className="highlight">A New Beginning</span>
          <br />
          for <span className="highlight">Kenya's Teens</span>
        </h1>
        
        <p className="hero-subtitle">
          Starting Point Solution Kenya empowers teenage mothers and their children through psychosocial support, mentorship, life skills, and basic education.
        </p>
        
        <div className="hero-buttons">
         <a href="#services"><button className="btn primary">Our Services</button></a> 
          <a href="#about"><button className="btn secondary">About Us</button></a>
        </div>
      </div>
      
      <div className="decorative-elements">
        <img src={woman} alt="" className="left-cloud float" />
      </div>
    </section>
  );
};

export default Hero;
