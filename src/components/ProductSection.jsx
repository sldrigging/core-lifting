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
        {items.map((item) => (
          <a
            key={item.code}
            href={`/Core PDFs/${item.pdf}`}
            target="_blank"
            rel="noopener noreferrer"
            className="product-grid-item"
          >
            <img
              src={`/Core PDF PNGs/${item.image}`}
              alt={item.label}
              className="product-grid-img"
            />
            <p className="product-grid-label">
              {item.code} – {item.label}
            </p>
          </a>
        ))}
      </div>
    </div>
  );
});

export default ProductSection;
