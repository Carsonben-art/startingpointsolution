import React from 'react';
import './VideoSection.css';
import vid from '../../assets/mother.mp4'
const VideoSection = () => {
  return (
    <section className="video-section">
      <div className="video-container">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="background-video"
        >
          <source src={vid} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </section>
  );
};

export default VideoSection;