import React from "react";
import heroImg from "./photo.jpeg"

export default function Hero() {
  return (
    <div className="maindiv">
      <div className="sidediv1 text">
        Hey! I'm Aditya
        <br /> <span>Frontend</span> Engineer
      </div>
      <img
        className="hero--img"
        src= {heroImg}
        alt="makima art"
        width="300"
      />
    </div>
  );
}
