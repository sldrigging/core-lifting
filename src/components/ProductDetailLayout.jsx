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
  actionPrefix,
  heroImage,
  figCaption,
  figPlaceholder = "SHOP / FABRICATION PHOTO",
  children,       // left column — appears alongside image
  afterHero,      // full-width content below the two-column hero
  provisionText,  // optional gray provision placeholder box
  faq,            // array of { question, answer }
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
        <nav className="dp-breadcrumb">
          <Link to={parentPath}>{parent}</Link>
          <span className="dp-breadcrumb-sep">/</span>
          <span>{titleFlat}</span>
        </nav>

        <div className="dp-hero">
          {/* Title + button — on mobile these appear above the image */}
          <div className="dp-hero-top">
            <h1 className="dp-title">
              {lines.map((line, i) => (
                <span key={i} className="dp-title-line">
                  {line}
                </span>
              ))}
            </h1>

            {actionLink && (
              <Link to={actionLink} className="dp-action-btn">
                {actionPrefix && (
                  <span className="dp-btn-prefix">{actionPrefix}</span>
                )}
                {actionLabel}
              </Link>
            )}
          </div>

          {/* Image — on mobile sits between title/button and description */}
          <div className="dp-image-col">
            {heroImage && (
              <img src={heroImage} alt={titleFlat} className="dp-hero-img" />
            )}
          </div>

          {/* Description + features — below image on mobile */}
          <div className="dp-content-body">{children}</div>

          {afterHero && <div className="dp-after-hero">{afterHero}</div>}
        </div>

        {faq && faq.length > 0 && (
          <div className="dp-faq">
            <h2 className="dp-faq-heading">FAQ</h2>
            {faq.map((item, i) => (
              <FAQItem
                key={i}
                question={item.question}
                answer={item.answer}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
