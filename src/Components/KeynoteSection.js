import React, { useEffect } from "react";
import icon01 from "../Images/keynote/keynote-icon-01.svg";
import icon02 from "../Images/keynote/keynote-icon-02.svg";
import icon03 from "../Images/keynote/keynote-icon-03.svg";
import icon04 from "../Images/keynote/keynote-icon-04.svg";
import icon05 from "../Images/keynote/keynote-icon-05.svg";
import subPath from "../Images/keynote/keynote-subpath.svg";
import { Link } from "react-router-dom";

const KeynoteSection = () => {
  useEffect(() => {
    let fadeElements = document.querySelectorAll(".keynoteFade");

    let observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = 1;
          }
        });
      },
      { threshold: 0.5, rootMargin: "-100px" }
    );

    fadeElements.forEach((element) => {
      observer.observe(element);
    });

    return () => {
      fadeElements.forEach((element) => {
        observer.unobserve(element);
      });
    };
  }, []);

  return (
    <section className="keynoteSection">
      <div className="keynote">
        <div className="keynote-svg">
          <div className="keynote-svgIcon">
            <img src={icon01} alt="" className="keynote-icon keynoteFade" />
          </div>
          <div className="keynote-svgLine">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="4"
              height="500"
              viewBox="0 0 4 500"
              fill="none"
            >
              <path
                d="M2 2L1.99998 498"
                stroke="url(#paint0_linear_1478_914)"
                stroke-width="4"
                stroke-linecap="round"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_1478_914"
                  x1="-0.993493"
                  y1="381"
                  x2="-0.993493"
                  y2="-4"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#7FEB38" />
                  <stop offset="1" stop-color="white" stop-opacity="0" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
        <div className="keynote-body">
          <div className="keynote-body__mainContent">
            <h1 className="typo-keynote-openingHeader keynoteFade">
              Indulge in a world where opulence meets tranquility.
            </h1>
            <p className="typo-keynote-body keynoteFade">
              Indulge in a world where opulence meets tranquility, where every
              moment is infused with celestial elegance. Indulge in a world
              where opulence meets tranquility, where every moment is infused
              with celestial elegance.
            </p>
          </div>
        </div>
      </div>
      <div className="keynote">
        <div className="keynote-svg">
          <div className="keynote-svgIcon">
            <img src={icon02} alt="" className=" keynoteFade" />
          </div>
          <div className="keynote-svgLine">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="4"
              height="500"
              viewBox="0 0 4 500"
              fill="none"
            >
              <path
                d="M2 498L1.99998 2"
                stroke="url(#paint0_linear_1478_920)"
                stroke-width="4"
                stroke-linecap="round"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_1478_920"
                  x1="4.99881"
                  y1="119"
                  x2="4.99884"
                  y2="435"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#7FEB38" />
                  <stop offset="1" stop-color="white" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
        <div className="keynote-body">
          <div className="keynote-body__mainContent">
            <h2 className="typo-keynote-featureHeading keynoteFade">
              Crafted by Manor* Co
            </h2>
            <h1 className="typo-keynote-heading keynoteFade">
              Indulge in a world where opulence meets tranquility.
            </h1>
            <p className="typo-keynote-body keynoteFade">
              Indulge in a world where opulence meets tranquility, where every
              moment is infused with celestial elegance. Indulge in a world
              where opulence meets tranquility, where every moment is infused
              with celestial elegance.
            </p>
            <Link to="/" className="typo-link keynoteFade">
              Learn more about Celestial Manor* Co
            </Link>
          </div>
        </div>
      </div>
      <div className="keynote">
        <div className="keynote-svg">
          <div className="keynote-svgIcon">
            <img src={icon03} alt="" className=" keynoteFade" />
          </div>
          <div className="keynote-svgLine">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="4"
              height="1023"
              viewBox="0 0 4 1023"
              fill="none"
            >
              <path
                d="M2 1021L2.00004 2"
                stroke="url(#paint0_linear_1478_925)"
                stroke-width="4"
                stroke-linecap="round"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_1478_925"
                  x1="4.99886"
                  y1="242.369"
                  x2="4.99889"
                  y2="891.571"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#7FEB38" />
                  <stop offset="1" stop-color="white" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
        <div className="keynote-body">
          <div className="keynote-body__mainContent">
            <h2 className="typo-keynote-featureHeading keynoteFade">
              Coffee Central
            </h2>
            <h1 className="typo-keynote-heading keynoteFade">
              Discover the true essence of Melbourne's coffee culture
            </h1>
            <p className="typo-keynote-body keynoteFade">
              Discover the true essence of Melbourne's coffee culture at
              Celestial Manor, your ultimate Coffee Central. Savor the finest
              blends, expertly brewed by our skilled baristas, in a chic and
              inviting atmosphere.
            </p>
            <Link to="/" className="typo-link keynoteFade">
              Learn more about Celestial Manor* Co
            </Link>
          </div>
          <div className="keynote-body__subContent">
            <img src={subPath} alt="" className="subpath keynoteFade" />
            <div className="">
              <h2 className="typo-keynote-subheading keynoteFade">
                Bespoke Coffee and breakfast at your door or our VIP hub.
              </h2>
              <p className="typo-keynote-body keynoteFade">
                Indulge in the exclusivity and prestige that Celestial Manor
                offers.
              </p>
            </div>
            <div></div>
          </div>
        </div>
      </div>
      <div className="keynote">
        <div className="keynote-svg">
          <div className="keynote-svgIcon">
            <img src={icon04} alt="" className=" keynoteFade" />
          </div>
          <div className="keynote-svgLine">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="4"
              height="1023"
              viewBox="0 0 4 1023"
              fill="none"
            >
              <path
                d="M2 1021L2.00004 2"
                stroke="url(#paint0_linear_1478_925)"
                stroke-width="4"
                stroke-linecap="round"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_1478_925"
                  x1="4.99886"
                  y1="242.369"
                  x2="4.99889"
                  y2="891.571"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#7FEB38" />
                  <stop offset="1" stop-color="white" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
        <div className="keynote-body">
          <div className="keynote-body__mainContent">
            <h2 className="typo-keynote-featureHeading keynoteFade">
              Exclusive & Prestige
            </h2>
            <h1 className="typo-keynote-heading keynoteFade">
              Indulge in the exclusivity and prestige that Celestial Manor
              offers.
            </h1>
            <p className="typo-keynote-body keynoteFade">
              Indulge in the exclusivity and prestige that Celestial Manor
              offers. Immerse yourself in a world of refined elegance and
              personalized service tailored to your desires.
            </p>
            <Link to="/" className="typo-link">
              Learn more about Celestial Manor* Co
            </Link>
          </div>
          <div className="keynote-body__subContent">
            <img src={subPath} alt="" className="subpath keynoteFade" />
            <div className="">
              <h2 className="typo-keynote-subheading keynoteFade">
                Your journey to <br /> Melbourne with CM*
              </h2>
              <p className="typo-keynote-body keynoteFade">
                Indulge in the exclusivity and prestige that <br />
                Celestial Manor offers.
              </p>
              <Link to="" className="typo-link keynoteFade">
                Learn more
              </Link>
            </div>
            <div></div>
          </div>
        </div>
      </div>
      <div className="keynote">
        <div className="keynote-svg">
          <div className="keynote-svgIcon">
            <img src={icon05} alt="" className=" keynoteFade" />
          </div>
          <div className="keynote-svgLine">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="4"
              height="1023"
              viewBox="0 0 4 1023"
              fill="none"
            >
              <path
                d="M2 1021L2.00004 2"
                stroke="url(#paint0_linear_1478_925)"
                stroke-width="4"
                stroke-linecap="round"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_1478_925"
                  x1="4.99886"
                  y1="242.369"
                  x2="4.99889"
                  y2="891.571"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#7FEB38" />
                  <stop offset="1" stop-color="white" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
        <div className="keynote-body">
          <div className="keynote-body__mainContent">
            <h2 className="typo-keynote-featureHeading keynoteFade">
              Top-notch Experience
            </h2>
            <h1 className="typo-keynote-heading keynoteFade">
              Expect nothing less than a top-notch experience at Celestial
              Manor.
            </h1>
            <p className="typo-keynote-body keynoteFade">
              Expect nothing less than a top-notch experience at Celestial
              Manor. From the moment you arrive, our dedicated team will go
              above and beyond to ensure your stay is exceptional.
            </p>
          </div>
          <div className="keynote-body__subContent">
            <img src={subPath} alt="" className="subpath keynoteFade" />
            <div className="">
              <h2 className="typo-keynote-subheading keynoteFade">
                Your journey to <br /> Melbourne with CM*
              </h2>
              <p className="typo-keynote-body keynoteFade">
                Indulge in the exclusivity and prestige that <br />
                Celestial Manor offers.
              </p>
              <Link to="/" className="typo-link keynoteFade">
                Learn more
              </Link>
            </div>
            <div></div>
          </div>
        </div>
      </div>
      <div className="keynote">
        <div className="keynote-svg">
          <div className="keynote-svgIcon">
            <img src={icon01} alt="" className=" keynoteFade" />
          </div>
          <div className="keynote-svgLine">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="4"
              height="402"
              viewBox="0 0 4 402"
              fill="none"
            >
              <path
                d="M2 400L2.00002 2.30175"
                stroke="url(#paint0_linear_1495_2851)"
                stroke-width="4"
                stroke-linecap="round"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_1495_2851"
                  x1="4.99884"
                  y1="96.1137"
                  x2="4.99884"
                  y2="349.486"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#7FEB38" />
                  <stop offset="1" stop-color="white" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
        <div className="keynote-body">
          <div className="keynote-body__subscribe">
            <h2 className="typo-keynote-featureHeading keynoteFade">
              Celestial Lifestyle
            </h2>
            <h1 className="typo-keynote-heading keynoteFade">
              Make the most of your visit ― join the most rewards programme in
              Melbourne
            </h1>
            <p className="typo-keynote-body keynoteFade">
              Earn unlimited rewards instantly as you shop, dine, play and stay
              at Celestial Manor*, and unlock greater privileges as you indulge.
              Our esteemed members enjoy priority access to highly sought-after
              events and restaurants, and exclusive invites to uniquely curated
              lifestyle experiences.
            </p>
            <input className="subscribeInput keynoteFade" type="email"></input>
            <button className="subscribeButton keynoteFade">
              Sign up for CM*
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KeynoteSection;
