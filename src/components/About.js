import React from "react";

export default function About() {
  return (
    <div className="about">
      <div className="heading">
        <h2 className="text">ABOUT</h2>
      </div>
      {/* About card */}
      <div className="about--div">
        <h2 className="text about--text">
          I am Aditya Kumar.
          <br /> I'm currently pursuing bachlores in Technology from Chandigarh
          Engineering College, Landran. <br />I like <span>
            Designing
          </span> and <span>developing</span> things for the internet and I can
          develope products for next billion users.
          <br />
          <span>I used to have a fear of hurdles, but I got over it.</span>
        </h2>
      </div>
    </div>
  );
}
