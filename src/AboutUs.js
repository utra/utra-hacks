import React from 'react';
import './AboutUs.css';
import { Container } from 'react-bootstrap';

function AboutUs() {
  return (
    <Container fluid id="about" className="section">
      <div>
        <h1>About Us</h1>
        <p className="section about">
          At UTRA, we aim to inspire creativity, enable collaboration, and foster skill development. Participants can connect face-to-face, collaborate with global students, and engage with industry leaders and mentors. 
          The event sparks inspiration and opens minds to endless possibilities. Hackers of all experience levels can join workshops, tech talks, and career sessions to learn something new. UTRA Hacks supports participants by 
          providing necessary equipment, so that the sky's the limit!
        </p>
      </div>
    </Container>
  );
}

export default AboutUs;

