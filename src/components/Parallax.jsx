import React, { useEffect } from 'react';
import '../styles/Parallax.css';

const ParallaxBackground = () => {
  useEffect(() => {
    const handleScroll = () => {
      const parallaxContainer = document.querySelector('.parallax-container');
      const scrollTop = window.pageYOffset;
      const parallaxOffset = scrollTop * 0.4; // Adjust the value to control the parallax effect

      parallaxContainer.style.transform = `translateY(-${parallaxOffset}px)`;
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return <div className="parallax-container" />;
};

export default ParallaxBackground;
