import React from "react";
import { register } from "swiper/element/bundle";
import { themeData } from "../data/themeData";
import Swiper from "swiper";

register();

// const swiperEl = document.querySelector(".themeSliderSwiper");
// Object.assign(swiperEl, {
//   slidesPerView: 2,
//   spaceBetween: 10,
//   pagination: {
//     clickable: true,
//   },
//   breakpoints: {
//     900: {
//       slidesPerView: 1.2,
//       spaceBetween: 20,
//     },
//   },
// });
// swiperEl.initialize();

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
          class="themeSliderSwiper"
          navigation="true"
          pagination="true"
          pagination-clickable="true"
          slides-per-view="2"
          centered-slides="true"
          // breakpoints={{
          //   900: {
          //     slidesPerView: 1.5,
          //     spaceBetween: 20,
          //   },
          // }}
        >
          {themeData.map((item) => (
            <swiper-slide>
              <div className="sliderItemWrapper">
                <div className="sliderHeader">
                  <div>{item.header}</div>
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
                  <img src={item.image} alt="" />
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
