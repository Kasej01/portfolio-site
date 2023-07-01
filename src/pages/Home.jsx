import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/Home.css';

function Home() {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [userData, setUserData] = useState({});
  const [repos, setRepos] = useState([]);

  const events = [
    { month: "August", year: 2022, title: 'Started Internship at TVA', description: 'I joined Tennessee Valley Authority as a software engineering intern in early September of 2022 and am still a current employee.' },
    { month: "December", year: 2022, title: 'Graduated from TTTU', description: 'Received my Bachelor\'s degree in computer science from Tennessee Technological University, one semester ahead of schedule.' },
  ];

  const handleEventClick = (event) => {
    setSelectedEvent(event);
  };

  useEffect(() => {
    // Fetch user data from GitHub
    axios.get("https://api.github.com/users/KaseJ01")
      .then(response => {
        setUserData(response.data);
      })
      .catch(error => {
        console.error(error);
      });

    // Fetch repositories from GitHub
    axios.get("https://api.github.com/users/KaseJ01/repos")
      .then(response => {
        setRepos(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <div className="home-page">
      <div className="about-me">
        <img className="portfolio-image" src="src/images/ProfessionalPicture.jpg" alt="Portait of me" />
        <h1 id="name">Kase Johnson</h1>
        <p id="desc">Developer, Student, Dreamer</p>
        <p class="bio">Hello, world! I'm Kase Johnson, an ambitious tech enthusiast, master's degree candidate at Tennessee Technological University, 
        and a proven software engineer as an intern at Tennessee Valley Authority (TVA).
        Take a look around to view my accomplishments, current work, social media pages, and more.</p>
        </div>
      <div className="git-sec">
        <h2 className="git-title">My Latest Github Activity</h2>
        <a id="user-name" href="https://github.com/Kasej01">KaseJ01</a>
        {repos.map((repo, index) => (
          <div key={index}>
            <a>{repo.name}</a>
            <p>{repo.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
