import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logoFull from "../assets/core-logo.png";
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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isRiggingPage = location.pathname === "/rigging";
  const isCranesPage = location.pathname === "/cranes";
  const isCraneInfoPage = location.pathname === "/info-center";
  const isProductInfoPage = location.pathname === "/product-info";
  const isHomePage = location.pathname === "/";
  const isHeaderVisible = !isHomePage;

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


  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const getButtonClass = (path) => {
    const isActive = location.pathname === path;
    return `header-action-btn${isActive ? " active" : ""}`;
  };

  // navLinkStyle moved to .nav-link class in Header.css

  return (
    <>
      <header
        className={`header-container${isHomePage ? " header-home" : ""}${isHeaderVisible ? " header-visible" : " header-hidden"}`}
        style={{
          position: isHomePage ? "fixed" : "sticky",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          color: "#333",
          padding: "0.8rem clamp(2.5rem, 4vw, 6rem) 1.55rem",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "2rem" }}>
          <Link
            to="/"
            onClick={() => window.scrollTo(0, 0)}
            style={{ display: "flex", alignItems: "center", zIndex: 1003 }}
          >
            <img
              src={logoFull}
              alt="CORE Lifting Products"
              style={{
                width: "200px",
                maxHeight: "70px",
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
                <Link to="/rigging" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className={getButtonClass("/rigging")}>
                  RIGGING
                </Link>
                <Link to="/cranes" onClick={() => window.scrollTo(0, 0)} className="header-action-btn header-action-btn--secondary">
                  Go to Cranes
                </Link>
              </>
            ) : isCranesPage ? (
              <>
                <Link to="/cranes" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className={getButtonClass("/cranes")}>
                  CRANES
                </Link>
                <Link to="/rigging" onClick={() => window.scrollTo(0, 0)} className="header-action-btn header-action-btn--secondary">
                  Go to Rigging
                </Link>
              </>
            ) : isProductInfoPage ? (
              <>
                <Link to="/rigging" onClick={() => window.scrollTo(0, 0)} className={getButtonClass("/rigging")}>
                  RIGGING
                </Link>
                <Link to="/cranes" onClick={() => window.scrollTo(0, 0)} className="header-action-btn header-action-btn--secondary">
                  Go to Cranes
                </Link>
              </>
            ) : isCraneInfoPage ? (
              <>
                <Link to="/cranes" onClick={() => window.scrollTo(0, 0)} className={getButtonClass("/cranes")}>
                  CRANES
                </Link>
                <Link to="/rigging" onClick={() => window.scrollTo(0, 0)} className="header-action-btn header-action-btn--secondary">
                  Go to Rigging
                </Link>
              </>
            ) : (
              <>
                <Link to="/rigging" onClick={() => window.scrollTo(0, 0)} className={getButtonClass("/rigging")}>
                  RIGGING
                </Link>
                <Link to="/cranes" onClick={() => window.scrollTo(0, 0)} className={getButtonClass("/cranes")}>
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
            fontSize: "0.82rem",
            fontWeight: "500",
            alignItems: "center",
            color: "#444",
            textTransform: "uppercase",
            letterSpacing: "0.5px",
          }}
        >
          {isCranesPage || isCraneInfoPage ? (
            <>
              {/* Cranes dropdown */}
              <div className="nav-dropdown">
                <a
                  href="/cranes#cranes"
                  className="nav-dropdown-trigger nav-link"
                  onClick={scrollToHash("/cranes", "#cranes")}
                >
                  Cranes
                </a>
                <div className="nav-dropdown-content">
                  <a href="/cranes#bridge-cranes" onClick={scrollToHash("/cranes", "#bridge-cranes")}>
                    Bridge Cranes
                  </a>
                  <a href="/cranes#manufacturing" onClick={scrollToHash("/cranes", "#manufacturing")}>
                    Manufacturing
                  </a>
                  <a href="/cranes#jib-cranes" onClick={scrollToHash("/cranes", "#jib-cranes")}>
                    Jib Cranes
                  </a>
                  <a href="/cranes#workstation-cranes" onClick={scrollToHash("/cranes", "#workstation-cranes")}>
                    Workstation Cranes
                  </a>
                  <a href="/cranes#davit-cranes" onClick={scrollToHash("/cranes", "#davit-cranes")}>
                    Davit Cranes
                  </a>
                </div>
              </div>

              <div className="nav-dropdown">
                <a
                  href="/cranes#crane-services"
                  className="nav-dropdown-trigger nav-link"
                  onClick={scrollToHash("/cranes", "#crane-services")}
                >
                  Services
                </a>
                <div className="nav-dropdown-content">
                  <a href="/cranes#field-services" onClick={scrollToHash("/cranes", "#field-services")}>
                    Field Services
                  </a>
                  <a href="/cranes#load-testing" onClick={scrollToHash("/cranes", "#load-testing")}>
                    Load Testing
                  </a>
                  <a href="/cranes#installation" onClick={scrollToHash("/cranes", "#installation")}>
                    Installation
                  </a>
                </div>
              </div>
            </>
          ) : (
            <>
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
                  <a href="/rigging#hoists" onClick={scrollToHash("/rigging", "#hoists")}>
                    Hoists
                  </a>
                  <a href="/rigging#wire-rope" onClick={scrollToHash("/rigging", "#wire-rope")}>
                    Wire Rope
                  </a>
                  <a href="/rigging#wire-rope-assemblies" onClick={scrollToHash("/rigging", "#wire-rope-assemblies")}>
                    Wire Rope Assemblies
                  </a>
                  <a href="/rigging#rigging-hardware" onClick={scrollToHash("/rigging", "#rigging-hardware")}>
                    Rigging Hardware
                  </a>
                  <a href="/rigging#chain-products" onClick={scrollToHash("/rigging", "#chain-products")}>
                    Chain Products
                  </a>
                  <a href="/rigging#synthetics" onClick={scrollToHash("/rigging", "#synthetics")}>
                    Synthetics
                  </a>
                  <a href="/rigging#lubricators" onClick={scrollToHash("/rigging", "#lubricators")}>
                    Lubricators
                  </a>
                </div>
              </div>

              <div className="nav-dropdown">
                <a
                  href="/rigging#services"
                  className="nav-dropdown-trigger nav-link"
                  onClick={scrollToHash("/rigging", "#services")}
                >
                  Services
                </a>
                <div className="nav-dropdown-content">
                  <a href="/rigging#taper-annealing" onClick={scrollToHash("/rigging", "#taper-annealing")}>
                    Taper Annealing
                  </a>
                  <a href="/rigging#load-testing" onClick={scrollToHash("/rigging", "#load-testing")}>
                    Load Testing
                  </a>
                  <a href="/rigging#portable-pad-eye-testing" onClick={scrollToHash("/rigging", "#portable-pad-eye-testing")}>
                    Portable Pad Eye Testing
                  </a>
                  <a href="/rigging#inspections" onClick={scrollToHash("/rigging", "#inspections")}>
                    Inspections
                  </a>
                  <a href="/rigging#ndt" onClick={scrollToHash("/rigging", "#ndt")}>
                    NDT
                  </a>
                  <a href="/rigging#winch-servicing" onClick={scrollToHash("/rigging", "#winch-servicing")}>
                    Winch Servicing
                  </a>
                  <a href="/rigging#hoist-repair" onClick={scrollToHash("/rigging", "#hoist-repair")}>
                    Hoist Repair
                  </a>
                  <a href="/rigging#block-rebuilds" onClick={scrollToHash("/rigging", "#block-rebuilds")}>
                    Block Rebuilds
                  </a>
                  <a href="/rigging#winch-line-servicing" onClick={scrollToHash("/rigging", "#winch-line-servicing")}>
                    Winch Line Servicing
                  </a>
                </div>
              </div>
              <a
                href="/rigging#rentals"
                className="nav-link"
                onClick={scrollToHash("/rigging", "#rentals")}
              >
                Rentals
              </a>
            </>
          )}

          {isCranesPage || isCraneInfoPage ? (
            <Link
              to="/info-center"
              className="nav-link"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              Info<br />Center
            </Link>
          ) : (
            <Link
              to="/product-info"
              className="nav-link"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              Product<br />Specifications
            </Link>
          )}

          {isCranesPage || isCraneInfoPage ? (
            <a
              href="/cranes#locations"
              className="nav-link"
              onClick={scrollToHash("/cranes", "#locations")}
            >
              Locations<br />&amp; Contact
            </a>
          ) : isRiggingPage || isProductInfoPage ? (
            <a
              href="/rigging#locations"
              className="nav-link"
              onClick={scrollToHash("/rigging", "#locations")}
            >
              Locations<br />&amp; Contact
            </a>
          ) : null}

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
                onClick={() => { toggleMobileMenu(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
              >
                RIGGING
              </Link>
              <Link
                to="/cranes"
                className="mobile-nav-link mobile-nav-link--secondary"
                onClick={() => { toggleMobileMenu(); window.scrollTo(0, 0); }}
              >
                Go to Cranes
              </Link>
            </>
          ) : isCranesPage ? (
            <>
              <Link
                to="/cranes"
                className="mobile-nav-link mobile-nav-link--primary"
                onClick={() => { toggleMobileMenu(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
              >
                CRANES
              </Link>
              <Link
                to="/rigging"
                className="mobile-nav-link mobile-nav-link--secondary"
                onClick={() => { toggleMobileMenu(); window.scrollTo(0, 0); }}
              >
                Go to Rigging
              </Link>
            </>
          ) : (
            <>
              <Link
                to="/rigging"
                className="mobile-nav-link mobile-nav-link--primary"
                onClick={() => { toggleMobileMenu(); window.scrollTo(0, 0); }}
              >
                RIGGING
              </Link>
              <Link
                to="/cranes"
                className="mobile-nav-link mobile-nav-link--primary"
                onClick={() => { toggleMobileMenu(); window.scrollTo(0, 0); }}
              >
                CRANES
              </Link>
            </>
          )}
        </div>

        <div className="mobile-nav-sections">
          {isCranesPage ? (
            <>
              <div className="mobile-nav-group">
                <a
                  href="/cranes#cranes"
                  className="mobile-dropdown-header"
                  onClick={(e) => { scrollToHash("/cranes", "#cranes")(e); toggleMobileMenu(); }}
                >
                  Cranes
                </a>
                <div className="mobile-dropdown-items">
                  <a href="/cranes#bridge-cranes" onClick={(e) => { scrollToHash("/cranes", "#bridge-cranes")(e); toggleMobileMenu(); }}>
                    Bridge Cranes
                  </a>
                  <a href="/cranes#manufacturing" onClick={(e) => { scrollToHash("/cranes", "#manufacturing")(e); toggleMobileMenu(); }}>
                    Manufacturing
                  </a>
                  <a href="/cranes#jib-cranes" onClick={(e) => { scrollToHash("/cranes", "#jib-cranes")(e); toggleMobileMenu(); }}>
                    Jib Cranes
                  </a>
                  <a href="/cranes#workstation-cranes" onClick={(e) => { scrollToHash("/cranes", "#workstation-cranes")(e); toggleMobileMenu(); }}>
                    Workstation Cranes
                  </a>
                  <a href="/cranes#davit-cranes" onClick={(e) => { scrollToHash("/cranes", "#davit-cranes")(e); toggleMobileMenu(); }}>
                    Davit Cranes
                  </a>
                </div>
              </div>

              <div className="mobile-nav-group">
                <a
                  href="/cranes#crane-services"
                  className="mobile-dropdown-header"
                  onClick={(e) => { scrollToHash("/cranes", "#crane-services")(e); toggleMobileMenu(); }}
                >
                  Services
                </a>
                <div className="mobile-dropdown-items">
                  <a href="/cranes#field-services" onClick={(e) => { scrollToHash("/cranes", "#field-services")(e); toggleMobileMenu(); }}>
                    Field Services
                  </a>
                  <a href="/cranes#load-testing" onClick={(e) => { scrollToHash("/cranes", "#load-testing")(e); toggleMobileMenu(); }}>
                    Load Testing
                  </a>
                  <a href="/cranes#installation" onClick={(e) => { scrollToHash("/cranes", "#installation")(e); toggleMobileMenu(); }}>
                    Installation
                  </a>
                </div>
              </div>
            </>
          ) : (
            <>
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
                  <a href="/rigging#hoists" onClick={(e) => { scrollToHash("/rigging", "#hoists")(e); toggleMobileMenu(); }}>
                    Hoists
                  </a>
                  <a href="/rigging#wire-rope" onClick={(e) => { scrollToHash("/rigging", "#wire-rope")(e); toggleMobileMenu(); }}>
                    Wire Rope
                  </a>
                  <a href="/rigging#wire-rope-assemblies" onClick={(e) => { scrollToHash("/rigging", "#wire-rope-assemblies")(e); toggleMobileMenu(); }}>
                    Wire Rope Assemblies
                  </a>
                  <a href="/rigging#rigging-hardware" onClick={(e) => { scrollToHash("/rigging", "#rigging-hardware")(e); toggleMobileMenu(); }}>
                    Rigging Hardware
                  </a>
                  <a href="/rigging#chain-products" onClick={(e) => { scrollToHash("/rigging", "#chain-products")(e); toggleMobileMenu(); }}>
                    Chain Products
                  </a>
                  <a href="/rigging#synthetics" onClick={(e) => { scrollToHash("/rigging", "#synthetics")(e); toggleMobileMenu(); }}>
                    Synthetics
                  </a>
                  <a href="/rigging#lubricators" onClick={(e) => { scrollToHash("/rigging", "#lubricators")(e); toggleMobileMenu(); }}>
                    Lubricators
                  </a>
                </div>
              </div>

              <div className="mobile-nav-group">
                <a
                  href="/rigging#services"
                  className="mobile-dropdown-header"
                  onClick={(e) => { scrollToHash("/rigging", "#services")(e); toggleMobileMenu(); }}
                >
                  Services
                </a>
                <div className="mobile-dropdown-items">
                  <a href="/rigging#taper-annealing" onClick={(e) => { scrollToHash("/rigging", "#taper-annealing")(e); toggleMobileMenu(); }}>
                    Taper Annealing
                  </a>
                  <a href="/rigging#load-testing" onClick={(e) => { scrollToHash("/rigging", "#load-testing")(e); toggleMobileMenu(); }}>
                    Load Testing
                  </a>
                  <a href="/rigging#portable-pad-eye-testing" onClick={(e) => { scrollToHash("/rigging", "#portable-pad-eye-testing")(e); toggleMobileMenu(); }}>
                    Portable Pad Eye Testing
                  </a>
                  <a href="/rigging#inspections" onClick={(e) => { scrollToHash("/rigging", "#inspections")(e); toggleMobileMenu(); }}>
                    Inspections
                  </a>
                  <a href="/rigging#ndt" onClick={(e) => { scrollToHash("/rigging", "#ndt")(e); toggleMobileMenu(); }}>
                    NDT
                  </a>
                  <a href="/rigging#winch-servicing" onClick={(e) => { scrollToHash("/rigging", "#winch-servicing")(e); toggleMobileMenu(); }}>
                    Winch Servicing
                  </a>
                  <a href="/rigging#hoist-repair" onClick={(e) => { scrollToHash("/rigging", "#hoist-repair")(e); toggleMobileMenu(); }}>
                    Hoist Repair
                  </a>
                  <a href="/rigging#block-rebuilds" onClick={(e) => { scrollToHash("/rigging", "#block-rebuilds")(e); toggleMobileMenu(); }}>
                    Block Rebuilds
                  </a>
                  <a href="/rigging#winch-line-servicing" onClick={(e) => { scrollToHash("/rigging", "#winch-line-servicing")(e); toggleMobileMenu(); }}>
                    Winch Line Servicing
                  </a>
                </div>
              </div>

              <div className="mobile-nav-group">
                <a
                  href="/rigging#rentals"
                  className="mobile-dropdown-header"
                  onClick={(e) => { scrollToHash("/rigging", "#rentals")(e); toggleMobileMenu(); }}
                >
                  Rentals
                </a>
              </div>
            </>
          )}

          <div className="mobile-nav-group">
            {isCranesPage || isCraneInfoPage ? (
              <Link
                to="/info-center"
                className="mobile-dropdown-header"
                onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" }); toggleMobileMenu(); }}
              >
                Info Center
              </Link>
            ) : (
              <Link
                to="/product-info"
                className="mobile-dropdown-header"
                onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" }); toggleMobileMenu(); }}
              >
                Product Specifications
              </Link>
            )}
          </div>

          {isCranesPage || isCraneInfoPage ? (
            <div className="mobile-nav-group">
              <a
                href="/cranes#locations"
                className="mobile-dropdown-header"
                onClick={(e) => { scrollToHash("/cranes", "#locations")(e); toggleMobileMenu(); }}
              >
                Locations &amp; Contact
              </a>
            </div>
          ) : isRiggingPage || isProductInfoPage ? (
            <div className="mobile-nav-group">
              <a
                href="/rigging#locations"
                className="mobile-dropdown-header"
                onClick={(e) => { scrollToHash("/rigging", "#locations")(e); toggleMobileMenu(); }}
              >
                Locations &amp; Contact
              </a>
            </div>
          ) : null}

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
