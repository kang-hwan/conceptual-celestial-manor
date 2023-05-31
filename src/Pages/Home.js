import React from "react";

// Images
import largeLogo from "../Images/home-celestial-manor.svg";
import smallLogo from "../Images/main-vertical-logo.svg";
import homeMap from "../Images/home-map.svg";
import homeMapMarker from "../Images/homeMapMarker-white.svg";
import image3a from "../Images/s3a-img1.png";
import image3b from "../Images/s3a-img2.png";
import image3c from "../Images/s3a-img3.png";
import image3d from "../Images/s3a-img4.png";
import image3e from "../Images/s3a-img5.png";
import image5a from "../Images/image-5a.png";
import image5b from "../Images/image-5b.png";
import image5c from "../Images/image-5c.png";

// Components & Files
import "../scss/App.css";
import Accordion from "../Components/Accordion";
import InfiniteSlider from "../Components/InfiniteSlider";
import CardSlider from "../Components/CardSlider";
import Footer from "../Components/Footer";

export default function Home() {
  return (
    <div className="page-home">
      <div className="large-logo-wrapper">
        <img src={largeLogo} alt="Celestial Manor" className="large-logo" />
      </div>
      <section className="section-1">
        <div className="section-1a">
          <div className="section-1a-wrapper">
            <div className="svgMapContainer">
              <img src={homeMap} alt="location-map" className="location-map" />
              <img
                src={homeMapMarker}
                alt="location-map-marker"
                className="location-map-marker"
              />
            </div>
          </div>
        </div>
        <div className="section-1b">
          <div className="section-1b-wrapper">
            <div className="section-1b-text">
              <h2>
                Live the high life in the breathtaking world of Melbourne. This
                is where you can touch feel, and imagine.
              </h2>
              <p>Discover our collection of your stay.</p>
              <a href="/" className="cta-btn">
                BOOK YOUR STAY
              </a>
            </div>
            <div>
              <img src={smallLogo} alt="Small Logo" />
            </div>
          </div>
        </div>
      </section>
      <section className="section-2">
        <div className="section-2a">
          <div className="section-2a-wrapper">
            <div className="section-2a-copy">
              <h2>Find your sanctuary at Celestial Manor*</h2>
              <p>
                Indulge in the peaceful surrounds of our contemporary indoor,
                open-air, and outdoor
              </p>
              <a href="https://www.linkedin.com/in/roy-kim-5404281a3/">
                See More About Our Story
              </a>
            </div>
          </div>
        </div>
        <div className="section-2b">
          <div className="section-2b-wrapper">
            <p>Discover our Signature Discover our collection</p>
            <p>
              As the first-ever furniture subscription service of its kind in
              Thailand, Spruce makes it simple, accessible and sustainable for
              you to create a space that you love, sans commitment.
            </p>
            <Accordion />
          </div>
        </div>
      </section>
      <section className="gridImageSection">
        <div className="gridImageSection__Grid">
          <div className="section-3a-left">
            <img src={image3a} alt="3a" />
          </div>
          <div className="section-3a-right">
            <div className="section-3a-34">
              <div>
                <img src={image3b} alt="3b" />
              </div>
              <div>
                <img src={image3c} alt="3c" />
              </div>
            </div>
            <div className="section-3a-45">
              <div>
                <img src={image3d} alt="3d" />
              </div>
              <div>
                <img src={image3e} alt="3e" />
              </div>
            </div>
          </div>
        </div>
        <div className="gridImageSection__body">
          <h2>Welcome to Celestial Manor*</h2>
          <p>
            Coco is not your average hotel in Copenhagen. Sure, it’s a place to
            stay away from home, but it is also a place to unwind, a place to
            meet with friends, a place to meet new people and a place to be
            inspired. We offer a bespoke boutique hotel experience at Coco
            desired by many, yet offered by few.
          </p>
          <p>
            While our hotels are all rooted in that French joie de vivre – that
            “anything can happen” lifestyle – Sofitel Melbourne On Collins
            prides itself on embracing local customs and traditions, with our
            rotating art exhibitions and local produce.
          </p>
          <p>
            We look forward to welcoming you to Sofitel Melbourne On Collins.
          </p>
          <a href="/" className="cta-btn">
            YOUR WAY TO CELESTIAL MANOR*
          </a>
        </div>
      </section>
      <section className="section-4">
        <div className="section-4a">
          <div className="section-4a-top">
            <div className="s4a-top-1">
              <h2>Exclusive & Prestigous</h2>
              <p>
                your average hotel in Copenhagen. Sure, it's a place to stay
                away from
              </p>
            </div>
            <div className="s4a-top-2">
              <h2>Exclusive & Prestigous</h2>
              <p>
                your average hotel in Copenhagen. Sure, it's a place to stay
                away from
              </p>
            </div>
          </div>
          <div className="section-4a-bottom">
            <div className="s4a-bottom-1">
              <h2>Exclusive & Prestigous</h2>
              <p>
                your average hotel in Copenhagen. Sure, it's a place to stay
                away from
              </p>
            </div>
            <div className="s4a-bottom-2">
              <h2>Exclusive & Prestigous</h2>
              <p>
                your average hotel in Copenhagen. Sure, it's a place to stay
                away from
              </p>
            </div>
          </div>
        </div>
        <InfiniteSlider />
      </section>
      <section className="section-5">
        <div className="section-5-wrapper">
          <div className="section-5a">
            <h3>A Piece of Design History</h3>
            <p>
              psum dolor sit amet consectetur. Odio at iaculis nec justo mus
              aliquam at. Nec.ipsum dolor sit amet consectetur. Odio at iaculis
              nemet consectetur. Odio at iaculis nec justo mus aliquam at. Nec.
              ipsum dolor sit amet consectetur.
            </p>
            <img src={image5a} alt="room-1" />
            <a href="https://www.linkedin.com/in/roy-kim-5404281a3/">
              Browse Our Original Collection
            </a>
          </div>
          <div className="section-5b">
            <h3>Luxe Collection of Collection</h3>
            <p>
              psum dolor sit amet consectetur. Odio at iaculis nec justo mus
              aliquam at. Nec.ipsum dolor sit amet consectetur. Odio at iaculis
              nemet consectetur. Odio at iaculis nec justo mus aliquam at. Nec.
              ipsum dolor sit amet consectetur. nemet consectetur. Odio at
              iaculis nec justo mus aliquam at. Nec. ipsum dolor sit amet
              consectetur.
            </p>
            <img src={image5b} alt="room-2" />
            <a href="https://www.linkedin.com/in/roy-kim-5404281a3/">
              Browse Our Original Collection
            </a>
          </div>
          <div className="section-5c">
            <img src={image5c} alt="room-3" />
            <h3>A Piece of Design History, A Piece of Design History</h3>
            <p>
              psum dolor sit amet consectetur. Odio at iaculis nec justo mus
              aliquam at. Nec.ipsum dolor sit amet consectetur. Odio at iaculis
              nemet consectetur. Odio at iaculis nec justo mus aliquam at. Nec.
              ipsum dolor sit amet consectetur.
            </p>
            <a href="https://www.linkedin.com/in/roy-kim-5404281a3/">
              Browse Our Original Collection
            </a>
          </div>
        </div>
      </section>
      <section className="cardSliderSection">
        <h1 className="cardSliderSection__heading">
          Let's pick you up the best rooms
        </h1>
        <p className="cardSliderSection__body">
          Whether staying for business or leisure, discover our most inspiring
          properties all around the world.
        </p>
        <div className="cardSliderSection__module">
          <CardSlider />
        </div>
      </section>
      <section className="howToGetHereSection">
        <div className="howToGetHereSection__googleMap">
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
        </div>
        <div className="howToGetHereSection__body">
          <h1>Location*</h1>
          <p>
            Located in the cœur of the city, Sofitel Melbourne On Collins is
            40-minute drive from Tullamarine Airport. Rental vehicles,
            limousines, taxis and shuttles to airport from hotel can be
            organized with the Concierge Desk.
          </p>
          <h3>Airport Access</h3>
          <p>
            Sofitel Melbourne On Collins is a comfortable 30-minute drive via
            CityLink Tollway from Melbourne’s Tullamarine Airport.
          </p>
          <h3>Arriving by car</h3>
          <p>
            Your Concierge can arrange private chauffeured transfers to and from
            Melbourne Airport, along with public transport information and car
            rental options.
          </p>
          <h3>Parking</h3>
          <p>
            $65 Valet Parking, per night, per car for in-house guests
            <br />
            $45 Casual parking for up to 3 hours maximum
            <br />
            $70 Casual parking for 3 hours or more, within the day
          </p>
          <h3>Guest Services</h3>
          <p>Check in time is 3.00pm | Check out time is 11.00am</p>
        </div>
      </section>
      <Footer />
    </div>
  );
}
