import React from "react";
import heroImage from "../assets/coingenie.png";
import "../css/HeroSection.css";
export default function HeroSection() {
  return (
    <>
      <center>
        <img className="mt-4" width="360" height="360" src={heroImage} alt="" />
        <h1
          className="headerTitle text-white mt-1"
          style={{ fontWeight: "bold", fontSize: "xxx-large" }}
        >
          Easy. Fast. Cheap.
        </h1>
        <button className="heroSectionBtn mt-4">MAKE YOUR TOKEN NOW!</button>
      </center>
    </>
  );
}
