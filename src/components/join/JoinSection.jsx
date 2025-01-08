import React from "react";
import "./JoinSection.css";
import child from '../../assets/child.jpg'
import ribbon from '../../assets/ribbon.png'
import counsel from '../../assets/counsel.jpg'
const JoinSection = () => {
  return (
    <section className="donation-section">
      <div className="movement-btn-container">
        <button className="join-btn">Join the Movement</button>
      </div>
      <h1 className="section-heading">
        <span>Stand Up, Speak Out,</span> <br />
        <span className="highlight-text">Need some assistance?</span>
      </h1>
      <a href="tel:+254795123678"><button className="donation-btn">Call us Now</button></a>
      <div className="illustrations">
        <div className="illustration">
          <img src={child} alt="Pencil Icon" />
        </div>
        <div className="illustration">
          <img src={ribbon} alt="Medal Icon" />
        </div>
        <div className="illustration">
          <img src={counsel} alt="Atom Icon" />
        </div>
      </div>
    </section>
  );
};

export default JoinSection;
