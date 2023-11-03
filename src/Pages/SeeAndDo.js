import React from "react";
import seeAndDoHeroImg from "../Images/seeAndDo/seeAndDo-hero.png";
import celestialStar from "../Images/celestialStar.svg";
import {
  seeAndDoCarouselB,
  seeAndDoCardSliderA,
  seeAndDoCardSliderB,
} from "../data/seeAndDoData";
import CarouselB from "../Components/CarouselB";
import CardSlider from "../Components/CardSlider";
import HighlightAImg from "../Images/seeAndDo/seeAndDo-highlight.png";
import Footer from "../Components/Footer";

const SeeAndDo = () => {
  return (
    <div className="seeAndDo-page">
      <div className="seeAndDo-page-container">
        <div className="hero-section">
          <img src={seeAndDoHeroImg} alt="hero-section" />
          <div className="hero-text">
            <h1>See the World in a New Light*</h1>
            <div className="hero-tag">
              <img src={celestialStar} alt="celestial star" />
              <span>CM Certified</span>
            </div>
          </div>
        </div>
        <div className="seeAndDo-introA-section">
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
        </div>
        <div className="seeAndDo-carouselB-section">
          <CarouselB title={"Featured"} data={seeAndDoCarouselB} />
        </div>
        <div className="seeAndDo-cardSliderA-section">
          <CardSlider
            title={"Immersive Experience"}
            data={seeAndDoCardSliderA}
          />
        </div>
        <div className="seeAndDo-highlight-section">
          <div className="seeAndDo-highlight-section__img">
            <img src={HighlightAImg} alt="see&do highlight" />
          </div>
          <div className="seeAndDo-highlight-section__body">
            <div className="tag">
              <img src={celestialStar} alt="See & Do Highlight" />
              <span>CM Certified</span>
            </div>
            <h4 className="typo-h4">Shows & Events</h4>
            <p className="typo-b3">
              From award-winning Broadway musicals to star-studded concerts, our
              curated shows and events are sure to entertain and delight.
            </p>
            <a className="typo-link" href="/">
              Discover More
            </a>
          </div>
        </div>
      </div>
      <div className="seeAndDo-cardSliderB-section">
        <div className="cardSliderB-container">
          <CardSlider
            title="The Night is Ever Young"
            data={seeAndDoCardSliderB}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SeeAndDo;
