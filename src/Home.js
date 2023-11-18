import { Container } from "react-bootstrap";
import toronto_skyline from "./Home Page Photos/torontoSkyline2.png";
import React, { useEffect, useState } from 'react';

import './Home.css';

function Home() {
  const [imagesVisible, setImagesVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const homeSection = document.getElementById('home');
      const rect = homeSection.getBoundingClientRect();
      const isVisible = rect.top < windowHeight / 2;

      if (isVisible) {
        setImagesVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div id="home" className="section">
      <div class = "sparkles">
      {[11, 15, 23, 15, 19, 21, 11, 17, 14, 21, 26, 22, 12, 15, 26, 12, 28, 18, 13, 27, 24, 20, 29, 10, 30, 16, 25, 29, 12, 11, 20, 18, 23, 29, 15, 16, 22, 24, 12, 25, 30, 19, 27, 13, 17, 14, 28, 10, 21, 26, 19, 30, 22, 11, 15, 24, 18, 23, 27, 14, 13, 25, 20, 16, 21, 29, 17, 12, 28, 10] .map((value, index) => (
        <span key={index} style={{ '--i': value }}></span>
      ))}
      </div>
      <div className="main-title">
        <div className="container">
          <div
            className="container skyline"
            style={{
              backgroundImage: `url(${toronto_skyline})`
            }}
          ></div>

          <Container className="object-fit-sm-contain" style={{ top:"0", zIndex:1 }}>
            <div className="glowing-text">
              <span className="letter letter-u">U</span>
              <span className="letter letter-t">T</span>
              <span className="letter letter-r">R</span>
              <span className="letter letter-a">A</span>
              <span>    </span>
              <span className="letter letter-h">H</span>
              <span className="letter letter-a1">A</span>
              <span className="letter letter-c">C</span>
              <span className="letter letter-k">K</span>
              <span className="letter letter-k">S</span>
            </div>

            <div className="subtitle" style={{ fontSize: "20px", color: "white" }}>
              <b>University of Toronto Robotics Association</b>
            </div>

            <div style={{ paddingTop:"30px", paddingBottom: "100px", textAlign: "center", textShadow: "#3533cd 1px 0 20px, #3533cd 1px 0 20px",   textTransform: "uppercase"}}>
                <h1><b>January 20-21, 2024</b></h1>
            </div>
          </Container>

        </div>
      </div>
    </div>
  );
}

export default Home;
