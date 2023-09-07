import React from "react";
import AccomInfoCard from "../Components/AccomInfoCard";
import Footer from "../Components/Footer";
// import largeLogo from "../Images/home-celestial-manor.svg";
import celestialStar from "../Images/celestialStar.svg";

const Accommodation = () => {
  return (
    <div className="accommodation-page">
      <div className="accommodation-page-container">
        <div className="heroSection">footage</div>
        <div className="accommodation-description">
          <div className="accommodation-description-content">
            <img src={celestialStar} alt="celestialStar" />
            <h1 className="typo-h1">
              Our Commitment to You, <br /> and the Planet
            </h1>
            <p className="typo-b1">
              At Celestial Manor, our promise extends beyond exceptional
              service. We're dedicated to creating lasting memories, forging
              genuine bonds, and ensuring that every guest feels like a part of
              our constellation.
            </p>
            <p className="typo-b1">
              This commitment is intertwined with our responsibility to the
              Earth. By integrating eco-friendly practices and supporting local
              communities, we aim to offer an experience where indulgence meets
              sustainability. As you revel in our luxurious offerings, you can
              take solace in the fact that the footprint you leave behind is
              minimal. In this celestial abode, we honor both our guests and our
              planet with equal reverence.
            </p>
          </div>
          <div className="accommodation-description-content">
            <div className="accommodation-description__section">
              <div>Img1</div>
              <div>Img2</div>
              <div>Img3</div>
            </div>
            <h1 className="typo-h1">Explore. Dream. Discover.</h1>
            <p className="typo-b1">
              Whether you're here for business or leisure, Celestial Manor is a
              realm of possibilities. With state-of-the-art facilities, gourmet
              dining experiences, and a spa that rejuvenates not just the body
              but the soul, every stay with us is a journey through the stars.
            </p>
            <p className="typo-b1">
              Join us, and find your place in the cosmos at Celestial Manor.
            </p>
            <a
              href="https://celestial-manor.netlify.app/"
              className="typo-link"
            >
              Learn More
            </a>
          </div>
          <div className="accommodation-description-content">
            <img src={celestialStar} alt="celestialStar" />
            <h1 className="typo-h1">Retreat into your Private Sanctuary</h1>
            <p className="typo-b1">
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
          <div className="accomInfoSection">
            <h1 className="typo-h1">Rooms & Suites</h1>
            <AccomInfoCard />
            <div className="accomInfoSection-carousel"></div>
          </div>
          <div className="stayPackageSection">
            <h1 className="typo-h1">Stay Packages</h1>
            <h4>STAY LONGER, EXPERIENCE MORE</h4>
            <p className="typo-b2">
              Indulge in the exclusivity and prestige that Celestial Manor
              offers. Immerse yourself in a world of refined elegance and
              personalized service tailored to your desires.
            </p>
          </div>
          <div className="stayPackageSection-carousel"></div>
          <div className="stayPackageSection-article">
            <div>
              <h4>STAY LONGER, EXPERIENCE MORE</h4>
              <p className="typo-b2">
                Indulge in the exclusivity and prestige that Celestial Manor
                offers. Immerse yourself in a world of refined elegance and
                personalized service tailored to your desires.
              </p>
              <a
                href="https://celestial-manor.netlify.app/"
                className="typo-link"
              >
                Browse Our Celestial Deluxe Collection
              </a>
            </div>
            <div></div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Accommodation;
