import React from 'react';
import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import wrensume from '../assets/wrensume.docx.pdf'
import headerImg from "../assets/img/header-img.svg";
import {
  BrowserRouter as Router
} from "react-router-dom";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

export const NavBar = () => {

  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);


  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  return (
    <Router>
      <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand href="/">
          <img src={headerImg} alt="Header Img"/> 
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>                                      
              <Nav.Link href="#projects" className={activeLink === 'skill' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Projects</Nav.Link>
              <Nav.Link href={wrensume} className={activeLink === 'team' ? 'active navbar-link' : 'navbar-link'} download="wrensume.docx.pdf">Resume</Nav.Link>
            </Nav>
            <span className="navbar-text">
            <div class="vr" color='inherit'></div>
              <div className="social-icon">
                <a
                href={`https://www.linkedin.com/in/wrenfrances/`}
                target="_blank"
                rel="noreferrer"
                >
                  <LinkedInIcon sx={{color: 'white'}} style={{marginRight:'5px'}}/>
                </a>
                <a
                href={`https://github.com/L0tusPetal`} 
                target="_blank" 
                rel="noreferrer"
                >
                  <GitHubIcon sx={{color:'white'}} />
                </a>
                </div> 
                </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  )
}
