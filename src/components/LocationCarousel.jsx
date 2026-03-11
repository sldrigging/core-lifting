import { useState, useEffect, useCallback } from "react";
import "./LocationCarousel.css";

export default function LocationCarousel({ location }) {
  const { id, name, address, phone, services, images } = location;
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const totalSlides = images.length;
  const hasMultiple = totalSlides > 1;

  const goTo = useCallback(
    (index) => {
      setCurrent(((index % totalSlides) + totalSlides) % totalSlides);
    },
    [totalSlides]
  );

  const next = useCallback(() => goTo(current + 1), [current, goTo]);
  const prev = useCallback(() => goTo(current - 1), [current, goTo]);

  useEffect(() => {
    if (paused || !hasMultiple) return;
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [paused, next, hasMultiple]);

  return (
    <div
      id={id}
      className="loc-carousel"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div
        className="loc-carousel-track"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {images.map((img, i) => (
          <div className="loc-slide" key={i}>
            <img src={img} alt={`${name} ${i + 1}`} className="loc-slide-bg" />
          </div>
        ))}
      </div>

      {/* Overlay with location info */}
      <div className="loc-slide-overlay">
        <div className="loc-slide-content">
          <h2 className="loc-slide-name">{name}</h2>
          <p className="loc-slide-address">{address}</p>
          <p className="loc-slide-phone">{phone}</p>
          <p className="loc-slide-hours">
            Std Hrs: 7:00 - 5:00 | On Call: 24/7
          </p>
          <ul className="loc-slide-services">
            {services.map((s, i) => (
              <li key={i}>{s}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* Arrows (only if multiple images) */}
      {hasMultiple && (
        <>
          <button
            className="loc-arrow loc-arrow-left"
            onClick={prev}
            aria-label="Previous image"
          >
            &#8249;
          </button>
          <button
            className="loc-arrow loc-arrow-right"
            onClick={next}
            aria-label="Next image"
          >
            &#8250;
          </button>

          <div className="loc-dots">
            {images.map((_, i) => (
              <button
                key={i}
                className={`loc-dot ${i === current ? "loc-dot-active" : ""}`}
                onClick={() => goTo(i)}
                aria-label={`Image ${i + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
