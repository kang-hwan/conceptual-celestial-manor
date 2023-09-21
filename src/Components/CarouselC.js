import React, { useState } from "react";

import controlLeft from "../Images/carouselB-control-left.png";
import controlRight from "../Images/carouselB-control-right.png";
import controlIcon from "../Images/carouselB-control-icon.png";

const CarouselC = ({ title, data }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideNext = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % data.length);
  };
  const slidePrev = () => {
    setCurrentSlide((prevSlide) => {
      if (prevSlide === 0) {
        return data.length - 1;
      }
      return prevSlide - 1;
    });
  };

  return (
    <div className="carouselC">
      <div className="carouselC-img">
        <img src={data[currentSlide].img} alt="carouselC" />
      </div>
      <div className="carouselC-content">
        <div className="carouselC-body">
          <h1 className="typo-h1">{title}</h1>
          <p className="typo-subheading">{data[currentSlide].title}</p>
          <p className="typo-b3">{data[currentSlide].body}</p>
          <a className="typo-link" href="/">
            Learn More
          </a>
        </div>
        <div className="carouselC-control">
          <span onClick={slidePrev}>
            <img src={controlLeft} alt="carousel-control-left" />
          </span>
          <span className="carouselB-content-control-icon">
            <img src={controlIcon} alt="carousel-control-icon" />
          </span>
          <span onClick={slideNext}>
            <img src={controlRight} alt="carousel-control-right" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default CarouselC;
