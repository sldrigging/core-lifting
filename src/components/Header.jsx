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

  const isRiggingPage = location.pathname === "/rigging";
  const isCranesPage = location.pathname === "/cranes";
  const isHomePage = location.pathname === "/";
  const isProductInfoPage = location.pathname === "/product-info";
  const isSticky = (isRiggingPage || isCranesPage || isProductInfoPage) && isScrolled;
  const isCompact = isSticky || isHomePage || isProductInfoPage;
  const isHeaderVisible = !isHomePage || isScrolled;

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
      const threshold = isHomePage ? window.innerHeight - 80 : 50;
      setIsScrolled(window.scrollY > threshold);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHomePage]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const getButtonClass = (path) => {
    const isActive = location.pathname === path;
    return `header-action-btn${isActive ? " active" : ""}${isCompact ? " sticky" : ""}`;
  };

  const currentLogo = isCompact ? logoSimple : logoFull;

  // navLinkStyle moved to .nav-link class in Header.css

  return (
    <>
      <header
        className={`header-container${isHomePage ? " header-home" : ""}${isHeaderVisible ? " header-visible" : " header-hidden"}`}
        style={{
          position: (isRiggingPage || isCranesPage || isProductInfoPage) ? "sticky" : isHomePage ? "fixed" : "static",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          color: "#333",
          padding: isCompact ? "0.4rem clamp(2rem, 4vw, 6rem) 1rem" : "0.8rem clamp(2.5rem, 4vw, 6rem) 1.4rem",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "2rem" }}>
          <Link
            to="/"
            onClick={() => window.scrollTo(0, 0)}
            style={{ display: "flex", alignItems: "center", zIndex: 1003 }}
          >
            <img
              src={currentLogo}
              alt="CORE Lifting Products"
              style={{
                height: isCompact ? "45px" : "auto",
                width: isCompact ? "auto" : "200px",
                maxHeight: isCompact ? "45px" : "70px",
                transition: "all 0.3s ease",
                position: "relative",
              }}
            />
          </Link>
          <div
            className="header-actions"
            style={{ display: "flex", flexDirection: "row", gap: "1.5rem", alignItems: "center" }}
          >
            {isRiggingPage ? (
              <>
                <Link to="/rigging" className={getButtonClass("/rigging")}>
                  RIGGING
                </Link>
                <Link to="/cranes" className={`header-action-btn header-action-btn--secondary${isCompact ? " sticky" : ""}`}>
                  Go to Cranes
                </Link>
              </>
            ) : isCranesPage ? (
              <>
                <Link to="/cranes" className={getButtonClass("/cranes")}>
                  CRANES
                </Link>
                <Link to="/rigging" className={`header-action-btn header-action-btn--secondary${isCompact ? " sticky" : ""}`}>
                  Go to Rigging
                </Link>
              </>
            ) : (
              <>
                <Link to="/rigging" className={getButtonClass("/rigging")}>
                  RIGGING
                </Link>
                <Link to="/cranes" className={getButtonClass("/cranes")}>
                  CRANES
                </Link>
              </>
            )}
          </div>
        </div>

        {/* Hamburger Menu Button */}
        <button
          className={`mobile-menu-btn ${isMobileMenuOpen ? "open" : ""}`}
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
            gap: "2rem",
            fontSize: isCompact ? "0.72rem" : "0.82rem",
            fontWeight: "500",
            alignItems: "center",
            color: "#444",
            textTransform: "uppercase",
            letterSpacing: "0.5px",
            transition: "font-size 0.3s ease",
          }}
        >
          {/* Wire Rope & Rigging Products Dropdown */}
          <div className="nav-dropdown">
            <a
              href="/rigging#products"
              className="nav-dropdown-trigger nav-link"
              onClick={scrollToHash("/rigging", "#products")}
            >
              Products
            </a>
            <div className="nav-dropdown-content">
              <a
                href="/rigging#wire-rope-cable"
                onClick={scrollToHash("/rigging", "#wire-rope-cable")}
              >
                Wire Rope & Cable
              </a>
              <a
                href="/rigging#wire-rope-assemblies"
                onClick={scrollToHash("/rigging", "#wire-rope-assemblies")}
              >
                Wire Rope Assemblies
              </a>
              <a
                href="/rigging#chain-fittings"
                onClick={scrollToHash("/rigging", "#chain-fittings")}
              >
                Chain & Fittings
              </a>
              <a
                href="/rigging#synthetics"
                onClick={scrollToHash("/rigging", "#synthetics")}
              >
                Synthetics
              </a>
              <a
                href="/rigging#rigging-hardware"
                onClick={scrollToHash("/rigging", "#rigging-hardware")}
              >
                Rigging Hardware
              </a>
              <a
                href="/rigging#lubricators"
                onClick={scrollToHash("/rigging", "#lubricators")}
              >
                Lubricators / Lubricants
              </a>
              <a
                href="/rigging#load-securement"
                onClick={scrollToHash("/rigging", "#load-securement")}
              >
                Load Securement
              </a>
              <a
                href="/rigging#cordage"
                onClick={scrollToHash("/rigging", "#cordage")}
              >
                Cordage
              </a>
              <a
                href="/rigging#hoists"
                onClick={scrollToHash("/rigging", "#hoists")}
              >
                Hoists, Service & Repairs
              </a>
              <a
                href="/rigging#winches"
                onClick={scrollToHash("/rigging", "#winches")}
              >
                Winches & Accessories
              </a>
            </div>
          </div>

          <a
            href="/rigging#services"
            className="nav-link"
            onClick={scrollToHash("/rigging", "#services")}
          >
            Services
          </a>
          <a
            href="/rigging#rentals"
            className="nav-link"
            onClick={scrollToHash("/rigging", "#rentals")}
          >
            Rentals
          </a>

          <Link
            to="/product-info"
            className="nav-link"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            Product
            <br />
            Specifications
          </Link>

          <a
            href="/#locations"
            className="nav-link"
            onClick={scrollToHash("/", "#locations")}
          >
            Locations
            <br />& Contact
          </a>
          <a
            href="/#about-us"
            className="nav-link"
            onClick={scrollToHash("/", "#about-us")}
          >
            About
            <br />
            Us
          </a>

          {/* Online Certs Dropdown */}
          <div className="nav-dropdown">
            <div className="nav-dropdown-trigger" style={{ cursor: "default" }}>
              Online
              <br />
              Certs
            </div>
            <div className="nav-dropdown-content">
              <a
                href="https://app.tessalink.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Houston
              </a>
              <a
                href="https://app.tessalink.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Odessa
              </a>
              <a
                href="https://liftingandtesting.com/login/?redirect_to=https%3A%2F%2Fliftingandtesting.com%2F"
                target="_blank"
                rel="noopener noreferrer"
              >
                Lafayette
              </a>
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile Navigation Overlay */}
      <div className={`mobile-nav-overlay ${isMobileMenuOpen ? "open" : ""}`}>
        <button
          onClick={toggleMobileMenu}
          aria-label="Close menu"
          className="mobile-close-btn"
        >
          &times;
        </button>

        <div className="mobile-nav-primary">
          {isRiggingPage ? (
            <>
              <Link
                to="/rigging"
                className="mobile-nav-link mobile-nav-link--primary"
                onClick={toggleMobileMenu}
              >
                RIGGING
              </Link>
              <Link
                to="/cranes"
                className="mobile-nav-link mobile-nav-link--secondary"
                onClick={toggleMobileMenu}
              >
                Go to Cranes
              </Link>
            </>
          ) : isCranesPage ? (
            <>
              <Link
                to="/cranes"
                className="mobile-nav-link mobile-nav-link--primary"
                onClick={toggleMobileMenu}
              >
                CRANES
              </Link>
              <Link
                to="/rigging"
                className="mobile-nav-link mobile-nav-link--secondary"
                onClick={toggleMobileMenu}
              >
                Go to Rigging
              </Link>
            </>
          ) : (
            <>
              <Link
                to="/rigging"
                className="mobile-nav-link mobile-nav-link--primary"
                onClick={toggleMobileMenu}
              >
                RIGGING
              </Link>
              <Link
                to="/cranes"
                className="mobile-nav-link mobile-nav-link--primary"
                onClick={toggleMobileMenu}
              >
                CRANES
              </Link>
            </>
          )}
        </div>

        <div className="mobile-nav-sections">
          <div className="mobile-nav-group">
            <a
              href="/rigging#products"
              className="mobile-dropdown-header"
              onClick={(e) => {
                scrollToHash("/rigging", "#products")(e);
                toggleMobileMenu();
              }}
            >
              Products
            </a>
            <div className="mobile-dropdown-items">
              <a
                href="/rigging#wire-rope-cable"
                onClick={(e) => {
                  scrollToHash("/rigging", "#wire-rope-cable")(e);
                  toggleMobileMenu();
                }}
              >
                Wire Rope & Cable
              </a>
              <a
                href="/rigging#wire-rope-assemblies"
                onClick={(e) => {
                  scrollToHash("/rigging", "#wire-rope-assemblies")(e);
                  toggleMobileMenu();
                }}
              >
                Wire Rope Assemblies
              </a>
              <a
                href="/rigging#chain-fittings"
                onClick={(e) => {
                  scrollToHash("/rigging", "#chain-fittings")(e);
                  toggleMobileMenu();
                }}
              >
                Chain & Fittings
              </a>
              <a
                href="/rigging#synthetics"
                onClick={(e) => {
                  scrollToHash("/rigging", "#synthetics")(e);
                  toggleMobileMenu();
                }}
              >
                Synthetics
              </a>
              <a
                href="/rigging#rigging-hardware"
                onClick={(e) => {
                  scrollToHash("/rigging", "#rigging-hardware")(e);
                  toggleMobileMenu();
                }}
              >
                Rigging Hardware
              </a>
              <a
                href="/rigging#lubricators"
                onClick={(e) => {
                  scrollToHash("/rigging", "#lubricators")(e);
                  toggleMobileMenu();
                }}
              >
                Lubricators / Lubricants
              </a>
              <a
                href="/rigging#load-securement"
                onClick={(e) => {
                  scrollToHash("/rigging", "#load-securement")(e);
                  toggleMobileMenu();
                }}
              >
                Load Securement
              </a>
              <a
                href="/rigging#cordage"
                onClick={(e) => {
                  scrollToHash("/rigging", "#cordage")(e);
                  toggleMobileMenu();
                }}
              >
                Cordage
              </a>
              <a
                href="/rigging#hoists"
                onClick={(e) => {
                  scrollToHash("/rigging", "#hoists")(e);
                  toggleMobileMenu();
                }}
              >
                Hoists, Service & Repairs
              </a>
              <a
                href="/rigging#winches"
                onClick={(e) => {
                  scrollToHash("/rigging", "#winches")(e);
                  toggleMobileMenu();
                }}
              >
                Winches & Accessories
              </a>
            </div>
          </div>

          <div className="mobile-nav-group">
            <a
              href="/rigging#services"
              className="mobile-dropdown-header"
              onClick={(e) => {
                scrollToHash("/rigging", "#services")(e);
                toggleMobileMenu();
              }}
            >
              Services
            </a>
          </div>

          <div className="mobile-nav-group">
            <a
              href="/rigging#rentals"
              className="mobile-dropdown-header"
              onClick={(e) => {
                scrollToHash("/rigging", "#rentals")(e);
                toggleMobileMenu();
              }}
            >
              Rentals
            </a>
          </div>

          <div className="mobile-nav-group">
            <Link
              to="/product-info"
              className="mobile-dropdown-header"
              onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" }); toggleMobileMenu(); }}
            >
              Product Specifications
            </Link>
          </div>

          <div className="mobile-nav-group">
            <a
              href="/#locations"
              className="mobile-dropdown-header"
              onClick={(e) => {
                scrollToHash("/", "#locations")(e);
                toggleMobileMenu();
              }}
            >
              Locations & Contact
            </a>
          </div>

          <div className="mobile-nav-group">
            <a
              href="/#about-us"
              className="mobile-dropdown-header"
              onClick={(e) => {
                scrollToHash("/", "#about-us")(e);
                toggleMobileMenu();
              }}
            >
              About Us
            </a>
          </div>

          <div className="mobile-nav-group">
            <div className="mobile-dropdown-header mobile-dropdown-header--static">
              Online Certs
            </div>
            <div className="mobile-dropdown-items">
              <a
                href="https://app.tessalink.com/"
                target="_blank"
                rel="noopener noreferrer"
                onClick={toggleMobileMenu}
              >
                Houston
              </a>
              <a
                href="https://app.tessalink.com/"
                target="_blank"
                rel="noopener noreferrer"
                onClick={toggleMobileMenu}
              >
                Odessa
              </a>
              <a
                href="https://liftingandtesting.com/login/?redirect_to=https%3A%2F%2Fliftingandtesting.com%2F"
                target="_blank"
                rel="noopener noreferrer"
                onClick={toggleMobileMenu}
              >
                Lafayette
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
