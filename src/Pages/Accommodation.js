import React from "react";
import AccomInfoCard from "../Components/AccomInfoCard";
import Footer from "../Components/Footer";
// import largeLogo from "../Images/home-celestial-manor.svg";
import celestialStar from "../Images/celestialStar.svg";
import {
  roomsData,
  AccomPageHighlight,
  AccomCarouselAImgs,
  AccomCarouselBData,
} from "../data/roomsData";
import { hotelExpData } from "../data/hotelExpData";
import CarouselA from "../Components/CarouselA";
import HeroSection from "../Components/HeroSection";
import HighlightA from "../Components/HighlightA";
import accomHero from "../Images/accommodationPage/accomHero.png";
import accomBanner01 from "../Images/accommodationPage/accomBanner.png";
import accomBanner02 from "../Images/accommodationPage/accomBanner02.png";
import CarouselB from "../Components/CarouselB";

const Accommodation = () => {
  return (
    <div className="accommodation-page">
      <div className="accommodation-page-container">
        <HeroSection asset={accomHero} />
        <div className="accommodation-introA-section">
          <img
            src={celestialStar}
            alt="celestialStar"
            className="celestial-star"
          />
          <h1 className="typo-h1">
            Our Commitment to You, <br />
            and the Planet
          </h1>
          <p className="typo-b1 paragraph">
            At Celestial Manor, our promise extends beyond exceptional service.
            We're dedicated to creating lasting memories, forging genuine bonds,
            and ensuring that every guest feels like a part of our
            constellation.
          </p>
          <p className="typo-b1 paragraph">
            This commitment is intertwined with our responsibility to the Earth.
            By integrating eco-friendly practices and supporting local
            communities, we aim to offer an experience where indulgence meets
            sustainability. As you revel in our luxurious offerings, you can
            take solace in the fact that the footprint you leave behind is
            minimal. In this celestial abode, we honor both our guests and our
            planet with equal reverence.
          </p>
          <div className="introA-imgContainer">
            <img src={accomBanner01} alt="accom-banner-01" />
          </div>
          <h1 className="typo-h1">Explore. Dream. Discover.</h1>
          <p className="typo-b1 paragraph">
            Whether you're here for business or leisure, Celestial Manor is a
            realm of possibilities. With state-of-the-art facilities, gourmet
            dining experiences, and a spa that rejuvenates not just the body but
            the soul, every stay with us is a journey through the stars.
          </p>
          <p className="typo-b1 paragraph">
            Join us, and find your place in the cosmos at Celestial Manor.
          </p>
          <button className="btn-primary">LEARN MORE</button>
        </div>
        <div className="accommodation-introB-section">
          <div className="introB-imgContainer">
            <img src={accomBanner02} alt="accom-banner-02" />
          </div>
          <h1 className="typo-h1">Retreat into your Private Sanctuary</h1>
          <p className="typo-b1 paragraph">
            Here, every moment of your stay is a thoughtfully curated
            experience. Our three collections each offer a unique selection of
            rooms and suites, meticulously designed and tailored to your
            individual needs and desires. Wake up to spectacular views of your
            choice ― Gardens by the Bay, the idyllic sea or the city skyline.
            Enjoy privileged access to our world-famous rooftop infinity pool.
            Indulge in a world of dining, shopping and entertainment options
            available right at your doorstep.
          </p>
        </div>
        <div className="rooms-section">
          <h1 className="typo-h1">Rooms & Suites</h1>
          <AccomInfoCard data={roomsData} />
        </div>
        <div className="carouselA-section">
          <CarouselA
            data={AccomCarouselAImgs}
            title={"Introducing the Celestial Collection*"}
          />
        </div>
        <div className="carouselB-section">
          <CarouselB title={"Stay Packages"} data={AccomCarouselBData} />
        </div>
        <div className="flightPackage-section">
          <HighlightA data={AccomPageHighlight} />
        </div>
        <div className="hotelExp-section">
          <h1 className="typo-h1">More Hotel Experiences</h1>
          <AccomInfoCard data={hotelExpData} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Accommodation;
