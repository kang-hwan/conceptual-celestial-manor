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
    title: "Exclusive Hotel",
    content:
      "As the first-ever subscription service of tis kind in Thailand, Spruce makes it simple, accessible and sustainable for you to create a space that you love, sans commitment. ",
  },
  {
    title: "Flexible",
    content:
      "As the first-ever subscription service of tis kind in Thailand, Spruce makes it simple, accessible and sustainable for you to create a space that you love, sans commitment. ",
  },
  {
    title: "Cafe & Bar",
    content:
      "As the first-ever subscription service of tis kind in Thailand, Spruce makes it simple, accessible and sustainable for you to create a space that you love, sans commitment. ",
  },
  {
    title: "Sustainable",
    content:
      "As the first-ever subscription service of tis kind in Thailand, Spruce makes it simple, accessible and sustainable for you to create a space that you love, sans commitment. ",
  },
  {
    title: "Personalised",
    content:
      "As the first-ever subscription service of tis kind in Thailand, Spruce makes it simple, accessible and sustainable for you to create a space that you love, sans commitment. ",
  },
];
