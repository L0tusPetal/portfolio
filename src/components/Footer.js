import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
// import navIcon1 from "../assets/img/discord.svg";
// import navIcon2 from "../assets/img/github.svg";
import 'animate.css';
import Button from '@mui/material/Button';


export const Footer = () => {
  return (
    <div>
      <br/>
      <br/>
      <br/>
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={200} className="text-center text-sm-center">
            <div>
            <Button variant="contained" href="mailto:wrenfrances92@gmail.com">Email Me!</Button>
            <br/>
            <br/>
            </div>
            <p>Made with ❤️ NodeX | MUI | WannaCry</p>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
