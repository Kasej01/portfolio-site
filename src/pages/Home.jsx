import React, { useEffect, useRef } from 'react';
import ActivityCards from '../components/Cards.jsx'
import axios from 'axios';
import '../styles/Home.css';


function Home() {
  const refs = [useRef(null), useRef(null), useRef(null), useRef(null), useRef(null)];

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('swipe-in-from-left');
        }
      });
    }, {
      rootMargin: '-100px 0px',
    });

    refs.forEach((ref, i) => {
      if (ref.current) {
        // Add a delay to the animation of each element based on its index
        ref.current.style.setProperty('--delay', `${i * 0.1}s`);
        observer.observe(ref.current);
      }
    });

    return () => {
      refs.forEach(ref => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      });
    };
  }, []);

  return (
    <div className="home-page">
      <div className="about-me">
        <img className="portfolio-image" src="src/images/ProfessionalPicture.jpg" alt="Portait of me" ref={refs[0]} />
        <h1 id="name" ref={refs[1]}>Kase Johnson</h1>
        <p id="desc" ref={refs[2]}>Developer, Student, Dreamer</p>
        <p className="bio" ref={refs[3]}>Hello, world! I'm Kase Johnson, an ambitious tech enthusiast, master's degree candidate at Tennessee Technological University, 
        and a proven software engineer as an intern at Tennessee Valley Authority (TVA).
        Take a look around to view my accomplishments, current work, social media pages, and more.</p>
      </div>
      <div className="activity-sec" ref={refs[4]}>
        <h2 className="activity-title">My Latest Activity</h2>
        <ActivityCards/>
      </div>
    </div>
  );
}

export default Home;
