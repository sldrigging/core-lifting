import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import "./RiggingPage.css";
import LocationCarousel from "../components/LocationCarousel";

/* ── Hero collage images (3:2) ── */
import heroChainSlings from "../assets/imgs-rv/3-2/Rigging Hero Collage/Chain-Slings.jpg";
import heroRiggingFab from "../assets/imgs-rv/3-2/Rigging Hero Collage/Rigging-Fab.jpg";
import heroSewing from "../assets/imgs-rv/3-2/Rigging Hero Collage/Sewing.jpg";
import heroSpooling from "../assets/imgs-rv/3-2/Rigging Hero Collage/Spooling.jpg";
import heroVerticalTest from "../assets/imgs-rv/3-2/Rigging Hero Collage/Vertical-Test-bed.jpg";
import heroWinchRepair from "../assets/imgs-rv/3-2/Rigging Hero Collage/Winch-Repair.jpg";
import heroWireRope from "../assets/imgs-rv/3-2/Rigging Hero Collage/Wire-Rope.jpg";
import heroHoist from "../assets/imgs-rv/Hoist.jpg";

/* ── Product slide images ── */
import imgHoists from "../assets/imgs-rv/Hoists.jpg";
import imgWireRope from "../assets/imgs-rv/Wire-Rope.jpg";
import imgWireRopeAssemblies from "../assets/imgs-rv/3-2/Wire-Rope-Assemblies.jpg";
import imgRiggingHardware from "../assets/imgs-rv/Rigging-Hardware.jpg";
import imgChainSlings from "../assets/imgs-rv/Chain-Slings.jpg";
import imgSynthetics from "../assets/imgs-rv/Synthetic-Slings.jpg";
import imgLubricator from "../assets/imgs-rv/Lubricator-.jpg";

/* ── Service slide images ── */
import imgAnnealing from "../assets/imgs-rv/Annealing.jpg";
import imgLoadTesting from "../assets/imgs-rv/Load-Testing.jpg";
import imgPadEye from "../assets/imgs-rv/3-2/Portable-Pad-Eye-Testing.jpg";
import imgInspections from "../assets/imgs-rv/3-2/Inspections.jpg";
import imgNDT from "../assets/imgs-rv/3-2/NDT.jpg";
import imgWinchServicing from "../assets/imgs-rv/Winch-Servicing.jpg";
import imgHoistRepair from "../assets/imgs-rv/Hoist-Repair.jpg";
import imgBlockRebuilds from "../assets/imgs-rv/3-2/Block-Rebuilds.jpg";
import imgWinchLineServicing from "../assets/imgs-rv/Winch-Line-Servicing.jpg";
import imgRentals from "../assets/imgs-rv/Rentals-.jpg";

/* ── Logos ── */
import jdnLogo from "../assets/imgs-rv/jdn-repair-center-blue.png";

/* ── Location building images ── */
import newOrleansBuilding from "../assets/new-location-imgs/Sea-Ropes-New-Orleans-Building.jpg";
import odessaBuilding from "../assets/imgs-rv/Core-Odessa.jpg";
import houstonBuilding from "../assets/locations/Core Houston/Core-Houston-Building.png";
import lafayetteBuilding from "../assets/imgs-rv/Core-Lafayette.jpg";
import houmaBuilding from "../assets/new-location-imgs/Sea-Ropes-Houma-Building.jpg";

import newOrleans1 from "../assets/new-location-imgs/Core-New-Orleans.jpeg";
import newOrleans2 from "../assets/new-location-imgs/Core-New-Orleans-2.jpg";
import newOrleans3 from "../assets/new-location-imgs/Core-New-Orleans-3.jpg";

import odessa1 from "../assets/locations/Core Odessa/Core-Odessa (1).jpeg";
import odessa2 from "../assets/locations/Core Odessa/Core-Odessa (2).jpeg";
import odessa3 from "../assets/locations/Core Odessa/Core-Odessa (3).jpeg";
import odessa7 from "../assets/locations/Core Odessa/Core-Odessa (7).jpeg";
import odessa8 from "../assets/locations/Core Odessa/Core-Odessa (8).jpeg";

import houston1 from "../assets/locations/Core Houston/Core-Houston (1).jpeg";
import houston2 from "../assets/locations/Core Houston/Core-Houston (2).jpeg";
import houston4 from "../assets/locations/Core Houston/Core-Houston (4).jpeg";
import houston5 from "../assets/locations/Core Houston/Core-Houston (5).jpeg";
import houston6 from "../assets/locations/Core Houston/Core-Houston (6).jpeg";
import houston21 from "../assets/locations/Core Houston/Core-Houston (21).jpeg";
import houston25 from "../assets/locations/Core Houston/Core-Houston (25).jpeg";

import lafayette1 from "../assets/locations/Core Lafayette/Core-Lafayette (1).jpeg";
import lafayette2 from "../assets/locations/Core Lafayette/Core-Lafayette (2).jpg";
import lafayette3 from "../assets/locations/Core Lafayette/Core-Lafayette (3).jpeg";
import lafayette4 from "../assets/locations/Core Lafayette/Core-Lafayette (4).jpeg";
import lafayette5 from "../assets/locations/Core Lafayette/Core-Lafayette (5).jpeg";
import lafayette11 from "../assets/locations/Core Lafayette/Core-Lafayette (11).jpeg";
import lafayette12 from "../assets/locations/Core Lafayette/Core-Lafayette (12).jpg";
import lafayette13 from "../assets/locations/Core Lafayette/Core-Lafayette (13).jpg";

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

/* ── Hero collage tiles (4×2) ── */
const heroCollage = [
  heroSewing,
  heroChainSlings,
  heroHoist,
  heroWireRope,
  heroVerticalTest,
  heroRiggingFab,
  heroWinchRepair,
  heroSpooling,
];

/* ── Slide data ── */

const products = [
  {
    id: "hoists",
    title: "HOISTS",
    bullets: [],
    image: imgHoists,
    position: "tr",
    showJdnLogo: true,
    jdnLogoInline: true,
    link: "/product-info#section-E",
    linkLabel: "PRODUCT INFORMATION",
  },
  {
    id: "wire-rope",
    title: "WIRE ROPE",
    bullets: [
      "BRIDON Crane Ropes & Drill Lines",
      "TEUFELBERGER Crane Ropes",
      "REDAELLI Crane Ropes",
      "General Purpose Ropes",
    ],
    image: imgWireRope,
    position: "tl",
    link: "/product-info#section-A",
    linkLabel: "PRODUCT INFORMATION",
  },
  {
    id: "wire-rope-assemblies",
    title: "WIRE ROPE\nASSEMBLIES",
    bullets: [
      "Lifting slings",
      "Socket assemblies",
      "Winch lines",
      "Boom pendants",
    ],
    image: imgWireRopeAssemblies,
    position: "bl",
    link: "/product-info#section-B",
    linkLabel: "PRODUCT INFORMATION",
  },
  {
    id: "rigging-hardware",
    title: "RIGGING\nHARDWARE",
    bullets: [
      "Crosby, Gunnebo, Green Pin",
      "Shackles",
      "Blocks",
      "Hooks",
      "Turnbuckles",
      "Hoist rings",
      "Plate clamps",
    ],
    image: imgRiggingHardware,
    position: "br",
    link: "/product-info#section-C",
    linkLabel: "PRODUCT INFORMATION",
  },
  {
    id: "chain-products",
    title: "CHAIN\nPRODUCTS",
    bullets: ["Chain slings", "Industrial chains", "Chain fittings"],
    image: imgChainSlings,
    position: "cl",
    link: "/product-info#section-F",
    linkLabel: "PRODUCT INFORMATION",
  },
  {
    id: "synthetics",
    title: "SYNTHETICS",
    bullets: ["Web slings", "Roundslings"],
    image: imgSynthetics,
    position: "cr",
    link: "/product-info#section-B",
    linkLabel: "PRODUCT INFORMATION",
  },
  {
    id: "lubricators",
    title: "LUBRICATORS",
    bullets: [
      "Viper brand wire rope lubricators, cleaners, parts",
      "Wire rope lubrication",
    ],
    image: imgLubricator,
    position: "tr",
    link: "/product-info#section-J",
    linkLabel: "PRODUCT INFORMATION",
  },
];

const services = [
  {
    id: "taper-annealing",
    title: "TAPER ANNEALING",
    subtitle: "For high performance crane ropes",
    bullets: [],
    image: imgAnnealing,
    position: "tc",
  },
  {
    id: "load-testing",
    title: "LOAD TESTING",
    bullets: ["Horizontal testing", "Vertical testing", "Water bag testing"],
    image: imgLoadTesting,
    position: "tr",
    link: "/product-info#section-S1",
    linkLabel: "SERVICE INFORMATION",
  },
  {
    id: "portable-pad-eye-testing",
    title: "PORTABLE PAD\nEYE TESTING",
    bullets: [],
    image: imgPadEye,
    position: "tl",
    link: "/product-info#section-S1",
    linkLabel: "SERVICE INFORMATION",
  },
  {
    id: "inspections",
    title: "INSPECTIONS",
    bullets: ["Sling inspections", "Fitting inspections"],
    image: imgInspections,
    position: "tr",
    link: "/product-info#section-S1",
    linkLabel: "SERVICE INFORMATION",
  },
  {
    id: "ndt",
    title: "NDT",
    subtitle: "Certified mag particle inspections",
    bullets: [],
    image: imgNDT,
    position: "bc",
    link: "/product-info#section-S2",
    linkLabel: "SERVICE INFORMATION",
  },
  {
    id: "winch-servicing",
    title: "WINCH SERVICING",
    bullets: ["Repair", "Testing"],
    image: imgWinchServicing,
    position: "cl",
    link: "/product-info#section-S3",
    linkLabel: "SERVICE INFORMATION",
  },
  {
    id: "hoist-repair",
    title: "HOIST REPAIR",
    bullets: [
      "JD Neuhaus certified repair facility",
      "Disassemble & inspect",
      "Replace worn parts",
      "Test & certify",
    ],
    image: imgHoistRepair,
    position: "tr",
    showJdnLogo: true,
    link: "/product-info#section-S3",
    linkLabel: "SERVICE INFORMATION",
  },
  {
    id: "block-rebuilds",
    title: "BLOCK REBUILDS",
    bullets: [
      "Disassemble & inspect",
      "Replace bearings",
      "Sheave repair or replacement",
      "Hook NDT",
      "Load test",
    ],
    image: imgBlockRebuilds,
    position: "bl",
    link: "/product-info#section-S5",
    linkLabel: "SERVICE INFORMATION",
  },
  {
    id: "winch-line-servicing",
    title: "WINCH LINE SERVICING",
    bullets: ["Replacement wire rope", "Replace end fittings"],
    image: imgWinchLineServicing,
    position: "tc",
    link: "/product-info#section-S6",
    linkLabel: "SERVICE INFORMATION",
  },
];

const rentals = [
  {
    id: "rentals",
    title: "RENTALS",
    bullets: ["Spreader bars", "Slings", "Blocks", "Shackles"],
    image: imgRentals,
    position: "tl",
    link: "/product-info#section-R1",
    linkLabel: "RENTAL INFORMATION",
  },
];

const locations = [
  {
    id: "loc-odessa",
    name: "Odessa, Texas",
    company: "Core Lifting",
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
    company: "Core Lifting",
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
    company: "Core Lifting",
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
    company: "Sea Ropes",
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
    company: "Sea Ropes",
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

/* ── Animation variants ── */

const overlayVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.33, 1, 0.68, 1] },
  },
};

/* ── Slide ── */

function Slide({ slide }) {
  const {
    id,
    title,
    subtitle,
    bullets,
    image,
    position = "tl",
    link,
    linkLabel,
    showJdnLogo,
    jdnLogoInline,
  } = slide;

  return (
    <section id={id} className="rig-slide">
      <img src={image} alt={title.replace(/\n/g, " ")} className="rig-slide-img" />
      <div className="rig-slide-scrim" />

      <motion.div
        className={`rig-overlay rig-overlay--${position}`}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={overlayVariants}
      >
        <div className={jdnLogoInline ? "rig-overlay-title-row" : undefined}>
          <h2 className="rig-overlay-title">
            {title.split("\n").map((line, i) => (
              <span key={i} className="rig-overlay-title-line">
                {line}
              </span>
            ))}
          </h2>
          {showJdnLogo && jdnLogoInline && (
            <img src={jdnLogo} alt="JD Neuhaus Authorized Repair Center" className="rig-jdn-logo-inline" />
          )}
        </div>

        {subtitle && <p className="rig-overlay-subtitle">{subtitle}</p>}

        {bullets.length > 0 && (
          <ul className="rig-overlay-list">
            {bullets.map((b, i) => (
              <li key={i}>{b}</li>
            ))}
          </ul>
        )}

        {link && (
          <Link to={link} className="rig-overlay-btn">
            {linkLabel || "PRODUCT INFORMATION"}
          </Link>
        )}
      </motion.div>

      {showJdnLogo && !jdnLogoInline && (
        <img src={jdnLogo} alt="JD Neuhaus Authorized Repair Center" className="rig-jdn-logo" />
      )}
    </section>
  );
}

/* ── Section divider ── */

function SectionTitle({ id, title }) {
  return (
    <div id={id} className="rig-section-title">
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: [0.33, 1, 0.68, 1] }}
      >
        {title}
      </motion.h2>
    </div>
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
      {/* Hero collage */}
      <section className="rig-hero">
        <div className="rig-hero-grid">
          {heroCollage.map((src, i) => (
            <motion.div
              key={i}
              className="rig-hero-tile"
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.6, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
            >
              <img src={src} alt={`Rigging collage ${i + 1}`} />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Products */}
      <SectionTitle id="products" title="PRODUCTS" />
      {products.map((s) => <Slide key={s.id} slide={s} />)}

      {/* Services */}
      <SectionTitle id="services" title="SERVICES" />
      {services.map((s) => <Slide key={s.id} slide={s} />)}

      {/* Rentals */}
      <SectionTitle id="rentals" title="RENTALS" />
      {rentals.map((s) => <Slide key={s.id} slide={s} />)}

      {/* Locations */}
      <section id="locations" className="rp-section">
        <h2 className="rigging-locations-heading">LOCATIONS</h2>
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
