import React from 'react';
import astronaut from '../assets/astronaut.png'; // Use a placeholder or user-provided image

const Hero: React.FC = () => {
  return (
    <header className="hero-section">
      <div className="floating-shapes">
        <div className="shape shape-1" />
        <div className="shape shape-2" />
        <div className="shape shape-3" />
      </div>
      {/* Floating tech icons as background */}
      <div className="floating-icons-bg">
        <div className="icon icon-code">{"</>"}</div>
        <div className="icon icon-react">⚛</div>
        <div className="icon icon-js">JS</div>
        <div className="icon icon-css">CSS</div>
      </div>
      <div className="hero-inner">
        <div className="hero-main-content">
          <div className="hero-content">
            <h1 className="hero-title">Hi, I'm Sarthak Acharya!</h1>
            <p className="hero-subtitle">Web Developer & UI/UX Enthusiast<br/>Crafting delightful digital experiences.</p>
            <a href="#about" className="cta-btn">Learn More</a>
          </div>
        </div>
        <div className="hero-robot-illustration">
          {/* 3D Astronaut/Robot Illustration */}
          <img src={astronaut} alt="Futuristic Astronaut" className="hero-astro-img" />
        </div>
      </div>
    </header>
  );
};

export default Hero; 