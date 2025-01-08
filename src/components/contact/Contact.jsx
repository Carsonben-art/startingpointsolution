import React from 'react';
import './Contact.css';

import chat from '../../assets/chat.png'
import phone from '../../assets/phone.png'
import location from '../../assets/locator.png'
import ContactForm from './ContactForm';
const Contact = ({id}) => {
  return (
    <section className="contact-section" id={id}>
      <div className="contact-header">
        <button className="contact-button">Contact Us</button>
        <h1 className="title">
          <span className="highlight">Let's Start</span> a
          <br />
          Conversation
        </h1>
      </div>

      <div className="contact-cards">
        <div className="contact-card">
          <div className="card-icon message-icon">
            <img src={chat} alt="chat" />
          </div>
          <h2>Drop Us a Line</h2>
          <p>We're here to listen, support, and collaborate on creating positive change.</p>
          <p className='contact-text'>startingpointsolution@gmail.com</p>
        </div>

        <div className="contact-card">
          <div className="card-icon robot-icon">
          <img src={phone} alt="phone" />

          </div>
          <h2>Give Us a Call</h2>
          <p>Have questions or want to learn more? Give us a call to speak with our team.</p>
          <p className='contact-text'>+ 254795123678 | +254752451435</p>
        </div>

        <div className="contact-card">
          <div className="card-icon cursor-icon">
          <img src={location} alt="location" />
            
          </div>
          <h2>Find Us</h2>
          <p>Visit us to meet in person and discuss how we can work together.</p>
          <p className='contact-text'> Homabay, Kenya</p>
        </div>
      </div>
      <ContactForm />
    </section>
  );
};

export default Contact;