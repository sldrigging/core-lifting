import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./RiggingPage.css";

import riggingBanner1 from "../assets/riggingpage-banner-1.png";
import riggingBanner2 from "../assets/riggingpage-banner-2.png";
import riggingBanner3 from "../assets/riggingpage-banner-3.png";
import riggingBanner4 from "../assets/riggingpage-banner-4.png";

// Wire Rope & Cable images
import wireRopeCable1 from "../assets/rigging-products/wire-rope-and-cable-1.jpg";
import wireRopeCable2 from "../assets/rigging-products/wire-rope-and-cable-2.jpg";

// Wire Rope Assemblies images
import wireRopeAssembly1 from "../assets/rigging-products/wire-rope-assemblies-1.jpg";
import wireRopeAssembly2 from "../assets/rigging-products/wire-rope-assemblies-2.png";
import wireRopeAssembly3 from "../assets/rigging-products/wire-rope-assemblies-3.jpg";

// Chain & Fittings images
import chainFittings1 from "../assets/rigging-products/chain-and-fittings-2.jpg";
import chainFittings2 from "../assets/rigging-products/chain-and-fittings-3.jpg";
import chainFittings3 from "../assets/rigging-products/chain-and-fittings-4.jpg";

// Synthetics images
import synthetics1 from "../assets/rigging-products/synthetics-1.jpg";
import synthetics2 from "../assets/rigging-products/synthetics-2.jpg";
import synthetics3 from "../assets/rigging-products/synthetics-4.jpg";

// Rigging Hardware images
import riggingHardware1 from "../assets/rigging-products/rigging-hardware-3.jpg";

// Lubricators/Lubricants images
import lubricators1 from "../assets/rigging-products/lubricators-lubricants-1.jpg";
import lubricators2 from "../assets/rigging-products/lubricators-lubricants-2.png";
import lubricators3 from "../assets/rigging-products/lubricators-lubricants-6.jpg";

// Load Securement images
import loadSecurement1 from "../assets/rigging-products/load-securement-1.jpg";
import loadSecurement2 from "../assets/rigging-products/load-securement-4.jpg";
import loadSecurement3 from "../assets/rigging-products/load-securement-5.jpg";

// Cordage images
import cordage1 from "../assets/rigging-products/cordage-1.jpg";
import cordage2 from "../assets/rigging-products/cordage-2.jpg";
import cordage3 from "../assets/rigging-products/cordage-6.jpg";

// Hoists images
import hoists1 from "../assets/rigging-products/hoists-service-repairs-3.png";
import hoists2 from "../assets/rigging-products/hoists-service-repairs-4.png";
import hoists3 from "../assets/rigging-products/hoists-service-repairs-6.png";

// Winches & Accessories images
import winches1 from "../assets/rigging-products/odessa-branch-17.png";
import winches2 from "../assets/rigging-products/odessa-branch-18.jpg";
import winches3 from "../assets/rigging-products/odessa-branch-19.png";

// Service images
import svcLoadTesting1 from "../assets/rigging-products/svc-load-testing-1.jpg";
import svcLoadTesting2 from "../assets/rigging-products/svc-load-testing-2.jpg";
import svcCraneBlock1 from "../assets/rigging-products/svc-crane-block-rebuilds-1.jpg";
import svcCraneBlock2 from "../assets/rigging-products/svc-crane-block-rebuilds-2.jpg";

// Rental images
import rentalLiftGear1 from "../assets/rigging-products/svc-lift-gear-engineering-2.png";
import rentalLiftGear2 from "../assets/rigging-products/svc-lift-gear-engineering-3.jpg";
import rentalLiftGear3 from "../assets/rigging-products/svc-lift-gear-engineering-4.png";
import rentalLiftGear4 from "../assets/rigging-products/svc-lift-gear-engineering-5.png";
import rentalLofts1 from "../assets/rigging-products/svc-product-specifications-1.jpg";

const products = [
  {
    id: "wire-rope-cable",
    title: "Wire Rope & Cable",
    link: "/product-info#section-A",
    items: [
      "Bridon & Teufelberger High Performance Ropes",
      "Non-Rotational Ropes",
      "General Purpose Wire Ropes",
      "Galvanized Cable",
      "Stainless Steel Cable",
    ],
    images: [wireRopeCable1, wireRopeCable2],
  },
  {
    id: "wire-rope-assemblies",
    title: "Wire Rope Assemblies",
    link: "/product-info#section-B",
    items: [
      'Lifting sling assemblies to 3.5"',
      "DNV 2.7-1 sling assemblies",
      "Boom pendant lines",
      "Raising lines",
      "Mooring lines",
      "Winch lines",
      "Pipe slings",
      "Braided slings",
      "Spelter socket assemblies",
    ],
    images: [wireRopeAssembly1, wireRopeAssembly2, wireRopeAssembly3],
  },
  {
    id: "chain-fittings",
    title: "Chain & Fittings",
    link: "/product-info#section-F",
    items: [
      "Alloy chain slings",
      "Grade 80 & 100 alloy chain",
      "Alloy chain fittings",
      "Grade 70, 43, 30 chain",
      "Grade 70, 43, 30 chain fittings",
      "Winch tail chains",
    ],
    images: [chainFittings1, chainFittings2, chainFittings3],
  },
  {
    id: "synthetics",
    title: "Synthetics",
    link: "/product-info#section-B",
    items: [
      'Nylon & Polyester Web Slings 1" to 12"',
      "Polyester Roundslings",
      "HMPE High Performance Rope Lifting Slings",
    ],
    images: [synthetics1, synthetics2, synthetics3],
  },
  {
    id: "rigging-hardware",
    title: "Rigging Hardware",
    link: "/product-info#section-C",
    items: [
      "Shackles, Clips, Thimbles, Turnbuckles, Hooks, Eye Bolts, Links, Swivels, Sockets, Hoist Rings",
      "ROV Fittings",
      "Blocks",
      "Plate Clamps",
      "Chain & Lever Hoists",
      "Rigging Tools",
      "Steamboat Ratchets",
    ],
    images: [riggingHardware1],
  },
  {
    id: "lubricators",
    title: "Lubricators / Lubricants",
    link: "/product-info#section-J",
    items: ["Lubricator", "Lubricator parts", "Lubricants"],
    images: [lubricators1, lubricators2, lubricators3],
  },
  {
    id: "load-securement",
    title: "Load Securement",
    link: "/product-info#section-G",
    items: [
      "Ratchet binders",
      "Binder chains",
      "Winch straps",
      "Ratchet straps",
    ],
    images: [loadSecurement1, loadSecurement2, loadSecurement3],
  },
  {
    id: "cordage",
    title: "Cordage",
    link: "/product-info#section-H",
    items: [
      "HMPE Ropes",
      "Nylon 3-Strand",
      "Polypropylene 3-Strand",
      "Polydac 3-Strand",
      "Manila 3-Strand",
      "Double braid ropes",
      "Manila",
      "Towing Shock Lines",
      "8-Strand Mooring Ropes",
    ],
    images: [cordage1, cordage2, cordage3],
  },
  {
    id: "hoists",
    title: "Hoists, Service & Repairs",
    link: "/product-info#section-E",
    items: [
      "Pneumatic & hydraulic hoists",
      "Trolleys",
      "Parts",
      "Service",
      "Repairs",
    ],
    images: [hoists1, hoists2, hoists3],
  },
  {
    id: "winches",
    title: "Winches & Accessories",
    link: "/product-info#section-E",
    items: [
      "Winches, PTOs & Drives",
      "Pneumatic & hydraulic hoists",
      "Trolleys",
      "Parts",
      "Service",
      "Repairs",
    ],
    images: [winches1, winches2, winches3],
  },
];

const services = [
  {
    title: "Load Testing",
    items: [
      "Hoist load testing",
      "Sling load testing",
      "Shackle & fitting testing",
      "Block testing",
      "Water bag testing",
      "Pad eye testing",
      "Horizontal capacity to 800 tons",
      "Vertical capacity to 250 tons",
    ],
    images: [svcLoadTesting1, svcLoadTesting2],
  },
  {
    title: "Inspections",
    items: [
      "Wire rope slings",
      "Chain slings",
      "Synthetic slings",
      "Shackles & fittings",
      "Hoists",
      "Wire rope",
      "Crane blocks",
    ],
    images: [],
  },
  {
    title: "Non-Destructive Testing",
    items: [
      "Magnetic particle inspection to level 3",
      "Ultrasonic testing by 3rd party upon request",
      "X-ray testing by 3rd party upon request",
    ],
    images: [],
  },
  {
    title: "Repairs",
    items: ["Hoists", "Winches", "PTOs", "Crane blocks", "Synthetic slings"],
    images: [],
  },
  {
    title: "On-Site Socketing",
    items: ["Spelter socketing", "High performance crane rope buttons"],
    images: [],
  },
  {
    title: "Truck Winch Line Servicing",
    items: [
      "Wire rope replacement",
      "End button replacement",
      "Thimble and hook replacement",
    ],
    images: [],
  },
  {
    title: "Crane Block Rebuilds",
    items: [
      "Tear down & blast clean",
      "Magnetic particle inspect hook and perform dimensional checks",
      "Replace sheave bearings",
      "Replace or repair sheaves as necessary",
      "Replace or repair pins as necessary",
      "Paint & load test",
    ],
    images: [svcCraneBlock1, svcCraneBlock2],
  },
];

const rentals = [
  {
    title: "Rental Equipment",
    items: [
      "Spooling units",
      "Rigging lofts",
      "Blocks",
      "Shackles",
      "Beam clamps",
      "Air hoists & tuggers",
      "Spreader bars, beams & frames",
    ],
    images: [rentalLiftGear1, rentalLiftGear2, rentalLiftGear3, rentalLiftGear4],
  },
  {
    title: "Rigging Lofts",
    items: [
      'Lifting sling assemblies to 3.5"',
      "DNV 2.7-1 sling assemblies",
      "Boom pendant lines",
      "Raising lines",
      "Mooring lines",
      "Winch lines",
      "Pipe slings",
      "Braided slings",
      "Spelter socket assemblies",
    ],
    images: [rentalLofts1],
  },
];

export default function RiggingPage() {
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
      {/* 1. Hero */}
      <section className="rigging-hero-section">
        <div className="rigging-hero-container">
          <img
            src={riggingBanner1}
            alt="Rigging Top Banner"
            className="rigging-top-banner"
          />
          <div className="rigging-images-grid">
            <div className="rigging-grid-item">
              <img
                src={riggingBanner2}
                alt="Rigging Service 1"
                className="rigging-grid-img left-img"
              />
            </div>
            <div className="rigging-grid-item">
              <img
                src={riggingBanner3}
                alt="Rigging Service 2"
                className="rigging-grid-img mid-img"
              />
            </div>
            <div className="rigging-grid-item">
              <img
                src={riggingBanner4}
                alt="Rigging Service 3"
                className="rigging-grid-img right-img"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Navigation Links */}
      <section>
        <nav className="rigging-nav-bar">
          <Link to="/product-info" className="rigging-nav-link">
            Technical Documents
          </Link>
          <a href="#services" className="rigging-nav-link">
            Services
          </a>
          <a href="#rentals" className="rigging-nav-link">
            Rentals
          </a>
        </nav>
      </section>

      {/* Wire Rope & Rigging Products */}
      <section id="products" className="products-section">
        <h2>Wire Rope & Rigging Products</h2>
        <div className="products-list">
          {products.map((product) => (
            <div key={product.title} id={product.id} className="product-card">
              <div className="product-card-content">
                <h3>{product.title}</h3>
                <ul className="product-list">
                  {product.items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
                <a href={product.link} className="product-learn-more">
                  Learn More
                </a>
              </div>
              <div className="product-card-images">
                {product.images.map((img, i) => (
                  <img
                    key={i}
                    src={img}
                    alt={`${product.title} ${i + 1}`}
                    className="product-img"
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 2. Services */}
      <section id="services" className="products-section">
        <h2>Services</h2>
        <div className="products-list">
          {services.map((svc) => (
            <div
              key={svc.title}
              className={`product-card${svc.images.length === 0 ? " product-card--no-images" : ""}`}
            >
              <div className="product-card-content">
                <h3>{svc.title}</h3>
                <ul className="product-list">
                  {svc.items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
              {svc.images.length > 0 && (
                <div className="product-card-images">
                  {svc.images.map((img, i) => (
                    <img
                      key={i}
                      src={img}
                      alt={`${svc.title} ${i + 1}`}
                      className="product-img"
                    />
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* 3. Rentals */}
      <section id="rentals" className="products-section">
        <h2>Rentals</h2>
        <p className="rentals-subtitle">
          Lift Gear Engineering - Rentals - Sales
        </p>
        <div className="products-list">
          {rentals.map((rental) => (
            <div key={rental.title} className="product-card">
              <div className="product-card-content">
                <h3>{rental.title}</h3>
                <ul className="product-list">
                  {rental.items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
              {rental.images.length > 0 && (
                <div className="product-card-images">
                  {rental.images.map((img, i) => (
                    <img
                      key={i}
                      src={img}
                      alt={`${rental.title} ${i + 1}`}
                      className="product-img"
                    />
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
