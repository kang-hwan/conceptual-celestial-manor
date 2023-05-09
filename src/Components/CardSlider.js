import React from "react";

import cardTestImg from "../Images/card-room-image.png";

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default function CardSlider() {
  return (
    <div>
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={50}
        slidesPerView={5}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        {cardData.map((item) => (
          <SwiperSlide>
            <div className="card">
              <h3 className="card__title">{item.title}</h3>
              <img src={item.image} className="card__img" />
              <p className="card__body">{item.body}</p>
              <a className="card__cta-btn" href="/">
                TAKE ME THERE
              </a>
            </div>
          </SwiperSlide>
        ))}
        {/* <swiper-slide>
          <div className="card">
            <h3 className="card__title">Card 1</h3>
            <img src={cardTestImg} className="card__img" />
            <p className="card__body">
              As the first-ever furniture subscription service of its kind in
              Thailand. Spruce ma.
            </p>
            <a className="card__cta-btn" href="/">
              TAKE ME THERE
            </a>
          </div>
        </swiper-slide>
        <swiper-slide>Slide 2</swiper-slide>
        <swiper-slide>Slide 3</swiper-slide>
        <swiper-slide>Slide 4</swiper-slide>
        <swiper-slide>Slide 5</swiper-slide>
        <swiper-slide>Slide 6</swiper-slide> */}
      </Swiper>
    </div>
  );
}

const cardData = [
  {
    id: 1,
    title: "Room 1",
    image: cardTestImg,
    body: "As the first-ever furniture subscription service of its kind in Thailand, Spruce ma",
  },
  {
    id: 2,
    title: "Room 2",
    image: cardTestImg,
    body: "As the first-ever furniture subscription service of its kind in Thailand, Spruce ma",
  },
  {
    id: 3,
    title: "Room 3",
    image: cardTestImg,
    body: "As the first-ever furniture subscription service of its kind in Thailand, Spruce ma",
  },
  {
    id: 4,
    title: "Room 4",
    image: cardTestImg,
    body: "As the first-ever furniture subscription service of its kind in Thailand, Spruce ma",
  },
  {
    id: 5,
    title: "Room 5",
    image: cardTestImg,
    body: "As the first-ever furniture subscription service of its kind in Thailand, Spruce ma",
  },
  {
    id: 6,
    title: "Room 6",
    image: cardTestImg,
    body: "As the first-ever furniture subscription service of its kind in Thailand, Spruce ma",
  },
];
