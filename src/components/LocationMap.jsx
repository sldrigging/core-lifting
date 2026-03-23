import { useState } from "react";
import "./LocationMap.css";

// Pin positions as percentages of the map image
const pinPositions = {
  odessa: { top: "26%", left: "11.5%" },
  houston: { top: "64%", left: "57.3%" },
  lafayette: { top: "55%", left: "78.7%" },
  houma: { top: "66%", left: "87.5%" },
  "new-orleans": { top: "59%", left: "90%" },
};

export default function LocationMap({ locations, mapImage }) {
  const [hoveredId, setHoveredId] = useState(null);

  const handleClick = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="loc-map">
      <div className="loc-map-inner">
        <img src={mapImage} alt="Locations" className="loc-map-img" />
        {locations.map((loc) => {
          const pos = pinPositions[loc.id];
          if (!pos) return null;
          return (
            <button
              key={loc.id}
              className="loc-map-pin"
              style={{ top: pos.top, left: pos.left }}
              onClick={() => handleClick(loc.id)}
              onMouseEnter={() => setHoveredId(loc.id)}
              onMouseLeave={() => setHoveredId(null)}
              aria-label={`Go to ${loc.name}`}
            >
              <span className="loc-map-pin-dot" />
              <span className="loc-map-pin-label">{loc.name}</span>
              {hoveredId === loc.id && (
                <div className="loc-map-hover-card">
                  <img
                    src={loc.images[0]}
                    alt={loc.name}
                    className="loc-map-hover-card-img"
                  />
                  <div className="loc-map-hover-card-body">
                    <span className="loc-map-hover-card-name">{loc.name}</span>
                    <span className="loc-map-hover-card-cta">
                      Click for contact info
                    </span>
                  </div>
                </div>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
