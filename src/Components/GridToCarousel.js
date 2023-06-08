import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";

import Image1 from "../Images/s3a-img1.png";
import Image2 from "../Images/s3a-img2.png";
import Image3 from "../Images/s3a-img3.png";
import Image4 from "../Images/s3a-img4.png";
import Image5 from "../Images/s3a-img5.png";

export default function GridToCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="carousel">
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item className="carouselImageContainer">
          <img
            className="carouselImg d-block w-100"
            src={Image1}
            alt="First slide"
          />
          <Carousel.Caption>
            <div className="carouselCaptionContainer">
              <h3 className="carouselCaption">Celestial Suite - Living</h3>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="carouselImageContainer">
          <img
            className="carouselImg d-block w-100"
            src={Image2}
            alt="Second slide"
          />
          <Carousel.Caption>
            <div className="carouselCaptionContainer">
              <h3 className="carouselCaption">Celestial Deluxe - Lounge</h3>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="carouselImageContainer">
          <img
            className="carouselImg d-block w-100"
            src={Image3}
            alt="Third slide"
          />
          <Carousel.Caption>
            <div className="carouselCaptionContainer">
              <h3 className="carouselCaption">Breakfast</h3>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="carouselImageContainer">
          <img
            className="carouselImg d-block w-100"
            src={Image4}
            alt="Fourth slide"
          />
          <Carousel.Caption>
            <div className="carouselCaptionContainer">
              <h3 className="carouselCaption">Celestial Suite - Bath</h3>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="carouselImageContainer">
          <img
            className="carouselImg d-block w-100"
            src={Image5}
            alt="Fifth slide"
          />
          <Carousel.Caption>
            <div className="carouselCaptionContainer">
              <h3 className="carouselCaption">Celestial Suite - Bedroom</h3>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
