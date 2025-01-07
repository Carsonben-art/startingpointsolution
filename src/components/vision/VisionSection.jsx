import React from 'react';
import './VisionSection.css';
import vid from '../../assets/advert.mp4'
const VisionSection = () => {
  return (
    <section className="vision-section">
      <div className="vision-container">
        <div className="vision-content">
          <div className="vision-tag">
            <span className="icon">🎯</span>
            Goals
          </div>
          
          <h1 className="vision-title">
            Charting Our Course.
            <span className="vision-subtitle">Vision for the Future</span>
          </h1>
          
          <p className="vision-description">
            As we journey forward, our organization is committed to
            realizing ambitious yet achievable goals that will propel us
            toward a brighter future. Our vision encompasses
            innovative initiatives, expanded outreach, and impactful
            collaborations aimed at addressing systemic injustices and
            advancing human rights.
          </p>
          
          <button className="contact-button">Contact Us</button>
        </div>

        <div className="vision-media">
          <video 
            className="vision-video" 
            autoPlay 
            muted 
            loop 
            playsInline
          >
            <source src={vid} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </section>
  );
};

export default VisionSection;