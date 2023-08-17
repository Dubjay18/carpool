import React, { useState } from 'react';
import "../../bootstrap.min.css"
import { Container, Nav, Navbar as BootstrapNavbar } from 'react-bootstrap';

import "./Nav.css"

const NavBar = () => {
  const [expanded, setExpanded] = useState(false);

  const handleToggle = () => {
    setExpanded(!expanded);
  };

  return (
    <BootstrapNavbar bg="light" expand="md" expanded={expanded}>
      <Container>
        <BootstrapNavbar.Brand href="#home">
          <img src="/Assets/tag.svg" alt="logo" />
        </BootstrapNavbar.Brand>
        <BootstrapNavbar.Toggle aria-controls="navbar" onClick={handleToggle} />
        <BootstrapNavbar.Collapse id="navbar">
          <Nav className="ml-auto">
            <Nav.Link href="home">Home</Nav.Link>
            <Nav.Link href="about">About</Nav.Link>
            <Nav.Link href="services">Services</Nav.Link>
            <Nav.Link href="contact">Contact</Nav.Link>
          </Nav>
        </BootstrapNavbar.Collapse>
      </Container>
    </BootstrapNavbar>
  );


    return (
        <BootstrapNavbar bg="light" expand="md" expanded={expanded}>
          <Container>
            <BootstrapNavbar.Brand href="/">
              <img src="/Assets/tag.svg" alt="Logo" />
            </BootstrapNavbar.Brand>
            <BootstrapNavbar.Toggle aria-controls="navbar" onClick={handleToggle} />
            <BootstrapNavbar.Collapse id="navbar">
              <Nav className="ml-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/about">About Us</Nav.Link>
                <Nav.Link href="/Support">Support</Nav.Link>
                <Nav.Link href="/DriversSignup">Become A driver</Nav.Link>
                <Nav.Link href="/admin-login">Log In</Nav.Link>
                <Nav.Link href="/Signup">Sign Up</Nav.Link>
              </Nav>
            </BootstrapNavbar.Collapse>
          </Container>
        </BootstrapNavbar>
      );

}

export default NavBar