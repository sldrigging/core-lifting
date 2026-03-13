import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logoFull from "../assets/Core-Lifting-Products-Logo.png";
import logoSimple from "../assets/Core-Simple.png";
import "./Header.css";

export default function Header() {
  const location = useLocation();
  const navigate = useNavigate();

  const scrollToHash = (path, hash) => (e) => {
    e.preventDefault();
    if (location.pathname === path) {
      const el = document.querySelector(hash);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate(path + hash);
    }
  };
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Sticky only on /rigging page as requested
  const isRiggingPage = location.pathname === "/rigging";
  const isSticky = isRiggingPage && isScrolled;

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMobileMenuOpen]);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const getButtonStyle = (path) => {
    const isActive = location.pathname === path;
    return {
      padding: isSticky ? "4px 20px" : "6px 28px",
      background: isActive ? "#9c4c2a" : "transparent",
      border: "1px solid #9c4c2a",
      color: isActive ? "#fff" : "#9c4c2a",
      textDecoration: "none",
      fontWeight: "600",
      borderRadius: "4px",
      transition: "all 0.2s ease",
      fontSize: isSticky ? "0.80rem" : "0.9rem",
      textAlign: "center",
      boxShadow: "0 2px 4px rgba(0, 0, 0, 0.05)",
      cursor: "pointer",
    };
  };

  const currentLogo = isSticky ? logoSimple : logoFull;

  const navLinkStyle = { textAlign: "center", lineHeight: "1.3", textDecoration: "none", color: "inherit", cursor: "pointer" };

  return (
    <>
      <header
        className="header-container"
        style={{
          position: isRiggingPage ? "sticky" : "static",
          top: 0,
          zIndex: 1000,
          background: "#fff",
          color: "#333",
          padding: isSticky ? "0.4rem 4rem" : "0.8rem 4rem",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          borderBottom: "20px solid #9c4c2a",
          transition: "all 0.3s ease",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "2.5rem" }}>
          <Link to="/" style={{ display: "flex", alignItems: "center", zIndex: 1003 }}>
            <img
              src={currentLogo}
              alt="CORE Lifting Products"
              style={{
                height: isSticky ? "45px" : "70px",
                width: "auto",
                transition: "height 0.3s ease",
                position: 'relative'
              }}
            />
          </Link>
          <div className="header-actions" style={{ display: "flex", flexDirection: "row", gap: "1rem" }}>
            <Link to="/rigging" className="header-action-btn" style={getButtonStyle("/rigging")}>
              RIGGING
            </Link>
            <Link to="/cranes" className="header-action-btn" style={getButtonStyle("/cranes")}>
              CRANES
            </Link>
          </div>
        </div>

        {/* Hamburger Menu Button */}
        <button
          className={`mobile-menu-btn ${isMobileMenuOpen ? 'open' : ''}`}
          onClick={toggleMobileMenu}
          aria-label="Toggle Navigation Menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Desktop Navigation */}
        <nav
          className="desktop-nav"
          style={{
            gap: "2.5rem",
            fontSize: isSticky ? "0.75rem" : "0.85rem",
            fontWeight: "500",
            alignItems: "center",
            color: "#444",
            textTransform: "uppercase",
            letterSpacing: "0.5px",
            transition: "font-size 0.3s ease"
          }}
        >
          {/* Wire Rope & Rigging Products Dropdown */}
          <div className="nav-dropdown">
            <a href="/rigging#products" className="nav-dropdown-trigger" onClick={scrollToHash("/rigging", "#products")} style={{ textDecoration: "none", color: "inherit" }}>
              Wire Rope &<br />Rigging Products
            </a>
            <div className="nav-dropdown-content">
              <a href="/rigging#wire-rope-cable" onClick={scrollToHash("/rigging", "#wire-rope-cable")}>Wire Rope & Cable</a>
              <a href="/rigging#wire-rope-assemblies" onClick={scrollToHash("/rigging", "#wire-rope-assemblies")}>Wire Rope Assemblies</a>
              <a href="/rigging#chain-fittings" onClick={scrollToHash("/rigging", "#chain-fittings")}>Chain & Fittings</a>
              <a href="/rigging#synthetics" onClick={scrollToHash("/rigging", "#synthetics")}>Synthetics</a>
              <a href="/rigging#rigging-hardware" onClick={scrollToHash("/rigging", "#rigging-hardware")}>Rigging Hardware</a>
              <a href="/rigging#lubricators" onClick={scrollToHash("/rigging", "#lubricators")}>Lubricators / Lubricants</a>
              <a href="/rigging#load-securement" onClick={scrollToHash("/rigging", "#load-securement")}>Load Securement</a>
              <a href="/rigging#cordage" onClick={scrollToHash("/rigging", "#cordage")}>Cordage</a>
              <a href="/rigging#hoists" onClick={scrollToHash("/rigging", "#hoists")}>Hoists, Service & Repairs</a>
              <a href="/rigging#winches" onClick={scrollToHash("/rigging", "#winches")}>Winches & Accessories</a>
            </div>
          </div>

          <a href="/rigging#services" onClick={scrollToHash("/rigging", "#services")} style={navLinkStyle}>
            Services
          </a>
          <a href="/rigging#rentals" onClick={scrollToHash("/rigging", "#rentals")} style={navLinkStyle}>
            Rentals
          </a>

          {/* Knowledge Base Dropdown */}
          <div className="nav-dropdown">
            <div className="nav-dropdown-trigger" style={{ cursor: "default" }}>
              Knowledge<br />Base
            </div>
            <div className="nav-dropdown-content">
              <Link to="/product-info">Technical Documents</Link>
              <Link to="/videos">Videos</Link>
              <Link to="/blogs">Blogs</Link>
            </div>
          </div>

          <a href="/#locations" onClick={scrollToHash("/", "#locations")} style={navLinkStyle}>
            Locations<br />& Contact
          </a>
          <a href="/#about-us" onClick={scrollToHash("/", "#about-us")} style={navLinkStyle}>
            About<br />Us
          </a>

          {/* Online Certs Dropdown */}
          <div className="nav-dropdown">
            <div className="nav-dropdown-trigger" style={{ cursor: "default" }}>
              Online<br />Certs
            </div>
            <div className="nav-dropdown-content">
              <a href="https://app.tessalink.com/" target="_blank" rel="noopener noreferrer">Houston</a>
              <a href="https://app.tessalink.com/" target="_blank" rel="noopener noreferrer">Odessa</a>
              <a href="https://liftingandtesting.com/login/?redirect_to=https%3A%2F%2Fliftingandtesting.com%2F" target="_blank" rel="noopener noreferrer">Lafayette</a>
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile Navigation Overlay */}
      <div className={`mobile-nav-overlay ${isMobileMenuOpen ? 'open' : ''}`}>

        {/* Explicit Close Button inside the Drawer */}
        <button
          onClick={toggleMobileMenu}
          aria-label="Close menu"
          style={{
            alignSelf: 'flex-end',
            background: 'none',
            border: 'none',
            fontSize: '2.5rem',
            lineHeight: '1',
            color: '#9c4c2a',
            cursor: 'pointer',
            padding: '0.5rem',
            marginTop: '-4rem',
            marginBottom: '1rem',
          }}
        >
          &times;
        </button>

        <Link to="/rigging" className="mobile-nav-link" onClick={toggleMobileMenu}>
          RIGGING
        </Link>
        <Link to="/cranes" className="mobile-nav-link" onClick={toggleMobileMenu}>
          CRANES
        </Link>

        {/* Mobile Dropdown sections */}
        <div style={{ width: "100%", display: "flex", flexDirection: "column", gap: "2rem", marginTop: "1rem" }}>

          <div>
            <a href="/rigging#products" className="mobile-dropdown-header" onClick={(e) => { scrollToHash("/rigging", "#products")(e); toggleMobileMenu(); }} style={{ display: "block", textDecoration: "none" }}>Wire Rope & Rigging Products</a>
            <div className="mobile-dropdown-items">
              <a href="/rigging#wire-rope-cable" onClick={(e) => { scrollToHash("/rigging", "#wire-rope-cable")(e); toggleMobileMenu(); }}>Wire Rope & Cable</a>
              <a href="/rigging#wire-rope-assemblies" onClick={(e) => { scrollToHash("/rigging", "#wire-rope-assemblies")(e); toggleMobileMenu(); }}>Wire Rope Assemblies</a>
              <a href="/rigging#chain-fittings" onClick={(e) => { scrollToHash("/rigging", "#chain-fittings")(e); toggleMobileMenu(); }}>Chain & Fittings</a>
              <a href="/rigging#synthetics" onClick={(e) => { scrollToHash("/rigging", "#synthetics")(e); toggleMobileMenu(); }}>Synthetics</a>
              <a href="/rigging#rigging-hardware" onClick={(e) => { scrollToHash("/rigging", "#rigging-hardware")(e); toggleMobileMenu(); }}>Rigging Hardware</a>
              <a href="/rigging#lubricators" onClick={(e) => { scrollToHash("/rigging", "#lubricators")(e); toggleMobileMenu(); }}>Lubricators / Lubricants</a>
              <a href="/rigging#load-securement" onClick={(e) => { scrollToHash("/rigging", "#load-securement")(e); toggleMobileMenu(); }}>Load Securement</a>
              <a href="/rigging#cordage" onClick={(e) => { scrollToHash("/rigging", "#cordage")(e); toggleMobileMenu(); }}>Cordage</a>
              <a href="/rigging#hoists" onClick={(e) => { scrollToHash("/rigging", "#hoists")(e); toggleMobileMenu(); }}>Hoists, Service & Repairs</a>
              <a href="/rigging#winches" onClick={(e) => { scrollToHash("/rigging", "#winches")(e); toggleMobileMenu(); }}>Winches & Accessories</a>
            </div>
          </div>

          <a href="/rigging#services" className="mobile-nav-link" onClick={(e) => { scrollToHash("/rigging", "#services")(e); toggleMobileMenu(); }}>Services</a>
          <a href="/rigging#rentals" className="mobile-nav-link" onClick={(e) => { scrollToHash("/rigging", "#rentals")(e); toggleMobileMenu(); }}>Rentals</a>

          <div>
            <div className="mobile-dropdown-header" style={{ display: "block", textDecoration: "none", cursor: "default" }}>Knowledge Base</div>
            <div className="mobile-dropdown-items">
              <Link to="/product-info" onClick={toggleMobileMenu}>Technical Documents</Link>
              <Link to="/videos" onClick={toggleMobileMenu}>Videos</Link>
              <Link to="/blogs" onClick={toggleMobileMenu}>Blogs</Link>
            </div>
          </div>

          <a href="/#locations" className="mobile-nav-link" onClick={(e) => { scrollToHash("/", "#locations")(e); toggleMobileMenu(); }}>Locations & Contact</a>
          <a href="/#about-us" className="mobile-nav-link" onClick={(e) => { scrollToHash("/", "#about-us")(e); toggleMobileMenu(); }}>About Us</a>

          <div>
            <div className="mobile-dropdown-header" style={{ display: "block", textDecoration: "none", cursor: "default" }}>Online Certs</div>
            <div className="mobile-dropdown-items">
              <a href="https://app.tessalink.com/" target="_blank" rel="noopener noreferrer" onClick={toggleMobileMenu}>Houston</a>
              <a href="https://app.tessalink.com/" target="_blank" rel="noopener noreferrer" onClick={toggleMobileMenu}>Odessa</a>
              <a href="https://liftingandtesting.com/login/?redirect_to=https%3A%2F%2Fliftingandtesting.com%2F" target="_blank" rel="noopener noreferrer" onClick={toggleMobileMenu}>Lafayette</a>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
