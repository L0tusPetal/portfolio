import React from 'react';
import meter3 from "../assets/img/stride.png";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png";
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import spidder from "src/assets/img/spidder.svg"


<script async defer src="https://buttons.github.io/buttons.js"></script>

const ColorButton = styled(Button)(() => ({
  color: 'white',
  backgroundColor: '#8561c5',
  '&:hover': {
    backgroundColor: '#b5a0dc',
    color:'white'
  },
}));


export const Projects = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="projects" id="projects">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2> Here are some of my projects!✨</h2>
                        <p></p>
                        <ColorButton href="https://github.com/L0tusPetal"  target="_blank" rel="noreferrer" data-icon="octicon-star" data-size="large" data-show-count="true">My Github</ColorButton>
                        <br></br>
                        <br></br>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                        <div className="item">
                            <a href="https://github.com/THEM-exclamationpoint/Webby" target="_blank" rel="noreferrer">  <img src={spidder} alt=""/></a>
                            <br />
                            <h5>Webby</h5> 
                            A hobby-centric social media application
                            <br />
                            <a href="https://github.com/THEM-exclamationpoint/Webby" target="_blank" rel="noreferrer" class="projectLink">Github</a>
                            <br />
                            <a href="https://webby-social.netlify.app/" target="_blank" rel="noreferrer" class="projectLink">Live Site</a>
                        </div>
                        <div className="item">
                            <a href="https://github.com/2206-GHP-HEX-GIRLS/hex-girls-grace-shopper" target="_blank" rel="noreferrer">  <img src={meter3} alt=""/></a>
                            <h5>Boolean Bakers</h5>
                            A bakery-themed e-commerce site
                            <br />
                            <a href="https://github.com/2206-GHP-HEX-GIRLS/hex-girls-grace-shopper" target="_blank"rel="noreferrer" class="projectLink">Github</a>
                        </div>
                        <div className="item">
                            <a href="https://github.com/THEMELLIPSIS2/solepostx-front" target="_blank" rel="noreferrer">  <img src={meter3} alt="" /></a>
                            <br />
                            <h5>Solepost Frontend</h5>
                            Blogging/news frontend web application
                            <br />
                            <a href="https://github.com/THEMELLIPSIS2/solepostx-front" target="_blank" rel="noreferrer" class="projectLink">Github</a>
                        </div>
                        <div className="item">
                            <a href="https://github.com/THEMELLIPSIS2/solepostx-back" target="_blank" rel="noreferrer">  <img src={meter3} alt="" /></a>
                            <h5>Solepost Backend</h5>
                            Blogging/news site database
                            <br />
                            <a href="https://github.com/THEMELLIPSIS2/solepostx-back" target="_blank" rel="noreferrer" class="projectLink"> Github</a> 
                        </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="" />
    </section>
   
  )
  
}
