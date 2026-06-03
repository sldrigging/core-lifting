import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

import "./HomePage.css";

import craneImg from "../assets/imgs-rv/Core-Overhead-Crane-32.jpg";
import chainImg from "../assets/imgs-rv/Chain-Sling-Inspection-Hero.jpg";
import logo from "../assets/core-logo.png";

export default function HomePage() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash);
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: "smooth" }), 100);
      }
    }
  }, [hash]);

  return (
    <>
      <section style={{ padding: 0, maxWidth: "100%", background: "#000" }}>
        <div className="home-hero-container">

          <div className="hero-logo-bar">
            <img src={logo} alt="Core Lifting Products" className="hero-logo-bar-img" />
          </div>

          <div className="hero-accent-bar" />

          <Link to="/cranes" className="hero-image-panel hero-image-panel--left">
            <img src={craneImg} alt="Core Overhead Crane" />
            <div className="hero-panel-overlay">
              <span className="hero-panel-title">CRANES & SERVICES</span>
              <span className="hero-panel-enter">ENTER</span>
            </div>
          </Link>

          <Link to="/rigging" className="hero-image-panel hero-image-panel--right">
            <img src={chainImg} alt="Chain Sling Inspection" />
            <div className="hero-panel-overlay">
              <span className="hero-panel-enter">ENTER</span>
              <span className="hero-panel-title">RIGGING & SERVICES</span>
            </div>
          </Link>

        </div>
      </section>
    </>
  );
}
