import React, { useState, useEffect } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';
import utra_logo from './logos/utraLogoWhite.png';

function NavBar() {

    // Scrolling effect: When scrolled down the Nav. bar will show;
    // if scrolled up the Nav. bar disappears
    const [scrolling, setScrolling] = useState(false);

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
            style={{
                backgroundColor: "black",
                transform: scrolling ? 'translateY(0)' : 'translateY(-100%)', // Change the transformation to hide navbar when scrolling up
                transition: 'transform 0.3s ease-in-out',
            }}
            variant="dark"
            className="fixed-top"
        >
            <Navbar.Brand href="#home"><img src={utra_logo} width="160" alt="UTRA Logo" /></Navbar.Brand>
            <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#about">About</Nav.Link>
                <Nav.Link href="#schedule">Schedule</Nav.Link>
                <Nav.Link href="#apply">Apply</Nav.Link>
                <Nav.Link href="#faq">FAQs</Nav.Link>
                <Nav.Link href="#sponsors">Sponsors</Nav.Link>
                <Nav.Link href="#gallery">Gallery</Nav.Link>
                <Nav.Link href="#resources">Resources</Nav.Link>
                <Nav.Link href="#contact">Contact Us</Nav.Link>
                <Nav.Link href="https://forms.gle/2DvSRNtm4UhURNWeA">APPLY TO BE A HACKER</Nav.Link>
            </Nav>
        </Navbar>
    );
}

export default NavBar;
