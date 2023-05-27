import React from "react";

import cardImg1 from "../Images/cardSlider-1.png";
import cardImg2 from "../Images/cardSlider-2.png";
import cardImg3 from "../Images/cardSlider-3.png";
import cardImg4 from "../Images/cardSlider-4.png";
import cardImg5 from "../Images/cardSlider-5.png";
import cardImg6 from "../Images/cardSlider-6.png";

// import Swiper core and required modules
import { Navigation, Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import "swiper/css/scrollbar";

export default function CardSlider() {
  return (
    <div className="cardSliderContainer">
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={50}
        slidesPerView={4}
        centeredSlides={true}
        navigation
        pagination={{ clickable: true }}
        // scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        {cardData.map((item) => (
          <SwiperSlide>
            <div className="card">
              <div className="cardContent">
                <h3 className="cardContent__title">{item.title}</h3>
                <img
                  src={item.image}
                  className="cardContent__img"
                  alt={item.id}
                />
                <p className="cardContent__body">{item.body}</p>
              </div>
              <div className="cardLink">
                <a className="cardLink__cta-btn" href="/">
                  TAKE ME THERE
                </a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

const cardData = [
  {
    id: 1,
    title: "Inspiration",
    image: cardImg1,
    body: "As the first-ever furniture subscription service of its kind in Thailand, Spruce ma",
  },
  {
    id: 2,
    title: "Perfect Date Night",
    image: cardImg2,
    body: "As the first-ever furniture subscription service of its kind in Thailand, Spruce ma",
  },
  {
    id: 3,
    title: "Friends & Family",
    image: cardImg3,
    body: "As the first-ever furniture subscription service of its kind in Thailand, Spruce ma",
  },
  {
    id: 4,
    title: "Friend's Night Out",
    image: cardImg4,
    body: "As the first-ever furniture subscription service of its kind in Thailand, Spruce ma",
  },
  {
    id: 5,
    title: "Sole Holiday",
    image: cardImg5,
    body: "As the first-ever furniture subscription service of its kind in Thailand, Spruce ma",
  },
  {
    id: 6,
    title: "Work & Life",
    image: cardImg6,
    body: "As the first-ever furniture subscription service of its kind in Thailand, Spruce ma",
  },
];
