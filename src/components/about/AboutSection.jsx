import React from 'react';
import { useInView } from 'react-intersection-observer';
import './AboutSection.css';

import img1 from '../../assets/img1.JPG';
import img2 from '../../assets/img2.JPG';
import img3 from '../../assets/img3.JPG';
import img4 from '../../assets/img4.JPG';

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

const AboutSection = ({id}) => {
  return (
    <section className="about-section" id={id}>
      <div className="section-header">
        <span className="tag">About Us</span>
        <h2 className="title">
          Empowering Teenage Mothers
          <span className="highlight"> with Support and Opportunities</span>
        </h2>
      </div>

      <div className="grid-container">
        {/* First Row */}
        <Card className="text-card blue-bg parallax">
          <h3>About Us</h3>
          <p>Starting Point Solution is a philanthropic community-based initiative targeting teenage mothers. We provide psychosocial support, mentorship, life skills, and basic education.</p>
        </Card>
        <Card className="image-card bounce">
          <img src={img1} alt="Community engagement" />
        </Card>
        <Card className="text-card yellow-bg parallax">
          <h3>Our Mission</h3>
          <p>We empower teenage mothers in Kenya by providing resources, advocacy, and mentorship to help them overcome challenges and achieve their potential.</p>
        </Card>

        {/* Second Row */}
        <Card className="image-card bounce">
          <img src={img2} alt="Community support" />
        </Card>
        <Card className="text-card center-card parallax">
          <h3>Our Vision</h3>
          <p>A Kenya where every teenage mother is empowered with the support and resources to thrive and contribute to society.</p>
        </Card>
        <Card className="image-card bounce">
          <img src={img3} alt="Community programs" />
        </Card>

        {/* Third Row */}
        <Card className="text-card blue-bg parallax">
          <h3>Our Objectives</h3>
          <p>Empowering teenage mothers through education, skills training, and health awareness, while advocating for their rights.</p>
        </Card>
        <Card className="image-card bounce">
          <img src={img4} alt="Community building" />
        </Card>
        <Card className="text-card yellow-bg parallax">
          <h3>Our Goals</h3>
          <p>By 2030, provide services to 500 teenage mothers, ensuring access to healthcare, education, and vocational training.</p>
        </Card>
      </div>
    </section>
  );
};

export default AboutSection;
