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
          navigation="true"
          pagination="true"
          pagination-clickable="true"
          slides-per-view="2"
          centered-slides="true"
          space-between="30"
          type="fraction"
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
                  <a
                    href="https://celestialmanor-booking.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                    className="typo-link"
                  >
                    RESERVE NOW
                  </a>
                </div>
                <div className="sliderImage">
                  <img src={item.image} />
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
