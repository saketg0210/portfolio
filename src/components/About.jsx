import React from 'react';
import useScrollAnimation from '../hooks/useScrollAnimation.js';
import '../styles/components.css';
import profileImg from '../images/profile.jpeg';

function About() {
    const [ref, isVisible] = useScrollAnimation();

    return (
        <section id="about" className={`about ${isVisible ? 'animate-fadeIn' : ''}`} ref={ref}>
            <div className="about-wrapper">

                {/* Image Section */}
                <div className={`about-image ${isVisible ? 'animate-slideInLeft' : ''}`}>
                    <img
                        src={profileImg}
                        alt="About me"
                    />
                </div>

                {/* Text Section */}
                <div className="about-content">
  <h2>About Me</h2>
  <p> 

    Hey, I’m <span>Saket Gupta</span> — a Junior Web Developer from Bangalore with 
    <strong> 1.8+ years of experience</strong> building responsive and user-focused web applications.
  </p>

  <p>
    I work with <strong>JavaScript, React.js, Sitecore, and AWS</strong>, and enjoy creating clean, 
    scalable solutions that perform well and look great.
  </p>

  <p>
    Currently at <strong>Indegene</strong>, I contribute to client-facing projects, collaborate 
    across teams, and help ship features through CI/CD pipelines.
  </p>

  <p>
    Outside work, I love exploring cloud technologies, improving my full-stack skills, and building 
    small projects that challenge me to learn more.
  </p>

  <p className="about-links">
    <a href="https://saketg0210.github.io/resume" target="_blank">Resume</a> · 
    <a href="https://github.com/saketg0210" target="_blank"> GitHub</a> · 
    <a href="https://linkedin.com/in/saket-gupta97" target="_blank"> LinkedIn</a>
  </p>
</div>


            </div>
        </section>
    );
}

export default About;
