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

// New Orleans
import newOrleansBuilding from "../assets/locations/Core New Orleans/Core-New-Orleans-Building.png";
import newOrleans1 from "../assets/locations/Core New Orleans/Core-New-Orleans.jpeg";
import sample1 from "../assets/locations/sample-carousel-images/DSC04131.JPG";
import sample2 from "../assets/locations/sample-carousel-images/DSC_0154.JPG";
import sample3 from "../assets/locations/sample-carousel-images/IMG_1078.JPG";

// Odessa
import odessaBuilding from "../assets/locations/Core Odessa/Core-Odessa-Building.png";
import odessa1 from "../assets/locations/Core Odessa/Core-Odessa (1).jpeg";
import odessa2 from "../assets/locations/Core Odessa/Core-Odessa (2).jpeg";
import odessa3 from "../assets/locations/Core Odessa/Core-Odessa (3).jpeg";
import odessa7 from "../assets/locations/Core Odessa/Core-Odessa (7).jpeg";
import odessa8 from "../assets/locations/Core Odessa/Core-Odessa (8).jpeg";

// Houston
import houstonBuilding from "../assets/locations/Core Houston/Core-Houston-Building.png";
import houston1 from "../assets/locations/Core Houston/Core-Houston (1).jpeg";
import houston2 from "../assets/locations/Core Houston/Core-Houston (2).jpeg";
import houston4 from "../assets/locations/Core Houston/Core-Houston (4).jpeg";
import houston5 from "../assets/locations/Core Houston/Core-Houston (5).jpeg";
import houston6 from "../assets/locations/Core Houston/Core-Houston (6).jpeg";
import houston21 from "../assets/locations/Core Houston/Core-Houston (21).jpeg";
import houston25 from "../assets/locations/Core Houston/Core-Houston (25).jpeg";

// Lafayette
import lafayetteBuilding from "../assets/locations/Core Lafayette/Core-Lafayette-Building.png";
import lafayette1 from "../assets/locations/Core Lafayette/Core-Lafayette (1).jpeg";
import lafayette2 from "../assets/locations/Core Lafayette/Core-Lafayette (2).jpg";
import lafayette3 from "../assets/locations/Core Lafayette/Core-Lafayette (3).jpeg";
import lafayette4 from "../assets/locations/Core Lafayette/Core-Lafayette (4).jpeg";
import lafayette5 from "../assets/locations/Core Lafayette/Core-Lafayette (5).jpeg";
import lafayette11 from "../assets/locations/Core Lafayette/Core-Lafayette (11).jpeg";
import lafayette12 from "../assets/locations/Core Lafayette/Core-Lafayette (12).jpg";
import lafayette13 from "../assets/locations/Core Lafayette/Core-Lafayette (13).jpg";

// Houma
import houmaBuilding from "../assets/locations/Core Houma/Core-Houma-Building.png";
import houma1 from "../assets/locations/Core Houma/Core-Houma (1).jpg";
import houma2 from "../assets/locations/Core Houma/Core-Houma (2).png";
import houma3 from "../assets/locations/Core Houma/Core-Houma (3).jpeg";
import houma4 from "../assets/locations/Core Houma/Core-Houma (4).jpeg";
import houma5 from "../assets/locations/Core Houma/Core-Houma (5).jpeg";
import houma6 from "../assets/locations/Core Houma/Core-Houma (6).jpeg";
import houma22 from "../assets/locations/Core Houma/Core-Houma (22).jpeg";
import houma24 from "../assets/locations/Core Houma/Core-Houma (24).jpg";
import houma31 from "../assets/locations/Core Houma/Core-Houma (31).jpg";
import houma33 from "../assets/locations/Core Houma/Core-Houma (33).png";
import houma41 from "../assets/locations/Core Houma/Core-Houma (41).jpg";
import houma44 from "../assets/locations/Core Houma/Core-Houma (44).jpeg";

const locations = [
  {
    id: "odessa",
    name: "Odessa, Texas",
    address: "2301 Martin Luther King, Jr. Street, Odessa, TX 79761",
    phone: "(432) 332-0006",
    building: odessaBuilding,
    buildingPosition: "center 65%",
    images: [odessa1, odessa2, odessa3, odessa7, odessa8],
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
    building: houstonBuilding,
    images: [houston1, houston2, houston4, houston5, houston6, houston21, houston25],
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
    building: lafayetteBuilding,
    images: [lafayette1, lafayette2, lafayette3, lafayette4, lafayette5, lafayette11, lafayette12, lafayette13],
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
    building: houmaBuilding,
    images: [houma1, houma2, houma3, houma4, houma5, houma6, houma22, houma24, houma31, houma33, houma41, houma44],
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
    building: newOrleansBuilding,
    images: [newOrleans1, sample1, sample2, sample3],
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
