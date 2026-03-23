import { useRef, useState, useEffect, useCallback } from "react";
import { useLocation } from "react-router-dom";
import ProductSection from "../components/ProductSection";
import "./ProductInfoPage.css";

const productSections = [
  {
    id: "A",
    title: "Wire Rope & Cable",
    items: [
      { code: "A1", label: "Bridon Ropes", image: "A1 Core Bridon PNG.png", pdf: "A1 Core Bridon Ropes.pdf" },
      { code: "A2", label: "Teufelberger Ropes", image: "A2 Core Teufelberger PNG.png", pdf: "A2 Core Teufelberger Ropes.pdf" },
      { code: "A3", label: "Redaelli", image: "A3 Core Redaelli PNG.png", pdf: "A3 Core Redaelli.pdf" },
      { code: "A4", label: "American Wire Rope", image: "A4 Core Wire Rope PNG.png", pdf: "A4 Core American Wire Rope.pdf" },
      { code: "A5", label: "Imported Rope & Cable", image: "A5 Core Import WR & Cable PNG.png", pdf: "A5 Core Imported Rope & Cable.pdf" },
    ],
  },
  {
    id: "B",
    title: "Lifting Slings",
    items: [
      { code: "B1", label: "Wire Rope Slings", image: "B1 Core Wire Rope Slings PNG.png", pdf: "B1 Core Wire Rope Slings Catalog.pdf" },
      { code: "B2", label: "Chain Slings", image: "B2 Core Chain Slings PNG.png", pdf: "B2 Core Alloy Chain Slings & Fittings.pdf" },
      { code: "B3", label: "Web Slings", image: "B3 Core Web Slings PNG.png", pdf: "B3 Core Web Sling Catalog.pdf" },
      { code: "B4", label: "Roundslings", image: "B4 Core Roundslings PNG.png", pdf: "B4 Core Poly Roundsling Catalog.pdf" },
      { code: "B5", label: "HP Roundslings", image: "B5 Core HP Roundsling PNG.png", pdf: "B5 Core High Performance Roundslings.pdf" },
    ],
  },
  {
    id: "C",
    title: "Rigging Hardware",
    items: [
      { code: "C1", label: "Shackles", image: "C1 Core Shackles PNG.png", pdf: "C1 Core Shackles.pdf" },
      { code: "C2", label: "Master Links", image: "C2 Core Master Links PNG.png", pdf: "C2 Core Master Links.pdf" },
      { code: "C3", label: "Hooks", image: "C3 Core Hooks PNG.png", pdf: "C3 Core Hooks.pdf" },
      { code: "C4", label: "Turnbuckles", image: "C4 Core Turnbuckles PNG.png", pdf: "C4 Core Turnbuckles.pdf" },
      { code: "C5", label: "Thimbles", image: "C5 Core Thimbles PNG.png", pdf: "C5 Core Thimblies.pdf" },
      { code: "C6", label: "Wire Rope Clips", image: "C6 Core Wire Rope Clips PNG.png", pdf: "C6 Core Wire Rope Clips.pdf" },
      { code: "C7", label: "Swivels", image: "C7 Core Swivels PNG.png", pdf: "C7 Core Swivels.pdf" },
      { code: "C8", label: "Synthetic Fittings", image: "C8 Core Synthetic Fittings PNG.png", pdf: "C8 Core Synthetic Sling Fittings.pdf" },
      { code: "C9", label: "Swage Sockets", image: "C9 Core Swage Socket PNG.png", pdf: "C9 Core Swage Sockets & Buttons.pdf" },
      { code: "C10", label: "Spelter Sockets", image: "C10 Core Spelter Socket PNG.png", pdf: "C10 Core Spelter Sockets.pdf" },
      { code: "C11", label: "Wedge Sockets", image: "C11 Core Wedge Sockets PNG.png", pdf: "C11 Core Wedge Sockets.pdf" },
      { code: "C12", label: "Hoist Rings", image: "C12 Core Hoist Rings PNG.png", pdf: "C12 Core Hoist Rings & Lifting Points.pdf" },
      { code: "C13", label: "ROV Fittings", image: "C13 Core ROV Fittings PNG.png", pdf: "C13 Core ROV Fittings.pdf" },
      { code: "C14", label: "Plate Clamps", image: "C14 Core Plate Clamps PNG.png", pdf: "C14 Core Plate Clamps.pdf" },
    ],
  },
  {
    id: "D",
    title: "Blocks",
    items: [
      { code: "D1", label: "Crane Blocks", image: "D1 Core Crane Blocks PNG.png", pdf: "D1 Core Crane Blocks.pdf" },
      { code: "D2", label: "Overhaul Balls", image: "D2 Core Overhaul Balls PNG.png", pdf: "D2 Core Overhaul Balls.pdf" },
      { code: "D3", label: "Snatch Blocks", image: "D3 Core Snatch Blocks PNG.png", pdf: "D3 Core Snatch Blocks.pdf" },
      { code: "D4", label: "Tilt Up Blocks", image: "D4 Core Tilt Up Blocks PNG.png", pdf: "D4 Core Tilt-Up Wall Blocks.pdf" },
      { code: "D5", label: "Fairleads", image: "D5 Core Fairleads PNG.png", pdf: "D5 Core Fairleads.pdf" },
      { code: "D6", label: "Sheaves", image: "D6 Core Sheaves PNG.png", pdf: "D6 Core Sheaves.pdf" },
    ],
  },
  {
    id: "E",
    title: "Hoists",
    items: [
      { code: "E1", label: "Air Hoists", image: "E1 Core Air Hoists PNG.png", pdf: "E1 Core Air Hoists.pdf" },
      { code: "E2", label: "BOP Hoists", image: "E2 Core BOP Hoists PNG.png", pdf: "E2 Core BOP Hoists.pdf" },
      { code: "E3", label: "Electric Hoists", image: "E3 Core Electric Hoists PNG.png", pdf: "E3 Core Electric Hoists.pdf" },
      { code: "E4", label: "Hydraulic Hoists", image: "E4 Core Hydraulic Hoist PNG.png", pdf: "E4 Core Hydraulic Hoists.pdf" },
      { code: "E5", label: "Lever Hoists", image: "E5 Core Lever Hoist PNG.png", pdf: "E5 Core Lever Hoists.pdf" },
      { code: "E6", label: "Chain Hoists", image: "E6 Core Chain Hoists PNG.png", pdf: "E6 Core Chain Hoists.pdf" },
      { code: "E7", label: "Beam Clamps", image: "E7 Core Beam Clamps PNG.png", pdf: "E7 Core Beam Clamps & Trolleys.pdf" },
      { code: "E8", label: "Pulling Hoists", image: "E8 Core Pulling Hoist PNG.png", pdf: "E8 Core Wire Rope Pulling Hoists.pdf" },
    ],
  },
  {
    id: "F",
    title: "Chain Products",
    items: [
      { code: "F1", label: "Industrial Chain & Fittings", image: "F1 Core Industrial Chain PNG.png", pdf: "F1 Core Industrial Chain & Fittings.pdf" },
    ],
  },
  {
    id: "G",
    title: "Cargo Control",
    items: [
      { code: "G1", label: "Cargo Control", image: "G1 Core Cargo Control PNG.png", pdf: "G1 Core Cargo Control.pdf" },
    ],
  },
  {
    id: "H",
    title: "Cordage",
    items: [
      { code: "H1", label: "Cordage", image: "H1 Core Cordage PNG.png", pdf: "H1 Core Cordage.pdf" },
      { code: "H2", label: "HMPE Rope", image: "H2 Core HMPE Rope PNG.png", pdf: "H2 Core HMPE Rope.pdf" },
    ],
  },
  {
    id: "J",
    title: "Wire Rope Lubrication",
    items: [
      { code: "J1", label: "Lubricant Products", image: "J1 Core Lubricants PNG.png", pdf: "J1 Core Lubricant Products.pdf" },
      { code: "J2", label: "Viper Lubricator Manuals", image: "J2 Core Lubricator Manuals PNG.png", pdf: "J2 Core Viper Lubricator Manuals.pdf" },
    ],
  },
  {
    id: "K",
    title: "Load Monitoring",
    items: [
      { code: "K1", label: "Load Monitoring", image: "K1 Core Load Monitoring PNG.png", pdf: "K1 Core Load Monitoring.pdf" },
    ],
  },
];

const serviceSections = [
  {
    id: "S1",
    title: "Load Testing & Inspections",
    items: [
      { code: "S1", label: "Load Testing & Inspections", image: null, pdf: null },
    ],
  },
  {
    id: "S2",
    title: "Non-Destructive Testing",
    items: [
      { code: "S2", label: "Non-Destructive Testing", image: null, pdf: null },
    ],
  },
  {
    id: "S3",
    title: "Repairs",
    items: [
      { code: "S3", label: "Repairs", image: null, pdf: null },
    ],
  },
  {
    id: "S4",
    title: "On-Site Socketing",
    items: [
      { code: "S4", label: "On-Site Socketing", image: null, pdf: null },
    ],
  },
  {
    id: "S5",
    title: "Crane Block Rebuilds",
    items: [
      { code: "S5", label: "Crane Block Rebuilds", image: null, pdf: null },
    ],
  },
];

const rentalSections = [
  {
    id: "R1",
    title: "Spooling Units",
    items: [
      { code: "R1", label: "Spooling Units", image: null, pdf: null },
    ],
  },
  {
    id: "R2",
    title: "Rigging Lofts",
    items: [
      { code: "R2", label: "Rigging Lofts", image: null, pdf: null },
    ],
  },
  {
    id: "R3",
    title: "Blocks & Shackles",
    items: [
      { code: "R3", label: "Blocks & Shackles", image: null, pdf: null },
    ],
  },
  {
    id: "R4",
    title: "Air Hoists & Tuggers",
    items: [
      { code: "R4", label: "Air Hoists & Tuggers", image: null, pdf: null },
    ],
  },
  {
    id: "R5",
    title: "Spreader Bars, Beams & Frames",
    items: [
      { code: "R5", label: "Spreader Bars, Beams & Frames", image: null, pdf: null },
    ],
  },
];

const allSections = [...productSections, ...serviceSections, ...rentalSections];

export default function ProductInfoPage() {
  const [activeId, setActiveId] = useState(productSections[0].id);
  const sectionRefs = useRef({});
  const { hash } = useLocation();

  const setSectionRef = useCallback(
    (id) => (el) => {
      sectionRefs.current[id] = el;
    },
    []
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const id = entry.target.id.replace("section-", "");
            setActiveId(id);
          }
        }
      },
      {
        rootMargin: "-20% 0px -60% 0px",
        threshold: 0,
      }
    );

    for (const sec of allSections) {
      const el = sectionRefs.current[sec.id];
      if (el) observer.observe(el);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!hash) return;
    const id = hash.replace("#section-", "");
    const el = sectionRefs.current[id];
    if (el) {
      setTimeout(() => el.scrollIntoView({ behavior: "smooth", block: "start" }), 150);
    }
  }, [hash]);

  function scrollToSection(id) {
    const el = sectionRefs.current[id];
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <div className="product-info-page">
      <div className="products-layout">
        <nav className="products-nav">
          <div className="products-nav-sticky">
            <h2 className="products-nav-heading">Technical Documents</h2>
            <p className="products-nav-desc">
              Click any product image to download the specification PDF.
            </p>

            <h3 className="products-nav-group-heading">Products</h3>
            <ul className="products-nav-list">
              {productSections.map((sec) => (
                <li key={sec.id}>
                  <button
                    className={`products-nav-item${activeId === sec.id ? " active" : ""}`}
                    onClick={() => scrollToSection(sec.id)}
                  >
                    {sec.id}: {sec.title}
                  </button>
                </li>
              ))}
            </ul>

            <h3 className="products-nav-group-heading">Services</h3>
            <ul className="products-nav-list">
              {serviceSections.map((sec) => (
                <li key={sec.id}>
                  <button
                    className={`products-nav-item${activeId === sec.id ? " active" : ""}`}
                    onClick={() => scrollToSection(sec.id)}
                  >
                    {sec.id}: {sec.title}
                  </button>
                </li>
              ))}
            </ul>

            <h3 className="products-nav-group-heading">Rentals</h3>
            <ul className="products-nav-list">
              {rentalSections.map((sec) => (
                <li key={sec.id}>
                  <button
                    className={`products-nav-item${activeId === sec.id ? " active" : ""}`}
                    onClick={() => scrollToSection(sec.id)}
                  >
                    {sec.id}: {sec.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </nav>

        <div className="products-content">
          {productSections.map((sec) => (
            <ProductSection
              key={sec.id}
              ref={setSectionRef(sec.id)}
              {...sec}
            />
          ))}

          <div className="products-divider">
            <h2 className="products-divider-title">Service Information</h2>
          </div>

          {serviceSections.map((sec) => (
            <ProductSection
              key={sec.id}
              ref={setSectionRef(sec.id)}
              {...sec}
            />
          ))}

          <div className="products-divider">
            <h2 className="products-divider-title">Rental Information</h2>
          </div>

          {rentalSections.map((sec) => (
            <ProductSection
              key={sec.id}
              ref={setSectionRef(sec.id)}
              {...sec}
            />
          ))}
        </div>
      </div>

      <button
        className="products-back-to-top"
        onClick={scrollToTop}
        aria-label="Back to top"
      >
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="15,13 10,6 5,13" />
        </svg>
      </button>
    </div>
  );
}
