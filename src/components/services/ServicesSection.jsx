import React from 'react';
import './ServicesSection.css';

import education from '../../assets/education.png'
import counseling from '../../assets/counseling.png'
import parenting from '../../assets/parenting.png'
import healthcare from '../../assets/healthcare.png'
import training from '../../assets/training.png'
import charity from '../../assets/charity.png'
const ServicesSection = () => {
  const services = [
    {
      title: "Provide Educational Support",
      description: "We offer scholarships, tutoring, and resources to help teenage mothers continue their education.",
      pattern: "dots",
      color: "#E8F1FF",
      image: education,  
    },
    {
      title: "Offer Counseling Services",
      description: "We provide mental health support, including counseling for trauma, depression, and anxiety.",
      pattern: "dots",
      color: "#fff0f9",
      image: counseling,  
    },
    {
      title: "Run Parenting Workshops",
      description: "We conduct sessions on parenting skills, child development, and healthcare.",
      pattern: "dots",
      color: "#E8F1FF",
      image: parenting,  
    },
    {
      title: "Ensure Access to Healthcare",
      description: "We facilitate access to medical care for both mothers and their children, including prenatal and postnatal care.",
      pattern: "dots",
      color: "#ff9ade",
      image: healthcare,  
    },
    {
      title: "Facilitate Vocational Training",
      description: "We offer skills training and job placement assistance to help teenage mothers become financially independent.",
      pattern: "dots",
      color: "#E8F1FF",
      image: training,  
    },
    {
      title: "Distribute Basic Necessities",
      description: "We supply essential items like food, clothing, diapers, and sanitary products.",
      pattern: "dots",
      color: "#778bff",
      image: charity,  
    },
    
  ];

  return (
    <section className="services-section">
        <span className="tag">Our Services</span>
      <h2>Here's How Together We</h2>
      <h1>Make a Difference</h1>
      
      <div className="services-grid">
        {services.map((service, index) => (
          <div 
            className="service-card"
            key={index}
            style={{
              backgroundColor: service.color,
            }}
          >
            <div className={`pattern-overlay ${service.pattern}`}></div>
            <div className="card-content">
              <div className="text-content">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
              <div className="image-container">
                <img src={service.image} alt={service.title} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;