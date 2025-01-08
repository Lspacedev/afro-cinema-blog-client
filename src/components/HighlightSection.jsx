import { useState } from "react";

function HightlightSection() {
  return (
    <div className="HightlightSection">
      <div className="details">
        <h1 className="director-heading">Directors To Watch</h1>
        <p className="text">
          Lorem ipsum dolor sit amet consectetur adipisicing Lorem ipsum dolor
          sit amet consectetur adipisicingLorem ipsum dolor sit amet consectetur
          adipisicing Lorem ipsum dolor sit amet consectetur adipisicing Lorem
          ipsum dolor sit amet consectetur adipisicing Lorem ipsum dolor sit
          amet consectetur adipisicing Lorem ipsum dolor sit amet consectetur
          adipisicing Lorem ipsum dolor sit amet consectetur adipisicing
        </p>
        <p className="text">
          Lorem ipsum dolor sit amet consectetur adipisicing Lorem ipsum dolor
          sit amet consectetur adipisicing Lorem ipsum dolor sit amet
          consectetur adipisicing Lorem ipsum dolor sit amet consectetur
          adipisicing Lorem ipsum dolor sit amet consectetur adipisicing Lorem
          ipsum dolor sit amet consectetur adipisicing
        </p>
      </div>
      <div className="director-image">
        <img src="/images/ousmane-sembene.jpeg" />
      </div>
    </div>
  );
}

export default HightlightSection;
