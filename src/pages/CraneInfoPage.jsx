import { useRef, useState, useEffect, useCallback } from "react";
import { useLocation } from "react-router-dom";
import ProductSection from "../components/ProductSection";
import "./ProductInfoPage.css";

const craneSections = [
  {
    id: "BC",
    title: "Bridge Cranes",
    items: [
      { code: "BC1",  label: "Single Girder",                image: null, pdf: null },
      { code: "BC2",  label: "Double Girder",                image: null, pdf: null },
      { code: "BC3",  label: "Under Running Crane",          image: null, pdf: null },
      { code: "BC4",  label: "Top Running Crane",            image: null, pdf: null },
      { code: "BC5",  label: "Bridge Crane Classifications", image: null, pdf: null },
      { code: "BC6",  label: "Engineering & Manufacturing",  image: null, pdf: null },
      { code: "BC7",  label: "Hoists",                       image: null, pdf: null },
      { code: "BC8",  label: "Trolley",                      image: null, pdf: null },
      { code: "BC9",  label: "Hook Block",                   image: null, pdf: null },
      { code: "BC10", label: "End Trucks",                   image: null, pdf: null },
      { code: "BC11", label: "Runway",                       image: null, pdf: null },
      { code: "BC12", label: "Runway Rail (tracks)",         image: null, pdf: null },
      { code: "BC13", label: "Bumpers",                      image: null, pdf: null },
      { code: "BC14", label: "Pendant Controls",             image: null, pdf: null },
      { code: "BC15", label: "Radio Controls",               image: null, pdf: null },
      { code: "BC16", label: "Electrification",              image: null, pdf: null },
    ],
  },
  {
    id: "SC",
    title: "Specialty Cranes",
    items: [
      { code: "SC1", label: "Gantry Cranes",       image: null, pdf: null },
      { code: "SC2", label: "Monorail Cranes",      image: null, pdf: null },
      { code: "SC3", label: "Jib Cranes",           image: null, pdf: null },
      { code: "SC4", label: "Workstation Cranes",   image: null, pdf: null },
      { code: "SC5", label: "Shop Gantry Cranes",   image: null, pdf: null },
      { code: "SC6", label: "Davit Cranes",         image: null, pdf: null },
    ],
  },
];

const serviceSections = [
  { id: "SV1", title: "Inspections",                    items: [{ code: "SV1", label: "Inspections",                    image: null, pdf: null }] },
  { id: "SV2", title: "Preventative Maintenance Programs", items: [{ code: "SV2", label: "Preventative Maintenance Programs", image: null, pdf: null }] },
  { id: "SV3", title: "Modernizations & Upgrades",      items: [{ code: "SV3", label: "Modernizations & Upgrades",      image: null, pdf: null }] },
  { id: "SV4", title: "Installation",                   items: [{ code: "SV4", label: "Installation",                   image: null, pdf: null }] },
  { id: "SV5", title: "Load Testing",                   items: [{ code: "SV5", label: "Load Testing",                   image: null, pdf: null }] },
];

const allSections = [...craneSections, ...serviceSections];

export default function CraneInfoPage() {
  const [activeIds, setActiveIds] = useState(new Set([craneSections[0].id]));
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

      const servicesCard = document.getElementById("section-crane-services-combined");

      if (atBottom && servicesCard) {
        const rect = servicesCard.getBoundingClientRect();
        if (rect.top < window.innerHeight) {
          setActiveIds(new Set(serviceSections.map((s) => s.id)));
          return;
        }
      }

      const candidates = [];

      for (const sec of craneSections) {
        const el = sectionRefs.current[sec.id];
        if (!el) continue;
        candidates.push({ type: "crane", id: sec.id, top: el.getBoundingClientRect().top });
      }

      if (servicesCard) {
        candidates.push({ type: "services", top: servicesCard.getBoundingClientRect().top });
      }

      let best = null;
      for (const c of candidates) {
        if (c.top <= target) {
          if (!best || c.top > best.top) best = c;
        }
      }

      if (!best) return;

      if (best.type === "services") {
        setActiveIds(new Set(serviceSections.map((s) => s.id)));
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
    if (id.startsWith("SV")) {
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
    const isService = id.startsWith("SV");
    if (isService) {
      const card = el.closest(".product-snap-section--combined");
      if (card) el = card;
    }
    const top = el.getBoundingClientRect().top + window.scrollY - 96;
    scrollLock.current = true;
    window.scrollTo({ top, behavior: "smooth" });
    setTimeout(() => { scrollLock.current = false; }, 800);
    if (isService) {
      setActiveIds(new Set(serviceSections.map((s) => s.id)));
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
            <h2 className="products-nav-heading">Info Center</h2>
            <p className="products-nav-desc">
              Click any item to view crane specifications and documentation.
            </p>

            <h3 className="products-nav-group-heading">Cranes</h3>
            <ul className="products-nav-list">
              {craneSections.map((sec) => (
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
          </div>
        </nav>

        <div className="products-content">
          {craneSections.map((sec) => (
            <ProductSection
              key={sec.id}
              ref={setSectionRef(sec.id)}
              {...sec}
            />
          ))}

          <div
            className="product-snap-section product-snap-section--combined"
            id="section-crane-services-combined"
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
