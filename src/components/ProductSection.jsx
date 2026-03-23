import { forwardRef } from "react";

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
          const hasContent = item.image && item.pdf;

          if (hasContent) {
            return (
              <a
                key={item.code}
                href={`/core-pdfs/${item.pdf}`}
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
