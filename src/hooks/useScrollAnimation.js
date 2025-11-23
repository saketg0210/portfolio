import { useEffect, useRef, useState } from 'react';

const useScrollAnimation = () => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;

    // Trigger when section enters viewport
    if (rect.top <= windowHeight - 50) {
      setIsVisible(true);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // check on mount in case section is already visible

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return [ref, isVisible];
};

export default useScrollAnimation;
