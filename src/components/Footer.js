import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import navIcon1 from "../assets/img/discord.svg";
import navIcon2 from "../assets/img/github.svg";
import 'animate.css';

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
                <a href="https://www.linkedin.com/in/wrenfrances/" target="_blank" rel="noreferrer"><img src={navIcon1} alt="LinkedIn" /></a>
                <a href="https://github.com/L0tusPetal"target="_blank" rel="noreferrer"><img src={navIcon2} alt="Github" /></a>
                
            </div>
            <div>
            <a href="mailto:wrenfrances92@gmail.com">Email</a>
            </div>
            <p>Made with ❤️ NodeX | WannaCry</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
