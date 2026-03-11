import { Link } from "react-router-dom";
import LocationMap from "../components/LocationMap";
import LocationCarousel from "../components/LocationCarousel";

import "./HomePage.css";
import { LiquidMetal } from "@paper-design/shaders-react";

import banner1 from "../assets/homepage-banner-1.png";
import banner2 from "../assets/homepage-banner-2.png";
import logo from "../assets/Core-Lifting-Products-Logo.png";

import mapImage from "../assets/locations/map.png";
import odessaImg from "../assets/locations/odessa-location.png";
import houstonImg from "../assets/locations/houston-location.png";
import lafayetteImg from "../assets/locations/lafayette.png";
import houmaImg from "../assets/locations/houma.png";
import newOrleansImg from "../assets/locations/new-orleans.png";

const locations = [
  {
    id: "odessa",
    name: "Odessa, Texas",
    address: "2301 Martin Luther King, Jr. Street, Odessa, TX 79761",
    phone: "(432) 332-0006",
    images: [odessaImg],
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
    images: [houstonImg],
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
    images: [lafayetteImg],
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
    images: [houmaImg],
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
    images: [newOrleansImg],
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
            <div style={{ flex: 1, height: "100%" }}>
              <img
                src={banner1}
                alt="Banner Left"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </div>
            {/* Middle brown border */}
            <div
              style={{
                width: "15px",
                background: "#9c4c2a",
                height: "100%",
                zIndex: 1,
              }}
            ></div>

            <div style={{ flex: 1, height: "100%" }}>
              <img
                src={banner2}
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
              <div className="hero-link-section-left">
                <h2 className="hero-band-title">CRANES & SERVICES</h2>
                <Link to="/cranes" className="hero-btn">
                  LEARN MORE
                </Link>
              </div>

              {/* Right Linking Section */}
              <div className="hero-link-section-right">
                <h2 className="hero-band-title hero-band-title-right">
                  RIGGING PRODUCTS &<br />
                  SERVICES
                </h2>
                <Link to="/rigging" className="hero-btn">
                  LEARN MORE
                </Link>
              </div>
            </div>
          </div>

          {/* Center Logo Circle */}
          <div className="logo-circle">
            <div className="liquid-metal-container">
              <LiquidMetal
                colorBack="#f2f2f2"
                colorTint="#ffffff"
                softness={1}
                repetition={2}
                shiftRed={0.1}
                shiftBlue={-0.1}
                distortion={0.5}
                contour={0.4}
                shape="diamond"
                scale={2}
                speed={0.5}
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                }}
              />
            </div>
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
              }}
            />
          </div>
        </div>
      </section>

      {/* About Us */}
      <section>
        <h2>About Us</h2>
        <p>
          Placeholder about us content. Core Rigging is a leading provider of
          wire rope, rigging products, and crane services across the Gulf Coast
          region.
        </p>
      </section>

      {/* Locations Map */}
      <LocationMap locations={locations} mapImage={mapImage} />

      {/* Location Carousels */}
      {locations.map((loc) => (
        <LocationCarousel key={loc.id} location={loc} />
      ))}
    </>
  );
}
