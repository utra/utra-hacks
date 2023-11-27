import React, { useState, useEffect } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';
import utra_logo from './logos/UTRA_Logo_V4.1.png';
import mlh_logo from './logos/mlh_logo.svg';
import { Container } from 'react-bootstrap';

function NavBar() {
    const [scrolling, setScrolling] = useState(true);
  
    useEffect(() => {
      let prevScrollY = window.scrollY;
  
      const handleScroll = () => {
        const currentScrollY = window.scrollY;
        setScrolling(prevScrollY > currentScrollY);
        prevScrollY = currentScrollY;
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  
    return (
      <Navbar
        expand="md"
        style={{
          backgroundColor: "rgba(12, 12, 12, 0.6)",
        }}
        variant="dark"
        className={`fixed-top ${scrolling ? 'scrolling' : ''}`}
      >
        <Container>
          <Navbar.Brand href="#home" >
            <img className="d-flex position-relative" src={utra_logo} width="100" alt="UTRA Logo"/>
          </Navbar.Brand>
  
          <Navbar.Toggle aria-controls="responsive-navbar-nav" className="position-relative start-1" />
  
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto" style={{paddingLeft:"10%"}}>
            <Nav.Link href="#home"> Home</Nav.Link>
                <Nav.Link href="#about"> About</Nav.Link>
                <Nav.Link href="#schedule"> Schedule</Nav.Link>
                <Nav.Link href="#apply"> Apply</Nav.Link>
                <Nav.Link href="#faq"> FAQs</Nav.Link>
                <Nav.Link href="#sponsors"> Sponsors</Nav.Link>
                <Nav.Link href="#resources"> Resources</Nav.Link>
                <Nav.Link href="#gallery"> Gallery</Nav.Link>
                {/* <Nav.Link href="#contact"> Contact Us</Nav.Link> */}
                <Nav.Link href="https://forms.gle/2DvSRNtm4UhURNWeA" style={{ color: "white" }}><b>Apply to be a Hacker</b>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
        <Nav className="d-flex position-relative">
              <Navbar.Brand href="#home" className="ml-auto">
                <img
                  src={mlh_logo}
                  height="300"
                  width="150"
                  alt="MLH Logo"
                  className="position-absolute d-flex ms-auto"
                  style={{top: "-90px", right: "0", paddingRight: "100%"}}
                />
              </Navbar.Brand>
        </Nav>
      </Navbar>
    );
  }
  
  export default NavBar;
