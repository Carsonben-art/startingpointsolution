import React from 'react';
import './ContactForm.css';
import contactImage from '../../assets/child.jpg';

const ContactForm = () => {
  return (
    <div className="contact-section">
      <div className="contact-form">
        <h2>Reach Out to Us</h2>
        <p>
          Send us messages, ask questions, or share your thoughts. We value your input and look
          forward to hearing from you!
        </p>
        <form>
          <label>Full Name</label>
          <input type="text" placeholder="Enter name" />
          
          <label>Email</label>
          <input type="email" placeholder="example  @gmail.com" />
          
          <label>Message</label>
          <textarea placeholder="How can we help you?"></textarea>
          
          <button type="submit">Send a Message</button>
        </form>
      </div>
      <div className="contact-image">
        <img src={contactImage} alt="Contact" />
      </div>
    </div>
  );
};

export default ContactForm;
