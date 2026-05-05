import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

import "./HomePage.css";

import craneBanner1 from "../assets/cranes/banner-1.png";
import craneBanner2 from "../assets/cranes/banner-2.png";
import bannerRightTop from "../assets/new-imgs/Core-Houston (1).png";
import bannerRightBottom from "../assets/new-imgs/Core-Houma (22).png";
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
      {/* Hero / Cover */}
      <section style={{ padding: 0, maxWidth: "100%", background: "#fff" }}>
        <div className="home-hero-container">
          <div
            style={{
              position: "relative",
              display: "flex",
              width: "100%",
              overflow: "hidden",
            }}
          >
            {/* Background Images */}
            <div style={{ flex: 1, height: "100%", display: "flex", flexDirection: "column" }}>
              <div style={{ flex: 1, overflow: "hidden" }}>
                <img
                  src={craneBanner1}
                  alt="Banner Top Left"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
              <div style={{ flex: 1, overflow: "hidden" }}>
                <img
                  src={craneBanner2}
                  alt="Banner Bottom Left"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
            </div>
            {/* Middle brown border */}
            <div
              style={{
                width: "15px",
                background:
                  "linear-gradient(180deg, #b35a32 0%, #9c4c2a 40%, #7a3b21 100%)",
                height: "100%",
                zIndex: 1,
                boxShadow:
                  "inset 1px 0 3px rgba(255,255,255,0.1), inset -1px 0 3px rgba(0,0,0,0.15)",
              }}
            ></div>

            <div style={{ flex: 1, height: "100%", display: "flex", flexDirection: "column" }}>
              <div style={{ flex: 1, overflow: "hidden" }}>
                <img
                  src={bannerRightTop}
                  alt="Banner Top Right"
                  style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center bottom" }}
                />
              </div>
              <div style={{ flex: 1, overflow: "hidden" }}>
                <img
                  src={bannerRightBottom}
                  alt="Banner Bottom Right"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
            </div>

            {/* White Center Band */}
            <div className="white-center-band">
              {/* Left Linking Section */}
              <Link to="/cranes" className="hero-link-section-left">
                <h2 className="hero-band-title">CRANES & SERVICES</h2>
                <span className="hero-btn">EXPLORE CRANES</span>
              </Link>

              {/* Right Linking Section */}
              <Link to="/rigging" className="hero-link-section-right">
                <h2 className="hero-band-title hero-band-title-right">
                  RIGGING PRODUCTS &<br />
                  SERVICES
                </h2>
                <span className="hero-btn">EXPLORE RIGGING</span>
              </Link>
            </div>
          </div>

          {/* Center Logo Circle */}
          <div className="logo-circle">
            <div className="logo-circle-inner" />

            <img
              src={logo}
              alt="Core Lifting Products"
              style={{
                width: "85%",
                height: "auto",
                objectFit: "contain",
                position: "relative",
                zIndex: 3,
                imageRendering: "auto",
                willChange: "transform",
                backfaceVisibility: "hidden",
              }}
            />
          </div>
        </div>
      </section>
    </>
  );
}
