import React from "react";

export default function Card(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img src={props.img} className="card--image" alt="head image" />
      </div>

      
        <h4 className="text card-des">{props.title}</h4>
        <p className="text card-des des">{props.description}</p>
      
    </div>
  );
}
