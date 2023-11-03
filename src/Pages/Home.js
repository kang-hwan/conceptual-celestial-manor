import React from "react";

// Images
import simpleLogo from "../Images/main-vertical-logo.svg";

// Components & Files
import Accordion from "../Components/Accordion";
// import InfiniteSlider from "../Components/InfiniteSlider";
import Footer from "../Components/Footer";
import TileCard from "../Components/TileCard";

export default function Home() {
  return (
    <div className="page-home">
      <section className="homeIntroSection">
        <div className="introGradient-container">
          <div className="up"></div>
          <div className="orbitA-container">
            <div className="orbitA"></div>
          </div>
          <div className="orbitB-container">
            <div className="orbitB"></div>
          </div>
          <div className="orbitC-container">
            <div className="orbitC"></div>
          </div>
        </div>
        <div className="homeHeroSection">
          <h2 className="typo-h2">
            Live the high life in the breathtaking world of Melbourne. <br />
            This is where you can touch, feel, and imagine*
          </h2>
          <p className="typo-b2">
            *Here, every moment of your stay is a thoughtfully curated
            experience. Our three collections each offer a unique selection of
            rooms and suites, meticulously designed and tailored to your
            individual needs and desires.
          </p>
          <p className="typo-b2">
            Wake up to spectacular views of your choice ― Gardens by the Bay,
            the idyllic sea or the city skyline. Enjoy privileged access to our
            world-famous rooftop infinity pool. Indulge in a world of dining,
            shopping and entertainment options available right at your doorstep.
          </p>
          <button className="btn-primary">book your stay</button>
          <img src={simpleLogo} alt="shortlogo" />
        </div>
        <div className="homeServiceSection">
          <div className="homeService-cardSliderContainer"></div>
          <div className="homeService-accordionContainer">
            <h1 className="typo-h1">
              Find your sanctuary <br />
              at Celestial Manor*
            </h1>
            <p className="typo-b1">
              *Indulge in a world where opulence meets tranquility, where every
              moment is infused with celestial elegance.{" "}
            </p>
            <Accordion />
          </div>
        </div>
      </section>
      <section className="parallaxSection">
        <div className="welcomeMsg">
          <h1 className="typo-h1">Welcome to Celestial Manor*</h1>
          <p className="typo-b1">
            Indulge in a world where opulence meets tranquility, where every
            moment is infused with celestial elegance. Welcome to Celestial
            Manor, the epitome of luxurious boutique hospitality. Prepare to
            embark on a transcendent journey, where comfort and sophistication
            intertwine seamlessly.
          </p>
          <p className="typo-b1">
            At Celestial Manor*, we believe that true luxury lies in the art of
            personalized service. Our dedicated team of hospitality artisans is
            poised to cater to your every need, ensuring that your stay exceeds
            all expectations. From the moment you step foot into our ethereal
            lobby, you'll be immersed in a world of unrivaled comfort and
            hospitality.
          </p>
          <p className="typo-b1">
            We look forward to welcoming you to Celestial Manor* On Collins.
          </p>
        </div>
        <div className="divider">ACCOMMODATION</div>
        <div className="tileCardContainer">
          <TileCard title={"Celestial Classic*"} color={"#e5e9e0"} />
          <TileCard title={"Celestial Deluxe*"} color={"#E2EAE8"} />
          <TileCard title={"Celestial Suite*"} color={"#F1F4F3"} />
          <TileCard title={"Celestial Classic*"} color={"#E2EAE8"} />
        </div>
      </section>
      <section></section>
      <section className="location-info-section">
        <div className="location-info-container">
          <h1 className="typo-h1">Location*</h1>
          <p className="typo-b3">
            Located in the cœur of the city, Sofitel Melbourne On Collins is
            40-minute drive from Tullamarine Airport. Rental vehicles,
            limousines, taxis and shuttles to airport from hotel can be
            organized with the Concierge Desk.
          </p>
          <h4 className="typo-h4">Airport Access</h4>
          <p className="typo-b3">
            Sofitel Melbourne On Collins is a comfortable 30-minute drive via
            CityLink Tollway from Melbourne’s Tullamarine Airport.
          </p>
          <h4 className="typo-h4">Arriving by car</h4>
          <p className="typo-b3">
            Your Concierge can arrange private chauffeured transfers to and from
            Melbourne Airport, along with public transport information and car
            rental options.
          </p>
          <h4 className="typo-h4">Parking</h4>
          <p className="typo-b3">
            $65 Valet Parking, per night, per car for in-house guests
            <br />
            $45 Casual parking for up to 3 hours maximum
            <br />
            $70 Casual parking for 3 hours or more, within the day
          </p>
          <h4 className="typo-h4">Guest Services</h4>
          <p className="typo-b3">
            Check in time is 3.00pm | Check out time is 11.00am
          </p>
        </div>
      </section>
      <Footer />
    </div>
  );
}

/* <div className="howToGetHereSection__googleMap">
          <iframe
            src="https://www.google.com/maps/d/u/0/embed?mid=1mzCbJF0OHNtT4aUb0xyKTDl2iS7SiS0&ehbc=2E312F"
            width="100%"
            height="1000px"
            zoom="3"
            title="celestial-manor-location"
          ></iframe>
          <div className="howToGetHereSection__mapDetails">
            <p className="title">Contact Details</p>
            <p className="body">Sofitel Melbourne on Collins</p>
            <p>25 Collins Street 3000 Melbourne, Australia</p>
            <p>
              Tel: <u>+61 39653 0000</u> | Email: <u>HI902@sofitel.com</u>
            </p>
          </div>
        </div> */
