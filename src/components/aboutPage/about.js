// components/About.js
import React from "react";
import "./about.css";
import Header from "../shared/header"; // Adjust the path as necessary
import ParticlesBackground from "../shared/particlesBackground";


const About = () => {
  return (
    <>
      <Header active="home" />
      <ParticlesBackground />

      <div className="about-container">
        <h1>About PICrafter</h1>
        <p>
          PICrafter is your one-stop solution for all your image crafting needs.
          Our platform provides powerful tools to search, edit, and customize
          images using intuitive features and creative controls.
        </p>
        <p>
          Whether you're a designer, a student, or just someone who loves
          images, PICrafter helps you transform ideas into stunning visuals —
          all in one place.
        </p>
      </div>
    </>
  );
};

export default About;
