import React from "react";
import Card from "./Card";
import CardData from "../CardData";

export default function Projects() {
  const cardElements = CardData.map((items) => {
    return (
      <Card
        img={items.img}
        title={items.title}
        description={items.description}
      />
    );
  });
  return (
    <div>
      <div className="heading">
        <h2 className="text">PROJECTS</h2>
        <div className="project-item"></div>
      </div>
      {/* Card elements */}
      <div className="card-div">
      {cardElements}
      </div>
    </div>
  );
}
