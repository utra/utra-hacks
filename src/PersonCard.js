import React, { useState } from 'react';
import './PersonCard.css';

import utra_logo from "./logos/UTRA_logo_square.png";

function PersonCard({ name, photoUrl, linkedinUrl, githubUrl }) {
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  return (
    <div className="person-card" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <img src={photoUrl || utra_logo} alt={name} className={`person-photo ${hovered ? 'translucent' : ''}`} />
      <div className={`person-name ${hovered ? 'visible' : ''}`}>
        {name}
      </div>
      <div className="person-icons">
        {linkedinUrl && (
          <a href={linkedinUrl} target="_blank" rel="noopener noreferrer">
            {/* Render your LinkedIn icon here */}
          </a>
        )}
        {githubUrl && (
          <a href={githubUrl} target="_blank" rel="noopener noreferrer">
            {/* Render your GitHub icon here */}
          </a>
        )}
      </div>
    </div>
  );
}

export default PersonCard;
