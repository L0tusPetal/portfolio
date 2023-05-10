import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import 'animate.css';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

const ColorButton = styled(Button)(() => ({
  color: 'white',
  backgroundColor: '#8561c5',
  '&:hover': {
    backgroundColor: '#b5a0dc',
    color:'white'
  },
}));

export const Footer = () => {
  return (
    // vv this was a footer element in place of a div when the footer was very far to the bottom. vv
    <div> 
      <br/>
      <br/>
      <br/>
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={200} className="text-center text-sm-center">
            <div>
            <ColorButton variant="contained" size="large" href="mailto:wrenfrances92@gmail.com" sx={{textDecoration: 'none'}}>Email Me!</ColorButton>
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
