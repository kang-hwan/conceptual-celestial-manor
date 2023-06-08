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
            <h3>Celestial Suite - Living</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="carouselImageContainer">
          <img
            className="carouselImg d-block w-100"
            src={Image2}
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Celestial Deluxe - Lounge</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="carouselImageContainer">
          <img
            className="carouselImg d-block w-100"
            src={Image3}
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Breakfast</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="carouselImageContainer">
          <img
            className="carouselImg d-block w-100"
            src={Image4}
            alt="Fourth slide"
          />
          <Carousel.Caption>
            <h3>Celestial Suite - Bath</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="carouselImageContainer">
          <img
            className="carouselImg d-block w-100"
            src={Image5}
            alt="Fifth slide"
          />
          <Carousel.Caption>
            <h3>Celestial Suite - Bedroom</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
