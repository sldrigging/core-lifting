import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import PdfDownloads from "./PdfDownloads";
import "./ProductDetailLayout.css";

function FAQItem({ question, answer }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="dp-faq-item">
      <button
        className="dp-faq-q"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
      >
        <span>{question}</span>
        <span className="dp-faq-icon">{open ? "−" : "+"}</span>
      </button>
      {open && answer && <div className="dp-faq-a">{answer}</div>}
    </div>
  );
}

export default function ProductDetailLayout({
  parent,
  parentPath,
  title,
  heroImage,
  children,
  afterHero,
  provisionText,
  faq,
  brands,
  heroImagePosition,
  titleLogo,
  downloads,
  downloadsTitle,
  featuredProducts,
}) {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const lines = title.split("\n");
  const titleFlat = lines.join(" ");

  return (
    <div className="dp-root">
      <div className="dp-inner">
        {/* Breadcrumb */}
        <nav className="dp-breadcrumb">
          <Link to={parentPath}>{parent}</Link>
          <span className="dp-breadcrumb-sep">/</span>
          <span>{titleFlat}</span>
        </nav>

        {/* Hero — full-width image with title+button overlay */}
        <div className="dp-hero">
          {heroImage ? (
            <img
              src={heroImage}
              alt={titleFlat}
              className="dp-hero-img"
              style={heroImagePosition ? { objectPosition: heroImagePosition } : undefined}
            />
          ) : (
            <div className="dp-hero-placeholder" />
          )}
          <div className="dp-hero-overlay">
            <div className={titleLogo ? "dp-title-row" : undefined}>
              <div className="dp-title">
                {lines.map((line, i) => (
                  <span key={i} className="dp-title-line">
                    {line}
                  </span>
                ))}
              </div>
              {titleLogo && (
                <img src={titleLogo.src} alt={titleLogo.alt} className="dp-title-logo" />
              )}
            </div>
          </div>
        </div>

        {/* Mainline brand logos — 8 across, wraps to a new line beyond that */}
        {brands && brands.length > 0 && (
          <div className="dp-brands">
            {brands.map((b, i) => (
              <div key={i} className="dp-brand-item">
                <img src={b.src} alt={b.name} className="dp-brand-logo" />
              </div>
            ))}
          </div>
        )}

        {/* Content + FAQ — two-column grid */}
        <div className="dp-body-grid">
          <div className="dp-body-content">
            {children}
            {afterHero}
            {provisionText && <div className="dp-provision">{provisionText}</div>}
          </div>

          {((featuredProducts && featuredProducts.length > 0) || (faq && faq.length > 0)) && (
            <div className="dp-side-col">
              {featuredProducts && featuredProducts.length > 0 && (
                <div className="dp-featured">
                  <h2 className="dp-featured-heading">FEATURED PRODUCTS</h2>
                  <ul className="dp-featured-list">
                    {featuredProducts.map((item, i) => (
                      <li key={i}>
                        <Link to={item.to}>{item.label}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {faq && faq.length > 0 && (
                <div className="dp-faq">
                  <h2 className="dp-faq-heading">FAQ</h2>
                  {faq.map((item, i) => (
                    <FAQItem key={i} question={item.question} answer={item.answer} />
                  ))}
                </div>
              )}
            </div>
          )}
        </div>

        <PdfDownloads title={downloadsTitle} items={downloads} />
      </div>
    </div>
  );
}
