import React, { useEffect, useState } from 'react';
import ActivityCards from '../components/Cards.jsx'
import axios from 'axios';
import '../styles/Home.css';


function Home() {
  return (
    <div className="home-page">
      <div className="about-me">
        <img className="portfolio-image" src="src/images/ProfessionalPicture.jpg" alt="Portait of me" />
        <h1 id="name">Kase Johnson</h1>
        <p id="desc">Developer, Student, Dreamer</p>
        <p className="bio">Hello, world! I'm Kase Johnson, an ambitious tech enthusiast, master's degree candidate at Tennessee Technological University, 
        and a proven software engineer as an intern at Tennessee Valley Authority (TVA).
        Take a look around to view my accomplishments, current work, social media pages, and more.</p>
      </div>
      <div className="activity-sec">
        <h2 className="activity-title">My Latest Activity</h2>
        <ActivityCards/>
      </div>
    </div>
  );
}

export default Home;
