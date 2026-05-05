import { useRef, useState, useEffect, useCallback } from "react";
import { useLocation } from "react-router-dom";
import ProductSection from "../components/ProductSection";
import "./ProductInfoPage.css";

const sections = [
  {
    id: "CI",
    title: "Crane Information",
    items: [
      { code: "CI-01", label: "Crane Classifications", image: "CI-01-Core-Crane-Classifications-PDF.jpg", pdf: "Crane Information/CI-01- Core Crane Classifications PDF.pdf" },
      { code: "CI-02", label: "Jib Cranes",            image: "CI-02-Core-Jib-Cranes-PDF.jpg",            pdf: "Crane Information/CI-02- Core Jib Cranes PDF.pdf" },
      { code: "CI-03", label: "Workstation Cranes",    image: "CI-03-Core-Workstation-Cranes-PDF.jpg",    pdf: "Crane Information/CI-03- Core Workstation Cranes PDF.pdf" },
      { code: "CI-04", label: "Shop Gantry Cranes",   image: "CI-04-Core-Shop-Gantry-Cranes-PDF.jpg",   pdf: "Crane Information/CI-04- Core Shop Gantry Cranes PDF.pdf" },
      { code: "CI-05", label: "Davit Cranes",          image: "CI-05-Core-Davit-Cranes-PDF.jpg",          pdf: "Crane Information/CI-05- Core Davit Cranes PDF.pdf" },
    ],
  },
  {
    id: "CH",
    title: "Overhead Cranes & Electric Hoists",
    items: [
      { code: "CH-01", label: "Street Hoists", image: "CH-01-Core-Street-Hoists-PDF.jpg", pdf: "Overhead Cranes/CH-01- Core Street Hoists PDF.pdf" },
      { code: "CH-02", label: "R&M Hoists",    image: "CH-02-Core-R&M-Hoists-PDF.jpg",    pdf: "Overhead Cranes/CH-02- Core RM Hoists PDF.pdf" },
      { code: "CH-03", label: "CM Hoists",     image: "CH-03-Core-CM-Hoists-PDF.jpg",     pdf: "Overhead Cranes/CH-03- Core CM Hoists PDF.pdf" },
    ],
  },
  {
    id: "CS",
    title: "Services Information",
    items: [
      { code: "CS-01", label: "Sample Inspection Report",      image: "CS-01-Core-Sample-Inspection-Report.jpg",      pdf: "Services Information/CS-01- Core Sample Inspection Report.pdf" },
      { code: "CS-02", label: "Overhead Crane Modernizations", image: "CS-02-Core-Overhead-Crane-Modernizations.jpg", pdf: "Services Information/CS-02- Core Overhead Crane Modernizations.pdf" },
      { code: "CS-03", label: "Overhead Crane Installation",   image: "CS-03-Core-Overhead-Crane-Installation.jpg",   pdf: "Services Information/CS-03- Core Overhead Crane Installation.pdf" },
    ],
  },
];

export default function CraneInfoPage() {
  const [activeId, setActiveId] = useState(sections[0].id);
  const sectionRefs = useRef({});
  const scrollLock = useRef(false);
  const { hash } = useLocation();

  const setSectionRef = useCallback(
    (id) => (el) => { sectionRefs.current[id] = el; },
    []
  );

  useEffect(() => {
    function handleScroll() {
      if (scrollLock.current) return;
      const target = window.innerHeight * 0.3;
      const atBottom = window.innerHeight + window.scrollY >= document.body.scrollHeight - 50;

      if (atBottom) {
        setActiveId(sections[sections.length - 1].id);
        return;
      }

      let best = null;
      for (const sec of sections) {
        const el = sectionRefs.current[sec.id];
        if (!el) continue;
        const top = el.getBoundingClientRect().top;
        if (top <= target) {
          if (!best || top > best.top) best = { id: sec.id, top };
        }
      }

      if (best) setActiveId(best.id);
    }

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!hash) return;
    const id = hash.replace("#section-", "");
    const el = sectionRefs.current[id];
    if (!el) return;
    setTimeout(() => {
      const top = el.getBoundingClientRect().top + window.scrollY - 96;
      window.scrollTo({ top, behavior: "smooth" });
    }, 150);
  }, [hash]);

  function scrollToSection(id) {
    const el = sectionRefs.current[id];
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY - 96;
    scrollLock.current = true;
    window.scrollTo({ top, behavior: "smooth" });
    setActiveId(id);
    setTimeout(() => { scrollLock.current = false; }, 800);
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
              Click any document to open or download.
            </p>
            <ul className="products-nav-list">
              {sections.map((sec) => (
                <li key={sec.id}>
                  <button
                    className={`products-nav-item${activeId === sec.id ? " active" : ""}`}
                    onClick={() => scrollToSection(sec.id)}
                  >
                    {sec.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </nav>

        <div className="products-content">
          {sections.map((sec) => (
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
