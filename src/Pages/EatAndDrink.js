import React from "react";
import celestialStar from "../Images/celestialStar.svg";
import Footer from "../Components/Footer";
import largeLogo from "../Images/home-celestial-manor.svg";
import ChefInfoCard from "../Components/ChefInfoCard";
import dummyImg from "../Images/dummyImg.png";

const EatAndDrink = () => {
  return (
    <div className="eatAndDrink-page">
      <div className="eatAndDrink-page-container">
        <div className="eatAndDrink-heroSection">Hero</div>
        <div className="eatAndDrink-welcomeSection">
          <img src={celestialStar} alt="celestialStar" />
          <h1 className="typo-h1">A Culnary Odyssey</h1>
          <p className="typo-b1">
            Experience elevated luxury living and unparalleled hospitality,
            unlike anything you’ve known before.
            <br /> Our newly restored rooms and suites are impeccably designed
            and fitted with stylish furnishings, <br />
            including a bespoke Armoire, that reflect our love for refined
            craftsmanship.
          </p>
          <button className="btn-primary">Find Your Restaurant</button>
        </div>
        <div className="eatAndDrink-featuredSection">
          <h1 className="typo-h1">Featured</h1>
          <h4 className="typo-h4">CELESTIAL RESTAURANT & BAR</h4>
          <p className="typo-b1">FUSION AUSTRALIAN | FINE DINING</p>
          <p className="typo-b2">
            Indulge in the exclusivity and prestige that Celestial Manor offers.
            <br />
            Immerse yourself in a world of refined elegance and personalized{" "}
            <br />
            service tailored to your desires.
          </p>
          <a className="typo-link">Browse Our Celestial Deluxe Collection</a>
          <div className="eatAndDrink-featuredSection__carousel">Carousel</div>
        </div>
        <div className="eatAndDrink-chefSection">
          <h1 className="typo-h1">Meet Our Celebrity Chefs</h1>
          <ChefInfoCard />
        </div>
        <div className="eatAndDrink-casinoSection">
          <div className="eatAndDrink-casinoSection__img">
            <img src={dummyImg} />
          </div>
          <div className="eatAndDrink-casinoSection__body">
            <h1 className="typo-h1">Bars & Casino</h1>
            <p>The Age Australia</p>
            <p className="typo-b2">
              "Modern touches can be found in the thoughtfully curated amenities
              throughout the suite, whether it is the luxurious Frette bedding,
              exquisite Legle porcelain tableware, Bang & Olufsen sound system,
              or even the tailor made Maison 21G scent that permeates the air.
            </p>
            <p className="typo-b2">
              Marina Bay Sands takes the premise of "home away from home" very
              seriously, and the same attention to detail carries through to the
              bathroom space, where you can retreat for some pampering and self
              care."
            </p>
          </div>
        </div>
        <div className="eatAndDrink-diningSection">
          <div className="eatAndDrink-diningSection__body">
            <h1 className="typo-h1">Private Dining & Events</h1>
            <h4 className="typo-h4">STAY LONGER, EXPERIENCE MORE</h4>
            <p className="typo-b2">
              Our newly restored Sands Collection offers an elegant, intimate
              and well-balanced space, detailed with timber panelling,
              book-matched marble floors and thoughtfully curated art pieces
              throughout.
            </p>
            <p className="typo-b2">
              The bright and soothing material palette, with clean lines & chic
              detailing throughout are the epitome of modern sophistication. All
              amenities, furnishings and sensory technology, demonstrate the
              depth of refined craftsmanship and consideration that has gone
              into our re-development.
            </p>
          </div>
          <div className="eatAndDrink-diningSection__img">
            <img src={dummyImg} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default EatAndDrink;
