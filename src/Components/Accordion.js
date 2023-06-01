import React, { useState } from "react";
import "../scss/App.css";
import arrowDown from "../Images/accordion-arrow-down.svg";
import arrowUp from "../Images/accordion-arrow-up.svg";

export default function Accordion() {
  const [selected, setSelected] = useState(null);

  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null);
    }
    setSelected(i);
  };

  return (
    <div className="accordion-wrapper">
      {accordionData.map((item, i) => (
        <div
          className={selected === i ? "accordion-item show" : "accordion-item"}
          key={i}
        >
          <div className="accordion-title" onClick={() => toggle(i)}>
            <h2>{item.title}</h2>
            <span>
              {selected === i ? (
                <img src={arrowUp} width={10} alt="accordion-arrow-up" />
              ) : (
                <img src={arrowDown} width={10} alt="accordion-arrow-down" />
              )}
            </span>
          </div>
          <div
            className={
              selected === i ? "accordion-content show" : "accordion-content"
            }
          >
            {item.content}
          </div>
        </div>
      ))}
    </div>
  );
}

const accordionData = [
  {
    title: "Accommodations",
    content:
      "Luxurious rooms and suites blending timeless elegance with modern sophistication. Thoughtfully appointed spaces with exquisite furnishings and plush amenities. Serene ambiance for a restful and rejuvenating stay.",
  },
  {
    title: "Experience",
    content:
      "Curated experiences showcasing the wonders of the surroundings and local attractions. Expert concierge services to assist with personalized itineraries and recommendations. Engaging activities for families, including the Celestial Kids Club.",
  },
  {
    title: "Cultural Immersion",
    content:
      "Connections with nearby art galleries, museums, and cultural institutions for curated experiences and private tours. Assistance in arranging tickets to theater productions, live performances, and art exhibitions.",
  },
  {
    title: "Celestial Cafe & Bar",
    content:
      "Start your day in celestial fashion at our elegant Celestial Café. Indulge in a sumptuous breakfast spread featuring a delightful array of continental delicacies, freshly baked pastries, and aromatic coffees. Immerse yourself in a relaxed atmosphere as you savor each bite, preparing yourself for a day of celestial adventures.",
  },
  {
    title: "Exceptional Service",
    content:
      "Dedicated team of hospitality artisans providing personalized service and attention to detail. Professional concierge available to assist with any request or arrangement. Impeccable service ensuring a memorable and elevated stay.",
  },
];
