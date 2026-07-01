import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
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
  actionLink,
  actionLabel,
  heroImage,
  children,
  afterHero,
  provisionText,
  faq,
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
            <img src={heroImage} alt={titleFlat} className="dp-hero-img" />
          ) : (
            <div className="dp-hero-placeholder" />
          )}
          <div className="dp-hero-overlay">
            <h1 className="dp-title">
              {lines.map((line, i) => (
                <span key={i} className="dp-title-line">
                  {line}
                </span>
              ))}
            </h1>
            {actionLink && (
              actionLink.startsWith("/core-pdfs/") ? (
                <a href={actionLink} target="_blank" rel="noreferrer" className="dp-action-btn">
                  {actionLabel}
                </a>
              ) : (
                <Link to={actionLink} className="dp-action-btn">
                  {actionLabel}
                </Link>
              )
            )}
          </div>
        </div>

        {/* Content + FAQ — two-column grid */}
        <div className="dp-body-grid">
          <div className="dp-body-content">
            {children}
            {afterHero}
            {provisionText && <div className="dp-provision">{provisionText}</div>}
          </div>

          {faq && faq.length > 0 && (
            <div className="dp-faq">
              <h2 className="dp-faq-heading">FAQ</h2>
              {faq.map((item, i) => (
                <FAQItem key={i} question={item.question} answer={item.answer} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
