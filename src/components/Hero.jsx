// src/components/Hero.jsx
import React from 'react';
import useScrollAnimation from '../hooks/useScrollAnimation.js';
import '../styles/components.css';
import bg1 from '../images/bg1.avif';

const Hero = () => {
  const [ref, isVisible] = useScrollAnimation();

  return (
    <section
      id="home"
      className={`hero ${isVisible ? 'animate-fadeIn' : ''}`}
      ref={ref}
    >
      {/* animated background layer */}
      <div
        className={`hero-bg ${isVisible ? 'bg-pop' : ''}`}
        style={{ backgroundImage: `url(${bg1})` }}
      />

      <div className="hero-content">
  <h1 className="hero-title">Welcome to My Portfolio</h1>
  <p className="hero-description">
    I’m a Junior Web Developer with 1.8+ years of experience in React, JavaScript, and AWS—building fast, scalable, and user-focused web solutions.
  </p>
  <a href="#project" className="hero-button">
    View My Work
  </a>
</div>

    </section>
  );
};

export default Hero;
