import React, { useEffect, useState } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import MainLayout from './layouts/MainLayout';
import FullProjectsPage from './pages/FullProjectsPage';
import './index.css';

const App = () => {
  const [showFullProjects, setShowFullProjects] = useState(() =>
    typeof window !== 'undefined' && window.location.hash.startsWith('#fullprojects')
  );

  useEffect(() => {
    const onHashChange = () => {
      setShowFullProjects(window.location.hash.startsWith('#fullprojects'));
    };
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  return (
    <MainLayout>
      {showFullProjects ? (
        <FullProjectsPage />
      ) : (
        <>
          <Hero />
          <About />
          <Projects />
          <Contact />
        </>
      )}
    </MainLayout>
  );
};

export default App;
