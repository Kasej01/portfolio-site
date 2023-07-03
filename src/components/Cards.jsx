import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../styles/Cards.css';

const GithubCard = () => {
  const [latestRepo, setLatestRepo] = useState(null);
  const [userData, setUserData] = useState({});

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
        const repos = response.data;

        // Find the repository with the latest update
        const latestRepo = repos.reduce((acc, repo) => {
          if (!acc || new Date(repo.updated_at) > new Date(acc.updated_at)) {
            return repo;
          }
          return acc;
        }, null);

        setLatestRepo(latestRepo);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      {latestRepo && (
        <a href={latestRepo.html_url} className="card">
          <img className="card-img" src="src\images\GitHub-Logo.png" alt="Github Logo"/>
          <h2 className="card-title">{latestRepo.name}</h2>
          <p className="card-desc">{latestRepo.description}</p>
        </a>
      )}
    </div>
  );
};

const ProjectsCard = ({ title, description }) => (
    <Link to="/projects" className="card">
        <h1 className="card-img">?</h1>
        <h2 className="card-title">{title}</h2>
        <p className="card-desc">{description}</p>
    </Link>
);

const ActivityCards = () => (
  <div className="cards-container">
    <GithubCard />
    <ProjectsCard title="View All Projects" />
  </div>
);

export default ActivityCards;
