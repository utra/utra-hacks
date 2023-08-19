import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {LinkContainer} from 'react-router-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import utra_logo from "./logos/utraLogoWhite.png";

function NavBar() {
    return (
        <Navbar bg = "dark" data-bs-theme="dark" expand="lg" className="bg-body-tertiary" style = {{fontFamily: "Copperplate, Fantasy"}}>
            <Container>
                <LinkContainer to = "/">
                    <Navbar.Brand><img src= {utra_logo} width = "160" alt = "UTRA Logo"/></Navbar.Brand>  
                </LinkContainer>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <LinkContainer to = "/">
                            <Nav.Link>Home</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to = "/AboutUs">
                            <Nav.Link>Meet the Team</Nav.Link>  
                        </LinkContainer>
                        <LinkContainer to = "/PhotoGallery">
                            <Nav.Link>Photo Gallery</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to = "/ContactUs">
                            <Nav.Link>Contact Us</Nav.Link>
                        </LinkContainer>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>    
    );
}

export default NavBar;