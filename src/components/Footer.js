import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import 'animate.css';
import Button from '@mui/material/Button';
import { deepPurple } from '@mui/material/colors';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: "#8561c5"
    },
  },
});

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
            <ThemeProvider theme={theme}>
            <Button variant="contained" size="large" href="mailto:wrenfrances92@gmail.com">Email Me!</Button>
            </ThemeProvider>
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
