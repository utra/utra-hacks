import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import utra_logo from "./logos/utraLogoWhite.png";

function NavBar() {
    return (
        <Navbar bg = "dark" data-bs-theme="dark" expand="lg" className="bg-body-tertiary fixed-top" style = {{fontFamily: "Copperplate, Fantasy"}}>
            <Container>
                <Navbar.Brand href="#home"><img src= {utra_logo} width = "160" alt = "UTRA Logo"/></Navbar.Brand>  
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#about">About</Nav.Link>  
                        <Nav.Link href="#apply">Apply</Nav.Link>  
                        <Nav.Link href="#faq">FAQs</Nav.Link>
                        <Nav.Link href="#sponsors">Sponsors</Nav.Link>
                        <Nav.Link href="#gallery">Gallery</Nav.Link>
                        <Nav.Link href="#contact">Contact Us</Nav.Link>
                        <Nav.Link href="#resources">Resources</Nav.Link>
                </Nav>
            </Container>
        </Navbar>    
    );
}

export default NavBar;