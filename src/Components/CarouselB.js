import React, { useState } from "react";
import controlLeft from "../Images/carouselB-control-left.png";
import controlRight from "../Images/carouselB-control-right.png";
import controlIcon from "../Images/carouselB-control-icon.png";
import paginationActive from "../Images/pagination-active-black.png";
import paginationDeactivate from "../Images/pagination-deactive-black.png";

const CarouselB = ({ title, data }) => {
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
    <div className="carouselB">
      <div className="carouselB-heading">
        <h1 className="typo-h1">{title}</h1>
      </div>
      <div className="carouselB-contentContainer">
        <div className="carouselB-content">
          <div className="carouselB-content-title">
            <h2>{data[currentSlide].title1}</h2>
            <h2>{data[currentSlide].title2}</h2>
          </div>
          <div className="carouselB-content-body">
            <p className="typo-b3">{data[currentSlide].body}</p>
            <a className="typo-link">Discover More</a>
          </div>
        </div>
        <div className="carouselB-content-controlContainer">
          <div className="carouselB-content-control">
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
      <div className="carouselB-img">
        <img src={data[currentSlide].img} />
      </div>
      <div className="carouselB-paginationContainer">
        <div className="carouselB-pagination">
          {data.map((_, i) => (
            <span key={i}>
              <img
                src={
                  currentSlide === i ? paginationActive : paginationDeactivate
                }
                alt="pagination"
              />
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CarouselB;
