// src/components/Contact.jsx
import React from 'react';
import useScrollAnimation from '../hooks/useScrollAnimation.js';
import '../styles/components.css';

const Contact = () => {
  const [ref, isVisible] = useScrollAnimation();

  return (
   <section id="contact" className={`contact ${isVisible ? 'animate-fadeIn' : ''}`} ref={ref}>
      <h2>Contact Me</h2>
      <form>
        <input type="text" placeholder="Your Name" />
        <input type="email" placeholder="Email" />
        <textarea placeholder="Message" />
        <button type="submit">Send</button>
      </form>
    </section>
  );
};

export default Contact;
