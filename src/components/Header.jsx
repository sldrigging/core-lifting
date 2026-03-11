import { Link, useLocation } from "react-router-dom";
import logo from "../assets/Core-Lifting-Products-Logo.png";

export default function Header() {
  const location = useLocation();

  const getButtonStyle = (path) => {
    const isActive = location.pathname === path;
    return {
      padding: "6px 28px",
      border: "2px solid #9c4c2a",
      borderRadius: "6px",
      color: isActive ? "#fff" : "#9c4c2a",
      backgroundColor: isActive ? "#9c4c2a" : "transparent",
      fontWeight: "800",
      fontSize: "0.85rem",
      textAlign: "center",
      letterSpacing: "1px",
      textDecoration: "none",
      transition: "all 0.2s ease",
    };
  };

  return (
    <header
      style={{
        background: "#fff",
        color: "#333",
        padding: "0.8rem 4rem",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        borderBottom: "20px solid #9c4c2a",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "2.5rem" }}>
        <Link to="/" style={{ display: "flex", alignItems: "center" }}>
          <img
            src={logo}
            alt="CORE Lifting Products"
            style={{ height: "70px", width: "auto" }}
          />
        </Link>
        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          <Link to="/rigging" style={getButtonStyle("/rigging")}>
            RIGGING
          </Link>
          <Link to="/cranes" style={getButtonStyle("/cranes")}>
            CRANES
          </Link>
        </div>
      </div>
      <nav
        style={{
          display: "flex",
          gap: "2.5rem",
          fontSize: "0.85rem",
          fontWeight: "500",
          alignItems: "center",
          color: "#444",
          textTransform: "uppercase",
          letterSpacing: "0.5px"
        }}
      >
        <a href="#products" style={{ textAlign: "center", lineHeight: "1.3" }}>
          Product<br />Information
        </a>
        <a href="#services" style={{ textAlign: "center", lineHeight: "1.3" }}>
          Services
        </a>
        <a href="#rentals" style={{ textAlign: "center", lineHeight: "1.3" }}>
          Rentals
        </a>
        <a href="#media-center" style={{ textAlign: "center", lineHeight: "1.3" }}>
          Media<br />Center
        </a>
        <a href="#locations" style={{ textAlign: "center", lineHeight: "1.3" }}>
          Locations<br />& Contact
        </a>
        <a href="#about-us" style={{ textAlign: "center", lineHeight: "1.3" }}>
          About<br />Us
        </a>
        <a href="#online-certs" style={{ textAlign: "center", lineHeight: "1.3" }}>
          Online<br />Certs
        </a>
      </nav>
    </header>
  );
}
