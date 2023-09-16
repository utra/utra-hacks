import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import utra_logo from "./logos/UTRA_logo_square.png";
import RI_logo from "./Home Page Photos/RI.svg"
import toronto_skyline from "./Home Page Photos/torontoSkyline2.png";
import build from "./Home Page Photos/build.png";
import design from "./Home Page Photos/design.png";
import inspire from "./Home Page Photos/inspire.png";
import './Home.css';

function Home() {
  return (
    <div>
      <section className = "bg text text-center pt-5">   
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
      </section>

      <section className='about text text-center pt-5'>
        <h1 className='pt-5'>UTRA's mission</h1>

        <Row className='pt-5 mt-5'>
          <Col>
            <img style={{width: "30%"}} src = {design} alt="design"/>
            <h2 className='pt-4'>Design</h2>
          </Col>

          <Col>
            <img style={{width: "30%"}} src = {build} alt="build"/>
            <h2 className='pt-4'>Build</h2>
          </Col>

          <Col>
            <img style={{width: "30%"}} src = {inspire} alt="inspire"/>
            <h2 className='pt-4'>Inspire</h2>
          </Col>
        </Row>

        <Row>
          <h5 className='pt-5 mt-5 px-5'>Following UTRA’s mission - to foster creativity and innovation, and cultivate science and technology leaders of the future by providing students with the opportunities to design and build advanced robotic technologies. The team started planning for this event with a mindset of “Design, Build, Inspire”. Without limitation on the design scope, we believe this event could bring a variety of brilliant ideas and creative minds together.</h5>
        </Row>
      </section>
    </div> 
  );
}

export default Home;
