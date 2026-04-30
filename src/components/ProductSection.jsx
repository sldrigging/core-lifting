import { forwardRef } from "react";

function pdfHref(path) {
  return `/core-pdfs/${path.split("/").map(encodeURIComponent).join("/")}`;
}

const ProductSection = forwardRef(function ProductSection(
  { id, title, items, headerImage },
  ref
) {
  return (
    <div
      className={`product-snap-section${items.length <= 2 ? " product-snap-section--compact" : ""}`}
      ref={ref}
      id={`section-${id}`}
    >
      <div className="product-snap-header">
        <h3 className="product-snap-title">
          {id}: {title}
        </h3>
        {headerImage && (
          <img src={headerImage} alt={title} className="product-snap-header-img" />
        )}
      </div>
      <div className="product-grid">
        {items.map((item) => {
          if (item.image && item.pdf) {
            return (
              <a
                key={item.code}
                href={pdfHref(item.pdf)}
                target="_blank"
                rel="noopener noreferrer"
                className="product-grid-item"
              >
                <img
                  src={`/core-pdf-pngs/${item.image}`}
                  alt={item.label}
                  className="product-grid-img"
                />
                <p className="product-grid-label">
                  {item.code} – {item.label}
                </p>
              </a>
            );
          }

          if (item.pdf) {
            return (
              <a
                key={item.code}
                href={pdfHref(item.pdf)}
                target="_blank"
                rel="noopener noreferrer"
                className="product-grid-item product-grid-item--pdf"
              >
                <div className="product-grid-pdf-card">
                  <svg viewBox="0 0 66 96" className="product-grid-pdf-icon" aria-hidden="true">
                    <rect x="2" y="2" width="58" height="92" rx="4" fill="#fff" stroke="#ddd9d4" strokeWidth="1.5"/>
                    <path d="M 44 2 L 60 18 L 44 18 Z" fill="#e8e4de"/>
                    <path d="M 44 2 L 60 2 L 60 18 L 44 18 Z" fill="none" stroke="#ddd9d4" strokeWidth="1.5"/>
                    <rect x="2" y="60" width="58" height="34" rx="0" fill="#9c4c2a"/>
                    <rect x="2" y="56" width="58" height="7" fill="#7a3b21"/>
                    <text x="31" y="83" textAnchor="middle" fill="white" fontSize="14" fontWeight="700" fontFamily="system-ui, sans-serif">PDF</text>
                  </svg>
                  <p className="product-grid-pdf-code">{item.code}</p>
                </div>
                <p className="product-grid-label">{item.label}</p>
              </a>
            );
          }

          return (
            <div key={item.code} className="product-grid-item">
              <div className="product-grid-placeholder">Coming Soon</div>
              <p className="product-grid-label">
                {item.code} – {item.label}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
});

export default ProductSection;
