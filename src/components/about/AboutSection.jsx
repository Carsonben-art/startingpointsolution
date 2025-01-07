import React from 'react';
import { useInView } from 'react-intersection-observer';

import './AboutSection.css';


import img1 from '../../assets/img1.JPG'
import img2 from '../../assets/img2.JPG'
import img3 from '../../assets/img3.JPG'
import img4 from '../../assets/img4.JPG'

const Card = ({ children, className }) => {
    const { ref, inView } = useInView({
      threshold: 0.2,
      triggerOnce: false
    });
  
    return (
      <div ref={ref} className={`card ${className} ${inView ? 'in-view' : ''}`}>
        {children}
      </div>
    );
  };

const AboutSection = () => {
  return (
    <section className="about-section">
      <div className="section-header">
        <span className="tag">About Us</span>
        <h2 className="title">
        Empowering Teenage Mothers
          <span className="highlight"> with Support and Opportunities</span>
        </h2>
      </div>

      <div className="grid-container">
        {/* First Row */}
        <Card className="text-card blue-bg">
          <h3>About Us</h3>
          <p>Starting Point Solution is a philanthropic community based initiative. We target teenage mothers to help them cope with the reality of being a parent at a young age. The initiative provides psychosocial support, life skills, mentorship and basic education for the teenage mother and child in Kenya.</p>
        </Card>
        <Card className="image-card">
          <img src={img1} alt="Community engagement" />
        </Card>
        <Card className="text-card yellow-bg">
          <h3>Our Mission</h3>
          <p>To provide support, resources and advocacy for teenage mothers in Kenya, empowering them to overcome challenges and achieve their full potential.</p>
        </Card>

        {/* Second Row */}
        <Card className="image-card">
          <img src={img2} alt="Community support" />
        </Card>
        <Card className="text-card center-card">
          <h3>Our Vision</h3>
          <p>A Kenya where every teenage mother is empowered with the support, resources and advocacy needed to thrive, realizing her full potential and contributing to her community and beyond.</p>
        </Card>
        <Card className="image-card">
          <img src={img3} alt="Community programs" />
        </Card>

        {/* Third Row */}
        <Card className="text-card blue-bg">
          <h3>Our Objectives</h3>
          <p>To empower teenage mothers through education, mentorship, and skills training while advocating for their rights, promoting reproductive health, and fostering partnerships to address their needs effectively.</p>
        </Card>
        <Card className="image-card">
          <img src={img4} alt="Community building" />
        </Card>
        <Card className="text-card yellow-bg">
          <h3>Our Goals</h3>
          <p>By 2030, provide comprehensive support services to at least 500 teenage mothers across Kenya, ensuring they have access to education, healthcare, childcare, and vocational training, thereby empowering them to break the cycle of poverty and build a brighter future for themselves and their children.</p>
        </Card>
      </div>
    </section>
  );
};

export default AboutSection;