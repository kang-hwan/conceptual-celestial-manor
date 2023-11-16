import React from "react";
import { register } from "swiper/element/bundle";

register();

const CardSlider = ({ title, data }) => {
  return (
    <div className="cardSlider-container">
      <h1 className="typo-h1">{title}</h1>
      <swiper-container slides-per-view="3.5" scrollbar-hide="true">
        {data.map((item) => (
          <swiper-slide>
            <div className="card-item">
              <img src={item.img} alt="event sample" />
              <h4 className="typo-h4">{item.title}</h4>
              <p className="typo-b3">{item.description}</p>
              <a className="typo-link" href="/">
                Discover More
              </a>
            </div>
          </swiper-slide>
        ))}
      </swiper-container>
    </div>
  );
};

export default CardSlider;
