import React from 'react';
import meter3 from "../assets/img/stride.png";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png";
<script async defer src="https://buttons.github.io/buttons.js"></script>

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
                        <a class="github-button" href="https://github.com/L0tusPetal"  target="_blank" data-icon="octicon-star" data-size="large" data-show-count="true">My Github⭐</a>
                        <br></br>
                        <br></br>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                        <div className="item">
                            <a href="https://github.com/THEM-exclamationpoint/Webby" target="_blank">  <img src={meter3} alt="Image" /></a>
                            <a href="https://github.com/THEM-exclamationpoint/Webby" target="_blank">  <h5>Webby</h5></a>
                            A hobby-centric social media application
                        </div>
                        <div className="item">
                            <a href="https://github.com/2206-GHP-HEX-GIRLS/hex-girls-grace-shopper" target="_blank">  <img src={meter3} alt="Image" /></a>
                            <a href="https://github.com/2206-GHP-HEX-GIRLS/hex-girls-grace-shopper" target="_blank">  <h5>Boolean Bakers</h5></a>
                            A bakery-themed e-commerce site
                        </div>
                        <div className="item">
                            <a href="https://github.com/L0tusPetal/solepost" target="_blank">  <img src={meter3} alt="Image" /></a>
                            <a href="https://github.com/L0tusPetal/solepost" target="_blank">  <h5>Solepost - WIP</h5></a>
                            Blogging/news site
                        </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
  
}
