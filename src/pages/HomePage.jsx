import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import LocationMap from "../components/LocationMap";
import LocationCarousel from "../components/LocationCarousel";

import "./HomePage.css";

import craneBanner1 from "../assets/cranes/banner-1.png";
import craneBanner2 from "../assets/cranes/banner-2.png";
import homepageBanner2 from "../assets/homepage-banner-2.png";
import logo from "../assets/core-logo.png";

import mapImage from "../assets/locations/core-map.png";
import odessaImg from "../assets/locations/odessa-location.png";
import houstonImg from "../assets/locations/houston-location.png";
import lafayetteImg from "../assets/locations/lafayette.png";
import houmaImg from "../assets/locations/houma.png";
import newOrleansImg from "../assets/locations/new-orleans.png";

// Sample carousel placeholder images
import sample1 from "../assets/locations/sample-carousel-images/DSC04131.JPG";
import sample2 from "../assets/locations/sample-carousel-images/DSC_0154.JPG";
import sample3 from "../assets/locations/sample-carousel-images/IMG_1078.JPG";
import sample4 from "../assets/locations/sample-carousel-images/LARGEREWIND.JPG";
import sample5 from "../assets/locations/sample-carousel-images/P8184142.JPG";
import sample6 from "../assets/locations/sample-carousel-images/WIROP600-C.JPG";
import sample7 from "../assets/locations/sample-carousel-images/chris-057.jpg";

const locations = [
  {
    id: "odessa",
    name: "Odessa, Texas",
    address: "2301 Martin Luther King, Jr. Street, Odessa, TX 79761",
    phone: "(432) 332-0006",
    images: [odessaImg, sample1, sample5],
    services: [
      'Wire Rope Slings to 1-3/4"',
      "Horizontal Testing to 300t",
      "Vertical Testing to 150t",
      "Rope Taper/Annealing",
      "Winch/PTO Repairs",
      "Rental Equipment",
    ],
  },
  {
    id: "houston",
    name: "Houston, Texas",
    address: "11550 Brittmore Park Drive, Houston, TX 77041",
    phone: "(281) 671-7740",
    images: [houstonImg, sample2, sample6],
    services: [
      'Wire Rope Slings to 3-1/2"',
      "Horizontal Testing to 300t",
      "Vertical Testing to 150t",
      "Rope Taper/Annealing",
      "Hoist Repairs",
      "Rental Equipment",
    ],
  },
  {
    id: "lafayette",
    name: "Lafayette, Louisiana",
    address: "1250 Wall Road, Broussard, LA 70518",
    phone: "(337) 451-2929",
    images: [lafayetteImg, sample3, sample7],
    services: [
      'Wire Rope Slings to 3-1/2"',
      "Horizontal Testing to 300t",
      "Vertical Testing to 150t",
      "Rope Taper/Annealing",
      "Hoist Repairs",
      "Rental Equipment",
    ],
  },
  {
    id: "houma",
    name: "Houma, Louisiana",
    address: "189 Thompson Road, Houma, LA 70363",
    phone: "(985) 346-8270",
    images: [houmaImg, sample4, sample1],
    services: [
      'Wire Rope Slings to 3-1/2"',
      "Horizontal Testing to 300t",
      "Vertical Testing to 150t",
      "Rope Taper/Annealing",
      "Hoist Repairs",
      "Rental Equipment",
    ],
  },
  {
    id: "new-orleans",
    name: "New Orleans, Louisiana",
    address: "222 Gunther Lane, Belle Chasse, LA 70037",
    phone: "(504) 833-6666",
    images: [newOrleansImg, sample5, sample2],
    services: [
      'Wire Rope Slings to 1-3/4"',
      "Horizontal Testing to 300t",
      "Vertical Testing to 150t",
      "Rope Taper/Annealing",
      "Hoist Repairs",
      "Rental Equipment",
    ],
  },
];

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

            <div style={{ flex: 1, height: "100%" }}>
              <img
                src={homepageBanner2}
                alt="Banner Right"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "center 20%",
                }}
              />
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

          {/* Scroll Indicator */}
          <div className="scroll-indicator" aria-hidden="true">
            <div className="scroll-mouse">
              <div className="scroll-wheel" />
            </div>
            <span className="scroll-label">SCROLL</span>
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

      {/* About Us */}
      <section id="about-us" className="home-section">
        <h2 className="home-section-heading">About Us</h2>
        <div className="home-card">
          <p className="home-card-text">
            Placeholder about us content. Core Rigging is a leading provider of
            wire rope, rigging products, and crane services across the Gulf
            Coast region.
          </p>
        </div>
      </section>

      {/* Locations */}
      <section id="locations" className="home-section home-section--wide">
        <h2 className="home-section-heading">Locations</h2>
        <div className="home-card home-card--map">
          <LocationMap locations={locations} mapImage={mapImage} />
        </div>
      </section>

      {/* Location Carousels */}
      <section className="home-section home-section--wide">
        <div className="home-carousel-grid">
          {locations.map((loc) => (
            <div key={loc.id} className="home-card home-card--carousel">
              <LocationCarousel location={loc} />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
