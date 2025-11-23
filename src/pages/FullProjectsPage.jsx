import React, { useEffect } from 'react';
import { projects } from '../components/Projects';
import '../styles/components.css';
import '../styles/fullprojects.css';

const FullProjectsPage = () => {
  useEffect(() => {
    console.log('FullProjectsPage mounted, hash=', window.location.hash);
    const scrollToHash = () => {
      const hash = window.location.hash || '';
      if (!hash.startsWith('#fullprojects')) return;
      const parts = hash.split('/');
      const targetId = parts[1];
      if (!targetId) return;
      const el = document.getElementById(targetId);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
          window.scrollBy(0, -80);
        }, 50);
      }
    };

    scrollToHash();
    window.addEventListener('hashchange', scrollToHash);
    return () => window.removeEventListener('hashchange', scrollToHash);
  }, []);

  return (
    <section className="full-projects-page">
      <h1 className="section-title">All Projects</h1>
      <p><a href="#home">← Back to Home</a></p>

      <p style={{ fontSize: 12, color: '#555' }}>Projects loaded: {projects.length}</p>

      <div className="full-projects-list">
        {projects.map((p) => (
          <><article
            key={p.id}
            id={p.id}
            className="full-project-item">
            <h2>{p.title}</h2>
            <p>{p.description}</p>
            <p>
              <a href={p.link} target="_blank" rel="noopener noreferrer">Visit project</a>
            </p>
          </article><div className="sample-img">
            <img src={p.demoImg} alt="" srcset="" /></div></>
        ))}
      </div>
    </section>
  );
};

export default FullProjectsPage;