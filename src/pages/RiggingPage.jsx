import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import "./RiggingPage.css";
import LocationCarousel from "../components/LocationCarousel";

import riggingBanner1 from "../assets/riggingpage-banner-1.png";
import riggingBanner2 from "../assets/riggingpage-banner-2.png";
import riggingBanner3 from "../assets/riggingpage-banner-3.png";
import riggingBanner4 from "../assets/riggingpage-banner-4.png";

// Wire Rope & Cable images
import teufelbergerCollage from "../assets/rigging-products/Tberger-Collage.png";
import bridonCollage from "../assets/rigging-products/bridon-collage.png";
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
import riggingHardwareCrosby from "../assets/rigging-products/Crosby Shackle.jpg";
import riggingHardwareVanBeest from "../assets/rigging-products/Van Beest Shackle.jpg";
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
import svcLoadTesting1 from "../assets/new-imgs/Load-Testing2.jpg";
import svcLoadTesting2 from "../assets/new-imgs/Load-Testing1.jpeg";
import svcNonDestructive from "../assets/new-imgs/Non-Destructive-Testing.jpeg";
import svcInspections from "../assets/Core-Houston (2).jpeg";
import svcCraneBlock1 from "../assets/rigging-products/svc-crane-block-rebuilds-1.jpg";
import svcCraneBlock2 from "../assets/rigging-products/svc-crane-block-rebuilds-2.jpg";

// Rental images
import rentalLiftGear1 from "../assets/rigging-products/svc-lift-gear-engineering-2.png";
import rentalLiftGear2 from "../assets/rigging-products/svc-lift-gear-engineering-3.jpg";
import rentalLiftGear3 from "../assets/rigging-products/svc-lift-gear-engineering-4.png";
import rentalLiftGear4 from "../assets/rigging-products/svc-lift-gear-engineering-5.png";
import rentalLofts1 from "../assets/rigging-products/svc-product-specifications-1.jpg";

// Location building images
import newOrleansBuilding from "../assets/new-location-imgs/Core-New-Orleans-Building.jpg";
import odessaBuilding from "../assets/locations/Core Odessa/Core-Odessa-Building.png";
import houstonBuilding from "../assets/locations/Core Houston/Core-Houston-Building.png";
import lafayetteBuilding from "../assets/new-location-imgs/Core-Lafayette-Building.jpg";
import houmaBuilding from "../assets/new-location-imgs/Core-Houma-Building.jpg";

// New Orleans gallery
import newOrleans1 from "../assets/new-location-imgs/Core-New-Orleans.jpeg";
import newOrleans2 from "../assets/new-location-imgs/Core-New-Orleans-2.jpg";
import newOrleans3 from "../assets/new-location-imgs/Core-New-Orleans-3.jpg";

// Odessa gallery
import odessa1 from "../assets/locations/Core Odessa/Core-Odessa (1).jpeg";
import odessa2 from "../assets/locations/Core Odessa/Core-Odessa (2).jpeg";
import odessa3 from "../assets/locations/Core Odessa/Core-Odessa (3).jpeg";
import odessa7 from "../assets/locations/Core Odessa/Core-Odessa (7).jpeg";
import odessa8 from "../assets/locations/Core Odessa/Core-Odessa (8).jpeg";

// Houston gallery
import houston1 from "../assets/locations/Core Houston/Core-Houston (1).jpeg";
import houston2 from "../assets/locations/Core Houston/Core-Houston (2).jpeg";
import houston4 from "../assets/locations/Core Houston/Core-Houston (4).jpeg";
import houston5 from "../assets/locations/Core Houston/Core-Houston (5).jpeg";
import houston6 from "../assets/locations/Core Houston/Core-Houston (6).jpeg";
import houston21 from "../assets/locations/Core Houston/Core-Houston (21).jpeg";
import houston25 from "../assets/locations/Core Houston/Core-Houston (25).jpeg";

// Lafayette gallery
import lafayette1 from "../assets/locations/Core Lafayette/Core-Lafayette (1).jpeg";
import lafayette2 from "../assets/locations/Core Lafayette/Core-Lafayette (2).jpg";
import lafayette3 from "../assets/locations/Core Lafayette/Core-Lafayette (3).jpeg";
import lafayette4 from "../assets/locations/Core Lafayette/Core-Lafayette (4).jpeg";
import lafayette5 from "../assets/locations/Core Lafayette/Core-Lafayette (5).jpeg";
import lafayette11 from "../assets/locations/Core Lafayette/Core-Lafayette (11).jpeg";
import lafayette12 from "../assets/locations/Core Lafayette/Core-Lafayette (12).jpg";
import lafayette13 from "../assets/locations/Core Lafayette/Core-Lafayette (13).jpg";

// Houma gallery
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
    id: "loc-odessa",
    name: "Odessa, Texas",
    address: "2301 Martin Luther King, Jr. Street,  Odessa, TX 79761",
    phone: "(432) 332-0006",
    building: odessaBuilding,
    buildingPosition: "center 65%",
    images: [odessa1, odessa2, odessa3, odessa7, odessa8],
    services: [
      'Wire Rope Slings to 1-3/4"',
      "Taper annealing crane ropes",
      "Horizontal testing to 500,000 lbs",
      "Vertical testing to 150,000 lbs",
    ],
  },
  {
    id: "loc-houston",
    name: "Houston, Texas",
    address: "11550 Brittmore Park Drive,  Houston, TX 77041",
    phone: "(281) 671-7740",
    building: houstonBuilding,
    images: [houston1, houston2, houston4, houston5, houston6, houston21, houston25],
    services: [
      'Wire Rope Slings to 3-1/2"',
      "Taper annealing crane ropes",
      "Horizontal testing to 650,000 lbs",
      "Vertical testing to 250,000 lbs",
    ],
  },
  {
    id: "loc-lafayette",
    name: "Lafayette, Louisiana",
    address: "1250 Wall Road  Broussard, LA 70518",
    phone: "(337) 451-2929",
    building: lafayetteBuilding,
    images: [lafayette1, lafayette2, lafayette3, lafayette4, lafayette5, lafayette11, lafayette12, lafayette13],
    services: [
      'Wire Rope Slings to 2-1/2"',
      "Taper annealing crane ropes",
      "Horizontal testing to 1.3 million lbs",
      "Vertical testing to 250,000 lbs",
    ],
  },
  {
    id: "loc-houma",
    name: "Houma, Louisiana",
    address: "189 Thompson Road,  Houma, LA 70518",
    phone: "(985) 346-8270",
    building: houmaBuilding,
    images: [houma1, houma2, houma3, houma4, houma5, houma6, houma22, houma24, houma31, houma33, houma41, houma44],
    services: [
      'Wire Rope Slings to 3-1/2"',
      "Taper annealing crane ropes",
      "Horizontal testing to 600,000 lbs",
      "Vertical testing to 300,000 lbs",
    ],
  },
  {
    id: "loc-new-orleans",
    name: "New Orleans, Louisiana",
    address: "222 Gunther Lane,  Belle Chasse, LA 70037",
    phone: "(504) 833-6666",
    building: newOrleansBuilding,
    images: [newOrleans1, newOrleans2, newOrleans3],
    services: [
      'Wire Rope Slings to 1-3/4"',
      "Horizontal testing to 200,000 lbs",
      "Vertical testing to 250,000 lbs",
    ],
  },
];

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
    images: [teufelbergerCollage, bridonCollage, wireRopeCable1, wireRopeCable2],
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
    images: [riggingHardwareCrosby, riggingHardwareVanBeest, riggingHardware1],
    imageLayout: "row",
  },
  {
    id: "lubricators",
    title: "Lubricators / Lubricants",
    link: "/product-info#section-J",
    items: ["Lubricator", "Lubricator parts", "Lubricants"],
    images: [lubricators3, lubricators2, lubricators1],
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
    subtitle: "Odessa Location Only",
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
    link: "/product-info#section-S1",
    linkLabel: "Service Information",
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
    link: "/product-info#section-S1",
    linkLabel: "Service Information",
    items: [
      "Wire rope slings",
      "Chain slings",
      "Synthetic slings",
      "Shackles & fittings",
      "Hoists",
      "Wire rope",
      "Crane blocks",
    ],
    images: [svcInspections],
  },
  {
    title: "Non-Destructive Testing",
    link: "/product-info#section-S2",
    linkLabel: "Service Information",
    items: [
      "Magnetic particle inspection to level 3",
      "Ultrasonic testing by 3rd party upon request",
      "X-ray testing by 3rd party upon request",
    ],
    images: [svcNonDestructive],
  },
  {
    title: "Crane Block Rebuilds",
    link: "/product-info#section-S5",
    linkLabel: "Service Information",
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
    link: "/product-info#section-R1",
    linkLabel: "Rental Information",
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
];

/* ── Animation variants ── */

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.33, 1, 0.68, 1] },
  },
};

const imageReveal = {
  hidden: {
    opacity: 0,
    scale: 0.95,
    clipPath: "inset(10% 0px 10% 0px)",
  },
  visible: {
    opacity: 1,
    scale: 1,
    clipPath: "inset(-60px -60px -60px -60px)",
    transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] },
  },
};

/* ── Reusable Panel Component ── */

function RiggingPanel({ title, subtitle, items, images, link, linkLabel, index, id, imageLayout }) {
  const isEven = index % 2 === 0;
  const hasImages = images && images.length > 0;

  const textContent = (
    <div className={`rp-panel-text ${isEven ? "" : "rp-panel-text--alt"}`}>
      <div className="rp-panel-text-inner">
        <motion.h3 className="rp-panel-title" variants={itemVariants}>
          {title}
        </motion.h3>
        {subtitle && (
          <motion.p className="rp-panel-subtitle" variants={itemVariants}>
            {subtitle}
          </motion.p>
        )}

        <ul className="rp-panel-list">
          {items.map((item, i) => (
            <motion.li
              key={i}
              className="rp-panel-list-item"
              variants={itemVariants}
            >
              <span className="rp-dash">&#x2501;</span>
              <span className="rp-item-text">{item}</span>
            </motion.li>
          ))}
        </ul>

        {link && (
          <motion.div variants={itemVariants}>
            <Link
              to={link}
              className="rp-learn-more"
            >
              {linkLabel || "Product Information"}
            </Link>
          </motion.div>
        )}
      </div>
    </div>
  );

  const renderImage = (img, alt, delay = 0, className = "") => (
    <motion.div
      className={`rp-image-container ${className}`}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.8, delay }}
    >
      <motion.div
        className="rp-image-inner"
        variants={imageReveal}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        <img src={img} alt={alt} className="rp-image" />
      </motion.div>
    </motion.div>
  );

  const imageContent = hasImages ? (
    <div className={`rp-panel-visual ${isEven ? "" : "rp-panel-visual--alt"}`}>
      {images.length === 1 && renderImage(images[0], title, 0, "rp-image-container--single")}

      {images.length === 2 && (
        <div className="rp-image-grid rp-image-grid--2">
          {images.map((img, i) => renderImage(img, `${title} ${i + 1}`, i * 0.1))}
        </div>
      )}

      {images.length === 3 && imageLayout === "row" && (
        <div className="rp-image-grid rp-image-grid--3-row">
          {images.map((img, i) => renderImage(img, `${title} ${i + 1}`, i * 0.1))}
        </div>
      )}

      {images.length === 3 && imageLayout !== "row" && (
        <div className="rp-image-grid rp-image-grid--3">
          <div className="rp-image-grid--3-featured">
            {renderImage(images[0], `${title} 1`, 0, "rp-image-container--featured")}
          </div>
          <div className="rp-image-grid--3-pair">
            {renderImage(images[1], `${title} 2`, 0.1)}
            {renderImage(images[2], `${title} 3`, 0.2)}
          </div>
        </div>
      )}

      {images.length >= 4 && (
        <div className="rp-image-grid rp-image-grid--4plus">
          {images.map((img, i) => renderImage(img, `${title} ${i + 1}`, i * 0.08))}
        </div>
      )}
    </div>
  ) : null;

  return (
    <motion.div
      id={id}
      className={`rp-panel ${isEven ? "rp-panel--even" : ""} ${!hasImages ? "rp-panel--text-only" : ""}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1, margin: "0px 0px -100px 0px" }}
      transition={{ staggerChildren: 0.15 }}
    >
      {hasImages ? (
        <div className={`rp-panel-grid${isEven ? "" : " rp-panel-grid--images-left"}`}>
          {isEven ? (
            <>
              {textContent}
              {imageContent}
            </>
          ) : (
            <>
              {imageContent}
              {textContent}
            </>
          )}
        </div>
      ) : (
        <div className="rp-panel-grid rp-panel-grid--single">
          {textContent}
        </div>
      )}
    </motion.div>
  );
}

/* ── Main Page ── */

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
      {/* Hero */}
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

      {/* Wire Rope & Rigging Products */}
      <section id="products" className="rp-section">
        <div className="rp-section-inner">
          <div className="rp-sidebar">
            <div className="rp-sidebar-sticky">
              <motion.div
                className="rp-sidebar-accent"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              />
              <motion.h2
                className="rp-sidebar-title"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.15, ease: [0.33, 1, 0.68, 1] }}
              >
                Wire Rope &amp; Rigging Products
              </motion.h2>
              <div className="rp-sidebar-line" />
            </div>
          </div>

          <div className="rp-content">
            {products.map((product, index) => (
              <RiggingPanel
                key={product.id}
                id={product.id}
                title={product.title}
                subtitle={product.subtitle}
                items={product.items}
                images={product.images}
                link={product.link}
                imageLayout={product.imageLayout}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="rp-section">
        <div className="rp-section-inner">
          <div className="rp-sidebar">
            <div className="rp-sidebar-sticky">
              <motion.div
                className="rp-sidebar-accent"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              />
              <motion.h2
                className="rp-sidebar-title"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.15, ease: [0.33, 1, 0.68, 1] }}
              >
                Services
              </motion.h2>
              <div className="rp-sidebar-line" />
            </div>
          </div>

          <div className="rp-content">
            {services.map((svc, index) => (
              <RiggingPanel
                key={svc.title}
                title={svc.title}
                items={svc.items}
                images={svc.images}
                link={svc.link}
                linkLabel={svc.linkLabel}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Rentals */}
      <section id="rentals" className="rp-section">
        <div className="rp-section-inner">
          <div className="rp-sidebar">
            <div className="rp-sidebar-sticky">
              <motion.div
                className="rp-sidebar-accent"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              />
              <motion.h2
                className="rp-sidebar-title"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.15, ease: [0.33, 1, 0.68, 1] }}
              >
                Rentals
              </motion.h2>
              <motion.p
                className="rp-sidebar-subtitle"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3, ease: [0.33, 1, 0.68, 1] }}
              >
                Lift Gear Engineering - Rentals - Sales
              </motion.p>
              <div className="rp-sidebar-line" />
            </div>
          </div>

          <div className="rp-content">
            {rentals.map((rental, index) => (
              <RiggingPanel
                key={rental.title}
                title={rental.title}
                items={rental.items}
                images={rental.images}
                link={rental.link}
                linkLabel={rental.linkLabel}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Locations */}
      <section id="locations" className="rp-section">
        <h2 className="rigging-locations-heading">Locations</h2>
        <div className="rigging-locations-list">
          {locations.map((loc) => (
            <div key={loc.id} className="rigging-location-carousel-wrap">
              <LocationCarousel location={loc} />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
