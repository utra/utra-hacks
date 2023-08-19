import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import utra_logo from "./logos/UTRA_logo_square.png";
import RI_logo from "./Home Page Photos/RI.svg"
import toronto_skyline from "./Home Page Photos/torontoSkyline2.png";
import './Home.css';

function Home() {
  return (
    <div className = "bg text text-center pt-5">   
      <h1 className="pb-4">Welcome to UTRA Hacks!</h1>
      <img className = "pt-3 pb-5" src= {toronto_skyline} alt = "Toronto Syline"/>
      <h2 className="pt-3">UTRAHacks 2023</h2>
      <h5>November 4-5, 2023</h5>
      <h5 className="pt-3">For sponsorship information, contact <a href="mailto:sponsorhacks@utra.ca" className='text'>sponsorhacks@utra.ca</a></h5>
      <h5>Presented By:</h5>
      <div>
        <img style={{width: "5%"}} src= {utra_logo} alt = "UTRA"/>
        <img style={{width: "25%"}} src= {RI_logo} alt = "University of Toronto & Robotics Institute"/>
      </div>

    </div> 
  );
}

export default Home;
