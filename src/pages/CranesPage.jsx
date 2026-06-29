import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import "./CranesPage.css";
import "./RiggingPage.css";

/* ── Hero image ── */
import heroImg from "../assets/imgs-rv/Cranes/OHC-Hero.jpg";

/* ── Crane slide images ── */
import imgBridgeCranes from "../assets/imgs-rv/Cranes/Bridge-cranes.jpg";
import imgManufacturing from "../assets/imgs-rv/Cranes/Manufacturing.jpg";
import imgJibCranes from "../assets/imgs-rv/Cranes/Gorbel-Jib-Crane.jpg";
import imgWorkstationCranes from "../assets/imgs-rv/Cranes/Gorbel-workstation-crane.jpg";
import imgDavitCranes from "../assets/imgs-rv/Cranes/Thern-Davit-Crane.jpg";

/* ── Service slide images ── */
import imgFieldServices from "../assets/imgs-rv/Cranes/OHC-Services.jpg";
import imgLoadTesting from "../assets/imgs-rv/Cranes/OHC-Load-Testing.jpg";
import imgInstallation from "../assets/imgs-rv/Cranes/OHC-Installation.jpg";

/* ── Slide data ── */

const cranes = [
  {
    id: "bridge-cranes",
    title: "BRIDGE CRANES",
    bullets: [
      "Single Girder",
      "Double Girder",
      "Top Running",
      "Underhung",
      "Gantry",
    ],
    image: imgBridgeCranes,
    position: "tl",
    link: "/info-center#section-CH",
    linkLabel: "MORE INFO",
  },
  {
    id: "manufacturing",
    title: "MANUFACTURING",
    bullets: [],
    image: imgManufacturing,
    position: "br",
    link: "/info-center#section-CH",
    linkLabel: "MORE INFO",
  },
  {
    id: "jib-cranes",
    title: "JIB CRANES",
    bullets: [
      "Free Standing",
      "Wall Bracket",
      "Wall Cantilever",
      "Mast Type",
    ],
    image: imgJibCranes,
    position: "tl",
    link: "/info-center#section-CI",
    linkLabel: "MORE INFO",
  },
  {
    id: "workstation-cranes",
    title: "WORKSTATION\nCRANES",
    bullets: [],
    image: imgWorkstationCranes,
    position: "bl",
    link: "/info-center#section-CI",
    linkLabel: "MORE INFO",
  },
  {
    id: "davit-cranes",
    title: "DAVIT CRANES",
    bullets: [
      "Thern Authorized Distributor",
      "Free Standing",
      "Stationary",
    ],
    image: imgDavitCranes,
    position: "tr",
    link: "/info-center#section-CI",
    linkLabel: "MORE INFO",
  },
];

const services = [
  {
    id: "field-services",
    title: "FIELD SERVICES",
    bullets: [
      "Inspections",
      "Preventative Maintenance",
      "Repairs",
      "Wire Rope Replacement",
    ],
    image: imgFieldServices,
    position: "bl",
    link: "/info-center#section-CS",
    linkLabel: "MORE INFO",
  },
  {
    id: "load-testing",
    title: "LOAD TESTING",
    bullets: ["Fixed Weights", "Water Bags"],
    image: imgLoadTesting,
    position: "tl",
    link: "/info-center#section-CS",
    linkLabel: "MORE INFO",
  },
  {
    id: "installation",
    title: "INSTALLATION",
    bullets: [],
    image: imgInstallation,
    position: "cr",
    link: "/info-center#section-CS",
    linkLabel: "MORE INFO",
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

function Slide({ slide, basePath }) {
  const {
    id,
    title,
    subtitle,
    bullets,
    image,
    position = "tl",
    link,
    linkLabel,
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
        <h2 className="rig-overlay-title">
          {title.split("\n").map((line, i) => (
            <span key={i} className="rig-overlay-title-line">
              {line}
            </span>
          ))}
        </h2>

        {subtitle && <p className="rig-overlay-subtitle">{subtitle}</p>}

        {bullets.length > 0 && (
          <ul className="rig-overlay-list">
            {bullets.map((b, i) => (
              <li key={i}>{b}</li>
            ))}
          </ul>
        )}

        <div className="rig-overlay-btns">
          {link && (
            <Link to={link} className="rig-overlay-btn">
              {linkLabel || "MORE INFO"}
            </Link>
          )}
          {basePath && (
            <Link to={`${basePath}/${id}`} className="rig-overlay-btn rig-overlay-btn--outline">
              LEARN MORE
            </Link>
          )}
        </div>
      </motion.div>
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

export default function CranesPage() {
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
      <section className="rig-hero">
        <div className="cranes-hero-single">
          <motion.img
            src={heroImg}
            alt="Core Lifting overhead crane"
            className="cranes-hero-single-img"
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          />
        </div>
      </section>

      {/* Cranes */}
      <SectionTitle id="cranes" title="CRANES" />
      {cranes.map((s) => <Slide key={s.id} slide={s} />)}

      {/* Services */}
      <SectionTitle id="crane-services" title="SERVICES" />
      {services.map((s) => <Slide key={s.id} slide={s} />)}

      {/* Locations */}
      <section id="locations" className="rp-section">
        <h2 className="rigging-locations-heading">LOCATIONS</h2>
        <div className="crane-locations-grid" style={{ justifyContent: "center", padding: "0 2rem 2rem" }}>
          <div className="crane-location-card">
            <h2 className="crane-location-company">Core Lifting</h2>
            <h3 className="crane-location-city">HOUSTON, TEXAS</h3>
            <p className="crane-location-address">11550 Brittmore Park Drive</p>
            <p className="crane-location-address">Houston, TX 77041</p>
            <p className="crane-location-phone">(281) 671-7740</p>
          </div>
          <div className="crane-location-card">
            <h2 className="crane-location-company">Core Lifting</h2>
            <h3 className="crane-location-city">LAFAYETTE, LOUISIANA</h3>
            <p className="crane-location-address">1250 Wall Road</p>
            <p className="crane-location-address">Broussard, LA 70518</p>
            <p className="crane-location-phone">(337) 451-2929</p>
          </div>
        </div>
      </section>
            {/* Contact Form Section */}
<section id="contact-form" style={{ display: 'flex', justifyContent: 'center' }}>
  <iframe 
    width="950px" 
    height="1650px" 
    src="https://forms.office.com/r/wssL87gKyR?embed=true" 
    frameBorder="0" 
    marginWidth="0" 
    marginHeight="0" 
    style={{ border: 'none' }} 
    allowFullScreen 
    webkitAllowFullScreen 
    mozAllowFullScreen 
    msAllowFullScreen
  ></iframe>
</section>
    </>
  );
}
