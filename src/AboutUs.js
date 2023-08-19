import React from 'react';
import PersonCard from './PersonCard';
import './AboutUs.css'; // Import custom CSS for styling

function AboutUs() {
  return (
    <div>
      <h1 className="about-heading">UTRA's Mission</h1>
      <div className="about-box">
        <p className="about-text">
          To foster creativity and innovation, and cultivate science and technology leaders of the future by providing students with the opportunities to design and build advanced robotic technologies. The team started planning for this event with a mindset of “Design, Build, Inspire”. Without limitation on the design scope, we believe this event could bring a variety of brilliant ideas and creative minds together.
        </p>
      </div>
      <div className="person-cards-container">
        <PersonCard
          name="Person 1"
          photoUrl=""
          linkedinUrl=""
          githubUrl=""
        />
        <PersonCard
          name="Person 2"
          photoUrl=""
          linkedinUrl=""
          githubUrl=""
        />
        <PersonCard
          name="Person 3"
          photoUrl=""
          linkedinUrl=""
          githubUrl=""
        />
      </div>
      <div className="person-cards-container">
        <PersonCard
          name="Person 4"
          photoUrl=""
          linkedinUrl=""
          githubUrl=""
        />
        <PersonCard
          name="Person 5"
          photoUrl=""
          linkedinUrl=""
          githubUrl=""
        />
      </div>
    </div>
  );
}

export default AboutUs;
