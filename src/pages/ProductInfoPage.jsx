import { useRef, useState, useEffect, useCallback } from "react";
import { useLocation } from "react-router-dom";
import ProductSection from "../components/ProductSection";
import { productSections } from "../data/productSpecs";
import "./ProductInfoPage.css";

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
  {
    id: "S6",
    title: "Truck Winch Line Servicing",
    items: [
      { code: "S6", label: "Truck Winch Line Servicing", image: null, pdf: null },
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
  const [activeIds, setActiveIds] = useState(new Set([productSections[0].id]));
  const sectionRefs = useRef({});
  const scrollLock = useRef(false);
  const { hash } = useLocation();

  const setSectionRef = useCallback(
    (id) => (el) => {
      sectionRefs.current[id] = el;
    },
    []
  );

  useEffect(() => {
    function handleScroll() {
      if (scrollLock.current) return;
      const target = window.innerHeight * 0.3;
      const atBottom = (window.innerHeight + window.scrollY) >= document.body.scrollHeight - 50;

      const rentalsCard = document.getElementById("section-rentals-combined");
      const servicesCard = document.getElementById("section-services-combined");

      // If scrolled to the bottom, activate rentals if it's visible
      if (atBottom && rentalsCard) {
        const rect = rentalsCard.getBoundingClientRect();
        if (rect.top < window.innerHeight) {
          setActiveIds(new Set(rentalSections.map((r) => r.id)));
          return;
        }
      }

      // Build a list of all trackable sections with their positions
      const candidates = [];

      for (const sec of productSections) {
        const el = sectionRefs.current[sec.id];
        if (!el) continue;
        candidates.push({ type: "product", id: sec.id, top: el.getBoundingClientRect().top });
      }

      if (servicesCard) {
        candidates.push({ type: "services", top: servicesCard.getBoundingClientRect().top });
      }

      if (rentalsCard) {
        candidates.push({ type: "rentals", top: rentalsCard.getBoundingClientRect().top });
      }

      // Find the last section whose top has scrolled past the target point
      let best = null;
      for (const c of candidates) {
        if (c.top <= target) {
          if (!best || c.top > best.top) best = c;
        }
      }

      if (!best) return;

      if (best.type === "services") {
        setActiveIds(new Set(serviceSections.map((s) => s.id)));
      } else if (best.type === "rentals") {
        setActiveIds(new Set(rentalSections.map((r) => r.id)));
      } else {
        setActiveIds(new Set([best.id]));
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!hash) return;
    const id = hash.replace("#section-", "");
    let el = sectionRefs.current[id];
    if (!el) return;
    if (id.startsWith("S") || id.startsWith("R")) {
      const card = el.closest(".product-snap-section--combined");
      if (card) el = card;
    }
    setTimeout(() => {
      const top = el.getBoundingClientRect().top + window.scrollY - 96;
      window.scrollTo({ top, behavior: "smooth" });
    }, 150);
  }, [hash]);

  function scrollToSection(id) {
    let el = sectionRefs.current[id];
    if (!el) return;
    // For service/rental items, scroll to the parent combined card so the heading is visible
    const isServiceOrRental = id.startsWith("S") || id.startsWith("R");
    if (isServiceOrRental) {
      const card = el.closest(".product-snap-section--combined");
      if (card) el = card;
    }
    const top = el.getBoundingClientRect().top + window.scrollY - 96;
    scrollLock.current = true;
    window.scrollTo({ top, behavior: "smooth" });
    // Keep the lock active long enough for the smooth scroll to finish
    setTimeout(() => { scrollLock.current = false; }, 800);
    if (id.startsWith("S")) {
      setActiveIds(new Set(serviceSections.map((s) => s.id)));
    } else if (id.startsWith("R")) {
      setActiveIds(new Set(rentalSections.map((r) => r.id)));
    } else {
      setActiveIds(new Set([id]));
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
            <h2 className="products-nav-heading">Product Specifications</h2>
            <p className="products-nav-desc">
              Click any product image to download the specification PDF.
            </p>

            <h3 className="products-nav-group-heading">Products</h3>
            <ul className="products-nav-list">
              {productSections.map((sec) => (
                <li key={sec.id}>
                  <button
                    className={`products-nav-item${activeIds.has(sec.id) ? " active" : ""}`}
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
                    className={`products-nav-item${activeIds.has(sec.id) ? " active" : ""}`}
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
                    className={`products-nav-item${activeIds.has(sec.id) ? " active" : ""}`}
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

          <div
            className="product-snap-section product-snap-section--combined"
            id="section-services-combined"
            data-nav-group="services"
          >
            <div className="product-snap-header">
              <h3 className="product-snap-title">Services</h3>
            </div>
            <div className="product-grid">
              {serviceSections.map((sec) => (
                <div
                  key={sec.id}
                  ref={setSectionRef(sec.id)}
                  id={`section-${sec.id}`}
                  className="product-grid-item product-grid-item--scrolltarget"
                >
                  <div className="product-grid-placeholder">Coming Soon</div>
                  <p className="product-grid-label">
                    {sec.id} – {sec.title}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div
            className="product-snap-section product-snap-section--combined"
            id="section-rentals-combined"
            data-nav-group="rentals"
          >
            <div className="product-snap-header">
              <h3 className="product-snap-title">Rentals</h3>
            </div>
            <div className="product-grid">
              {rentalSections.map((sec) => (
                <div
                  key={sec.id}
                  ref={setSectionRef(sec.id)}
                  id={`section-${sec.id}`}
                  className="product-grid-item product-grid-item--scrolltarget"
                >
                  <div className="product-grid-placeholder">Coming Soon</div>
                  <p className="product-grid-label">
                    {sec.id} – {sec.title}
                  </p>
                </div>
              ))}
            </div>
          </div>
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
