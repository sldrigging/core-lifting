import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import "./CranesPage.css";
import "./RiggingPage.css";

// Hero images (slide 2)
import heroWorker from "../assets/cranes/slide2-img3.png";
import heroWaterbags from "../assets/cranes/slide2-img1.png";
import heroShop from "../assets/cranes/slide2-img2.png";
import heroDarkShop from "../assets/cranes/slide2-img4.png";
import heroPanoramic from "../assets/cranes/slide2-img5.png";

// Classifications
import cmaaLogo from "../assets/cranes/cmaa-logo.png";

// Bridge Crane Types
import bridgeSingleGirder from "../assets/cranes/bridge-single-girder.png";
import bridgeDoubleGirder from "../assets/cranes/bridge-double-girder.png";

// Hoist Configuration
import bridgeUnderRunning from "../assets/cranes/Under-Running-Crane.png";
import bridgeTopRunning from "../assets/cranes/Top-Running-Crane.png";

// Manufacturing
import bridgeMfgLayout from "../assets/cranes/bridge-mfg-layout.png";
import bridgeMfgFab1 from "../assets/cranes/bridge-mfg-fabrication-1.png";
import bridgeMfgWeldInspect from "../assets/cranes/bridge-mfg-weld-inspection.png";

// Components
import componentHoists1 from "../assets/cranes/component-hoists-1.png";
import componentHoists2 from "../assets/cranes/component-hoists-2.png";
import componentHoists3 from "../assets/cranes/component-hoists-3.png";
import componentTrolley from "../assets/cranes/component-trolley.png";
import componentHookBlock from "../assets/cranes/component-hook-block.png";
import componentEndTrucks from "../assets/cranes/component-end-trucks.png";
import componentRunway from "../assets/cranes/component-runway.png";
import componentRunwayRail from "../assets/cranes/component-runway-rail.png";
import componentBumpers from "../assets/cranes/component-bumpers.png";
import componentPendant from "../assets/cranes/component-pendant-controls.png";
import componentRadio2 from "../assets/cranes/component-radio-controls-2.png";
import componentRadio3 from "../assets/cranes/component-radio-controls-3.png";
import componentRadio4 from "../assets/cranes/component-radio-controls-4.png";
import componentElectrification from "../assets/cranes/component-electrification.png";

// Specialty Cranes
import gantryCrane from "../assets/cranes/gantry-crane.png";
import monorailCrane from "../assets/cranes/monorail-crane.png";
import jibCrane1 from "../assets/cranes/jib-crane-1.png";
import jibCrane2 from "../assets/cranes/jib-crane-2.png";
import workstationCrane from "../assets/cranes/workstation-crane-1.png";
import shopGantryCrane from "../assets/cranes/shop-gantry-crane.png";
import davitCrane from "../assets/cranes/davit-crane.png";

// Services
import svcInspections from "../assets/cranes/svc-inspections-1.png";
import svcPreventative from "../assets/cranes/svc-preventative-maint.png";
import svcModernizations1 from "../assets/cranes/svc-modernizations-1.png";
import svcModernizations2 from "../assets/cranes/svc-modernizations-2.png";
import svcInstallation from "../assets/cranes/svc-installation.png";
import svcLoadTesting1 from "../assets/cranes/svc-load-testing-1.png";
import svcLoadTesting2 from "../assets/cranes/svc-load-testing-2.png";

const bridgeCranes = [
  // ── Types ──
  {
    id: "bridge-crane-single-girder",
    title: "Single Girder",
    description: "A single girder overhead crane has one horizontal beam (girder) that holds a trolley and hoist. This type of crane is the most common and affordable option for lifting light to medium loads.",
    images: [bridgeSingleGirder],
  },
  {
    id: "bridge-crane-double-girder",
    title: "Double Girder",
    description: "A double girder overhead crane uses two parallel beams to hold a hoist and trolley. This setup is very effective for industrial lifting, providing more strength, stability, and height than single girder cranes.",
    images: [bridgeDoubleGirder],
  },
  // ── Hoist Configuration ──
  {
    id: "hoist-config-under-running",
    title: "Under Running Crane",
    description: "An under-running overhead crane, also called an underhung or underslung crane, is a lifting system where the bridge moves along the bottom part of runway beams that are usually hung from the roof of the building.",
    images: [bridgeUnderRunning],
  },
  {
    id: "hoist-config-top-running",
    title: "Top Running Crane",
    description: "A top running overhead crane is a lifting system used in factories where the entire bridge moves on rails attached to the top of the beams. This is different from \"underhung\" cranes, which hang from the bottom of the beams.",
    images: [bridgeTopRunning],
  },
  // ── Classifications ──
  {
    id: "bridge-crane-classifications",
    title: "Bridge Crane Classifications",
    type: "classifications",
    images: [],
  },
  // ── Engineering & Manufacturing ──
  {
    id: "manufacturing",
    title: "Engineering & Manufacturing",
    items: [
      "Engineering — SolidWorks",
      "Girder Layout",
      "Girder Fabrication",
      "Girder Welding",
      "Weld Inspection",
    ],
    images: [bridgeMfgLayout, bridgeMfgFab1, bridgeMfgWeldInspect],
  },
  // ── Components ──
  {
    id: "hoists",
    title: "Hoists",
    description: "The hoist is the critical lifting component of an overhead crane, specifically responsible for the vertical movement (lifting & lowering) of heavy loads. While the crane structure (bridge & runway) provides the broad range of movement across the facility, the hoist performs the actual work of raising, suspending, and accurately positioning the payload.",
    images: [componentHoists1, componentHoists2, componentHoists3],
  },
  {
    id: "trolley",
    title: "Trolley",
    description: "The trolley is the mechanism responsible for the horizontal movement of the hoist and its load along the crane's bridge girders. While the bridge moves the entire crane longitudinally (along the runway), the trolley enables the lateral positioning across the width of the workspace.",
    images: [componentTrolley],
  },
  {
    id: "hook-block",
    title: "Hook Block",
    description: "The hook block serves as the primary connection between the crane's hoist and the load being moved. Its fundamental roles include providing mechanical advantage, ensuring load stability, and facilitating precise positioning of heavy or awkward materials.",
    images: [componentHookBlock],
  },
  {
    id: "end-trucks",
    title: "End Trucks",
    description: "End trucks are critical structural assemblies located at both ends of an overhead crane's bridge. Their primary role is the support the crane girder and provide the wheel-based mobility necessary for the entire bridge to travel along the length of the runway.",
    images: [componentEndTrucks],
  },
  {
    id: "runway",
    title: "Runway",
    description: "The overhead crane runway is the structural backbone of the lifting system, providing the foundational support and defined path for the crane to move. It serves as a specialized track system that enables the crane's bridge to transport heavy loads across a facility safely and precisely.",
    images: [componentRunway],
  },
  {
    id: "runway-rail",
    title: "Runway Rail (tracks)",
    description: "Crane rails serve as the foundational track system that supports and directs the movement of overhead cranes. Their primary roles are to provide a stable path for horizontal travel and to distribute massive loads safely into the building's structural framework.",
    images: [componentRunwayRail],
  },
  {
    id: "bumpers",
    title: "Bumpers",
    description: "Overhead crane bumpers are critical safety devices designed to absorb kinetic energy and reduce impact forces when a moving crane or trolley reaches the end of its permitted travel.",
    images: [componentBumpers],
  },
  {
    id: "pendant-controls",
    title: "Pendant Controls",
    description: "Pendant controls serve as the primary physical interface between a crane operator and the machinery, providing a direct, hardwired method to manage crane and hoist functions.",
    images: [componentPendant],
  },
  {
    id: "radio-controls",
    title: "Radio Controls",
    description: "Radio controls serve as a wireless interface for crane operation, replacing traditional tethered pendants or fixed cabs to provide operators with unrestricted movement and superior vantage points. By using a handheld transmitter to send signals to a receiver mounted on the crane, operators can control all crane movements – including hoist, trolley, and bridge travel.",
    images: [componentRadio2, componentRadio3, componentRadio4],
  },
  {
    id: "electrification",
    title: "Electrification",
    description: "Electrification serves as the \"nervous system\" of an overhead crane, providing the essential power and control signals required for moving components – the bridge, trolley, and hoist – to function.",
    images: [componentElectrification],
  },
];

const specialtyCranes = [
  {
    id: "gantry-cranes",
    title: "Gantry Cranes",
    description: "A gantry crane is an overhead crane that stands on its own structure instead of being attached to a building. Its main design looks like a \"portal\" or \"goalpost,\" with a horizontal bridge (girder) held up by vertical legs. The design considerations for Class are the same as overhead bridge cranes.",
    images: [gantryCrane],
  },
  {
    id: "monorail-cranes",
    title: "Monorail Cranes",
    description: "A monorail crane is an overhead lifting system that runs on one fixed beam. Unlike bridge cranes that span a rectangular area, monorail cranes move loads in a straight line. This makes them suitable for tasks that are done repeatedly, such as in assembly lines, paint booths, and moving items between workstations.",
    images: [monorailCrane],
  },
  {
    id: "jib-cranes",
    title: "Jib Cranes",
    description: "A jib crane is an overhead lifting device used for regular and accurate material handling in a specific circular or semi-circular area. It has a horizontal arm, called a jib or boom, that holds a movable hoist and swings around a vertical support point, usually a pillar on the floor or a bracket on the wall.",
    images: [jibCrane1, jibCrane2],
  },
  {
    id: "workstation-cranes",
    title: "Workstation Cranes",
    description: "A workstation crane is a light, easy-to-use overhead lifting system for moving materials in a specific area, like an assembly line or a manufacturing cell. Unlike heavy industrial cranes, workstation cranes are designed for accuracy and allow one person to move loads with little effort.",
    images: [workstationCrane],
  },
  {
    id: "shop-gantry-cranes",
    title: "Shop Gantry Cranes",
    description: "A shop gantry crane is a flexible lifting system used in workshops, garages, and factories to move heavy loads when permanent overhead supports are not possible. Unlike fixed bridge cranes, gantry cranes have their horizontal bridge supported by separate legs instead of the building's structure.",
    images: [shopGantryCrane],
  },
  {
    id: "davit-cranes",
    title: "Davit Cranes",
    description: "Thern davit cranes are durable, versatile lifting systems designed for both portable & stationary applications, offering 360° rotation and capacities ranging from 500 to 3,000 lbs or more.",
    items: [
      "Stationary Davit Cranes",
      "Pivoting Davit Cranes",
    ],
    images: [davitCrane],
  },
];

const services = [
  {
    title: "Inspections",
    items: [
      "Mechanical & Structural Systems",
      "Hoisting gear.",
      "Hooks & blocks.",
      "Braking systems.",
      "Runway structure.",
      "Electrical & Safety Devices",
      "Safety features.",
      "Controls.",
      "Electrical wiring.",
    ],
    images: [svcInspections],
  },
  {
    title: "Preventative Maintenance Programs",
    items: [
      "Based on crane service class, we develop a program to guard against problems before they occur.",
      "Program includes inspecting critical components, lubrication, repairs as needed.",
    ],
    images: [svcPreventative],
  },
  {
    title: "Modernizations & Upgrades",
    items: [
      "Upgrade to Variable Frequency Drive.",
      "Upgrade to radio remote control.",
      "Upgrade hoisting & mechanical parts.",
      "Upgrade from festoon to conductor bar electrification.",
      "Upgrade to modern braking systems.",
      "Install anti-collision sensors.",
      "Install overload protection.",
      "Install PLCs.",
    ],
    images: [svcModernizations1, svcModernizations2],
  },
  {
    title: "Installation",
    items: [
      "Site assessment and preparation.",
      "Assembly and hoisting.",
      "Testing and commissioning.",
    ],
    images: [svcInstallation],
  },
  {
    title: "Load Testing",
    items: [
      "Site assessment and preparation.",
      "Assembly and hoisting.",
      "Testing and commissioning.",
    ],
    images: [svcLoadTesting1, svcLoadTesting2],
  },
];

const classificationCriteria = [
  "Service",
  "Speed",
  "Distance",
  "Rated capacity",
  "Service conditions",
  "Maintenance requirements",
];

const classificationTable = [
  { cls: "A", service: "Infrequent",          desc: "Slow, precise handling.",                                                         examples: "Power plant turbine room." },
  { cls: "B", service: "Light",               desc: "2 – 5 lifts/hr. From zero load to full load. Avg 10' per lift.",                  examples: "Repair shop, light assembly operations." },
  { cls: "C", service: "Moderate",            desc: "5 – 10 lifts/hr. Avg loads 50% of capacity. Avg 15' per lift.",                   examples: "Machine shops, paper mill machine rooms." },
  { cls: "D", service: "Heavy",               desc: "10 - 20 lifts/hr. Avg loads < 50% of capacity. Avg 15' lift.",                    examples: "Foundries, steel distribution warehouses." },
  { cls: "E", service: "Severe",              desc: "20+ lifts/hr. Handles loads near capacity.",                                       examples: "Magnet and clamshell bucket type service." },
  { cls: "F", service: "Continuous Severe",   desc: "Continuous operation with heavy loads.",                                           examples: "Steel mills, coke handling." },
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
  hidden: { opacity: 0, scale: 0.95, clipPath: "inset(10% 0 10% 0)" },
  visible: {
    opacity: 1,
    scale: 1,
    clipPath: "inset(0% 0 0% 0)",
    transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] },
  },
};

/* ── Classifications Panel ── */

function ClassificationsPanel({ id, index, learnMoreTo }) {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      id={id}
      className={`rp-panel ${isEven ? "rp-panel--even" : ""}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.05, margin: "0px 0px -100px 0px" }}
      transition={{ staggerChildren: 0.1 }}
    >
      <div className="rp-panel-grid rp-panel-grid--single" style={{ maxWidth: "100%" }}>
        <div className="rp-panel-text-inner">
          <motion.h3 className="rp-panel-title" variants={itemVariants}>
            Bridge Crane Classifications
          </motion.h3>

          {/* Logo + Criteria row */}
          <motion.div className="cc-top-row" variants={itemVariants}>
            <img src={cmaaLogo} alt="CMAA — Crane Manufacturers Association of America" className="cc-logo" />
            <div className="cc-criteria">
              <p className="cc-criteria-heading">Classification Criteria</p>
              <ul className="cc-criteria-list">
                {classificationCriteria.map((item) => (
                  <li key={item}>
                    <span className="rp-dash">&#x2501;</span>
                    <span className="rp-item-text">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Table */}
          <motion.div className="cc-table-wrap" variants={itemVariants}>
            <table className="cc-table">
              <thead>
                <tr>
                  <th>Class</th>
                  <th>Service</th>
                  <th>Service Description</th>
                  <th>Examples</th>
                </tr>
              </thead>
              <tbody>
                {classificationTable.map((row) => (
                  <tr key={row.cls}>
                    <td className="cc-td-class">{row.cls}</td>
                    <td>{row.service}</td>
                    <td>{row.desc}</td>
                    <td>{row.examples}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>

          <motion.div variants={itemVariants} style={{ marginTop: "1.5rem" }}>
            <Link to={learnMoreTo} className="rp-learn-more crane-learn-more">LEARN MORE</Link>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

/* ── Reusable Panel ── */

function CranePanel({ title, description, items, images, index, id, learnMoreTo }) {
  const isEven = index % 2 === 0;
  const hasImages = images && images.length > 0;
  const hasItems = items && items.length > 0;

  const textContent = (
    <div className={`rp-panel-text ${isEven ? "" : "rp-panel-text--alt"}`}>
      <div className="rp-panel-text-inner">
        <motion.h3 className="rp-panel-title" variants={itemVariants}>
          {title}
        </motion.h3>

        {description && (
          <motion.p className="crane-panel-description" variants={itemVariants}>
            {description}
          </motion.p>
        )}

        {hasItems && (
          <ul className="rp-panel-list">
            {items.map((item, i) => (
              <motion.li key={i} className="rp-panel-list-item" variants={itemVariants}>
                <span className="rp-dash">&#x2501;</span>
                <span className="rp-item-text">{item}</span>
              </motion.li>
            ))}
          </ul>
        )}

        <motion.div variants={itemVariants}>
          <Link to={learnMoreTo} className="rp-learn-more crane-learn-more">LEARN MORE</Link>
        </motion.div>
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

      {images.length === 3 && (
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

/* ── Sidebar helper ── */

function SectionSidebar({ title, subtitle }) {
  return (
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
          {title}
        </motion.h2>
        {subtitle && (
          <motion.p
            className="rp-sidebar-subtitle"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.33, 1, 0.68, 1] }}
          >
            {subtitle}
          </motion.p>
        )}
        <div className="rp-sidebar-line" />
      </div>
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
      <section className="cranes-hero-section">
        <div className="cranes-hero-container">
          <div className="cranes-top-row">
            <div className="cranes-grid-item">
              <img src={heroWorker} alt="Painting crane girder" className="cranes-grid-img img-worker" />
            </div>
            <div className="cranes-grid-item">
              <img src={heroWaterbags} alt="Load testing with water bags" className="cranes-grid-img img-waterbags" />
            </div>
            <div className="cranes-grid-item">
              <img src={heroShop} alt="Core crane shop interior" className="cranes-grid-img img-shop" />
            </div>
          </div>
          <div className="cranes-bottom-row">
            <div className="cranes-grid-item">
              <img src={heroDarkShop} alt="Double girder bridge crane in facility" className="cranes-grid-img img-dark-shop" />
            </div>
            <div className="cranes-grid-item">
              <img src={heroPanoramic} alt="Overhead crane on transport truck" className="cranes-grid-img img-panoramic" />
            </div>
          </div>
        </div>
      </section>

      {/* Bridge Cranes */}
      <section id="bridge-cranes" className="rp-section">
        <div className="rp-section-inner">
          <SectionSidebar title="Bridge Cranes" />
          <div className="rp-content">
            {bridgeCranes.map((item, index) =>
              item.type === "classifications" ? (
                <ClassificationsPanel key={item.id} id={item.id} index={index} learnMoreTo="/info-center#section-BC" />
              ) : (
                <CranePanel
                  key={item.id}
                  id={item.id}
                  title={item.title}
                  description={item.description}
                  items={item.items}
                  images={item.images}
                  index={index}
                  learnMoreTo="/info-center#section-BC"
                />
              )
            )}
          </div>
        </div>
      </section>

      {/* Specialty Cranes */}
      <section id="specialty-cranes" className="rp-section">
        <div className="rp-section-inner">
          <SectionSidebar title="Specialty Cranes" />
          <div className="rp-content">
            {specialtyCranes.map((item, index) => (
              <CranePanel
                key={item.id}
                id={item.id}
                title={item.title}
                description={item.description}
                items={item.items}
                images={item.images}
                index={index}
                learnMoreTo="/info-center#section-SC"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="crane-services" className="rp-section">
        <div className="rp-section-inner">
          <SectionSidebar title="Services" />
          <div className="rp-content">
            {services.map((svc, index) => (
              <CranePanel
                key={svc.title}
                title={svc.title}
                description={svc.description}
                items={svc.items}
                images={svc.images}
                index={index}
                learnMoreTo="/info-center#section-SV1"
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
