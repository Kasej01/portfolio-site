import React from 'react';
import '../styles/Home.css'; // your custom CSS file

function Home() {
  const [selectedEvent, setSelectedEvent] = React.useState(null);

  const events = [
    { month: "August", year: 2022, title: 'Started Internship at TVA', description: 'I joined Tennessee Valley Authority as a software engineering intern in early September of 2022 and am still a current employee.' },
    { month: "December", year: 2022, title: 'Graduated from TTTU', description: 'Received my Bachelor\'s degree in computer science from Tennessee Technological University, one semester ahead of schedule.' },
    // Add more events here...
  ];

  const handleEventClick = (event) => {
    setSelectedEvent(event);
  };

  return (
    <div className="home-page">
      <div className="about-me">
        <img className="portfolio-image" src="src/images/ProfessionalPicture.jpg" alt="Portait of me" />
        <h2>About Me</h2>
        <p>Your about me text goes here.</p>
      </div>
    </div>
  );
}

export default Home;
