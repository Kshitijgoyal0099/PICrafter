// components/Header/header.js
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./header.css";
import imgLogo from "../../assets/LogoPICrafter.png";

function Header() {
  const location = useLocation();
  const [activeStatus, setActiveStatus] = useState(location.pathname);

  return (
    <div className="homeHeader">
      <Link to="/home">
        <img src={imgLogo} className="img-Logo" alt="PICrafter Logo" />
      </Link>
      <div className="headerContent">
        <Link to="/home">
          <div
            onClick={() => setActiveStatus("/home")}
            className={`headerButton homeButton ${
              activeStatus === "/home" ? "Active" : ""
            }`}
          >
            Home
          </div>
        </Link>
        <Link to="/about">
          <div
            onClick={() => setActiveStatus("/about")}
            className={`headerButton aboutButton ${
              activeStatus === "/about" ? "Active" : ""
            }`}
          >
            About
          </div>
        </Link>
        <Link to="/contact">
          <div
            onClick={() => setActiveStatus("/contact")}
            className={`headerButton contactButton ${
              activeStatus === "/contact" ? "Active" : ""
            }`}
          >
            Contact
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
