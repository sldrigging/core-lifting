import "./LocationMap.css";

// Pin positions as percentages of the map image
const pinPositions = {
  odessa: { top: "30%", left: "11%" },
  houston: { top: "60%", left: "43%" },
  lafayette: { top: "63%", left: "62%" },
  houma: { top: "68%", left: "80%" },
  "new-orleans": { top: "55%", left: "80%" },
};

export default function LocationMap({ locations, mapImage }) {
  const handleClick = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="loc-map">
      <div className="loc-map-inner">
        <img src={mapImage} alt="Our Locations" className="loc-map-img" />
        {locations.map((loc) => {
          const pos = pinPositions[loc.id];
          if (!pos) return null;
          return (
            <button
              key={loc.id}
              className="loc-map-pin"
              style={{ top: pos.top, left: pos.left }}
              onClick={() => handleClick(loc.id)}
              aria-label={`Go to ${loc.name}`}
            >
              <span className="loc-map-pin-dot" />
              <span className="loc-map-pin-label">{loc.name}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
