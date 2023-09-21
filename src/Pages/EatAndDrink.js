import React from "react";
import HeroSection from "../Components/HeroSection";
import celestialStar from "../Images/celestialStar.svg";
import { eatDrinkData, eatDrinkHighlight } from "../data/eatDrinkData";
import AccomInfoCard from "../Components/AccomInfoCard";
import HighlightA from "../Components/HighlightA";
import Footer from "../Components/Footer";
import eatDrinkHeroImg from "../Images/eatDrinkPage/eatDrink-hero.png";
import eatDrinkHighlightImg02 from "../Images/eatDrinkPage/eatDrink-highlight02.png";

const EatAndDrink = () => {
  return (
    <div className="eatAndDrink-page">
      <div className="eatAndDrink-page-container">
        <div className="eatAndDrink-hero-section">
          <HeroSection asset={eatDrinkHeroImg} />
          <h1 className="typo-h1">
            Experience the <br />
            Art of Dining*
          </h1>
        </div>
        <div className="eatAndDrink-introA-section">
          <img
            src={celestialStar}
            alt="celestialStar"
            className="celestial-star"
          />
          <h1 className="typo-h1">A Culinary Odyssey</h1>
          <p className="typo-b1 paragraph">
            Experience elevated luxury living and unparalleled hospitality,
            unlike anything you’ve known before. Our newly restored rooms and
            suites are impeccably designed and fitted with stylish furnishings,
            including a bespoke Armoire, that reflect our love for refined
            craftsmanship.
          </p>
          <button className="btn-primary">find your restaurants</button>
        </div>
        <div className="eatAndDrink-carousel-section">Carousel Section</div>
        <div className="chefs-info-section">
          <h1 className="typo-h1">Meet Our Celebrity Chefs</h1>
          <AccomInfoCard data={eatDrinkData} />
        </div>
        <div className="eatAndDrink-highlightA-section">
          <HighlightA data={eatDrinkHighlight} />
        </div>
        <div className="eatAndDrink-highlightB-section">
          <div className="eatAndDrink-highlightB-section__img">
            <img src={eatDrinkHighlightImg02} alt="eatAndDrink-highlightB" />
          </div>
          <div className="eatAndDrink-highlightB-section__body">
            <h4 className="typo-h4">Private Dining & Events</h4>
            <p className="typo-b3">
              Whether you are hosting a networking event, a business meeting or
              a birthday bash, a memorable experience awaits. Our restaurants
              are versatile to suit your needs, and you can be assured of
              excellent menu selections and personalised service.
            </p>
            <a className="typo-link" href="/">
              Discover More
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default EatAndDrink;
