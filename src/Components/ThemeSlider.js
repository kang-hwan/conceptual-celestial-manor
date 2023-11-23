import React from "react";
import { register } from "swiper/element/bundle";
import { themeData } from "../data/themeData";

register();

const ThemeSlider = () => {
  return (
    <div className="themeSliderContainer">
      <div className="themeSliderContainer-body">
        <h1 className="typo-h1">
          Dreams <br />
          designed for <br />
          your purpose*
        </h1>
        <p className="typo-b1">
          *Browse through our curated rooms for your needs. Browse through our
          curated rooms for your needs.
        </p>
      </div>
      <div className="themeSliderContainer-slider">
        <swiper-container
          class="mySwiper"
          pagination="true"
          pagination-clickable="true"
          slides-per-view="2"
          centered-slides="true"
          space-between="30"
        >
          {themeData.map((item) => (
            <swiper-slide>
              <div className="sliderItemWrapper">
                <div className="sliderHeader">
                  <div>CM</div>
                  <div>{item.header}</div>
                  <div>*</div>
                </div>
                <div className="sliderBody">
                  <div className="sliderBody__title">{item.title}</div>
                  <div className="sliderBody__body">{item.body}</div>
                  <a>RESERVE NOW</a>
                </div>
              </div>
            </swiper-slide>
          ))}
        </swiper-container>
      </div>
    </div>
  );
};

export default ThemeSlider;
