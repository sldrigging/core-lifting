import { useState, useCallback, useEffect } from "react";
import "./LocationCarousel.css";

export default function LocationCarousel({ location }) {
  const { id, name, address, phone, services, images, building } = location;
  const [perView, setPerView] = useState(3);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const update = () => setPerView(window.innerWidth < 700 ? 1 : 3);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const totalSlides = images.length;
  const maxCurrent = Math.max(0, totalSlides - perView);
  const hasNavigation = maxCurrent > 0;

  useEffect(() => {
    setCurrent(c => Math.min(c, maxCurrent));
  }, [maxCurrent]);

  const next = useCallback(() => setCurrent(c => Math.min(c + 1, maxCurrent)), [maxCurrent]);
  const prev = useCallback(() => setCurrent(c => Math.max(c - 1, 0)), []);
  const goTo = useCallback(i => setCurrent(i), []);

  const slideWidth = 100 / perView;

  return (
    <div id={id} className="loc-split">
      {/* Left: building photo + info overlay */}
      <div className="loc-split-left">
        <img
          src={building}
          alt={`${name} building`}
          className="loc-building-img"
          style={{ objectPosition: location.buildingPosition || "center center" }}
        />
        <div className="loc-info-box">
          <h2 className="loc-info-name">{name}</h2>
          <p className="loc-info-address">{address}</p>
          <p className="loc-info-phone">{phone}</p>
          <p className="loc-info-hours">Std Hrs: 7:00 - 5:00 | On Call: 24/7</p>
          <ul className="loc-info-services">
            {services.map((s, i) => (
              <li key={i}>{s}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* Right: carousel */}
      <div className="loc-split-right">
        <div
          className="loc-carousel-track"
          style={{ transform: `translateX(-${current * slideWidth}%)` }}
        >
          {images.map((img, i) => (
            <div
              className="loc-carousel-slide"
              style={{ flex: `0 0 ${slideWidth}%` }}
              key={i}
            >
              <img src={img} alt={`${name} interior ${i + 1}`} />
            </div>
          ))}
        </div>

        {hasNavigation && (
          <>
            <button
              className="loc-arrow loc-arrow-left"
              onClick={prev}
              disabled={current === 0}
              aria-label="Previous image"
            >
              &#8249;
            </button>
            <button
              className="loc-arrow loc-arrow-right"
              onClick={next}
              disabled={current === maxCurrent}
              aria-label="Next image"
            >
              &#8250;
            </button>
            <div className="loc-dots">
              {Array.from({ length: maxCurrent + 1 }, (_, i) => (
                <button
                  key={i}
                  className={`loc-dot${i === current ? " loc-dot-active" : ""}`}
                  onClick={() => goTo(i)}
                  aria-label={`Position ${i + 1}`}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
