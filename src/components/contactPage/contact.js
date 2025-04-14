// components/Contact.js
import React from "react";
import "./contact.css";
import Header from "../shared/header"; // Adjust the path as necessary
import ParticlesBackground from "../shared/particlesBackground";

const Contact = () => {
  return (
    <>
      <Header active="home" />
      <ParticlesBackground />

      <div className="contact-container">
        <h1>Contact Us</h1>
        <p>Have questions or feedback? We'd love to hear from you!</p>
        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message..." rows="6" required />
          <button type="submit">Send Message</button>
        </form>
      </div>
    </>
  );
};

export default Contact;
