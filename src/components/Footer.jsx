import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Footer.css";

const featuredColumn = {
  heading: "Featured Products & Services",
  links: [
    { label: "J.D. Neuhaus Hoists & Repairs", to: "/rigging/hoists" },
    { label: "Bridon Constructex Drill Line – TON MILE CHAMP", to: "/rigging/bridon-constructex" },
    { label: "Vertical & Horizontal Load Testing", to: "/rigging/load-testing" },
    { label: "Custom Fabricated Bridge Cranes", to: "/cranes/bridge-cranes" },
  ],
};

const quickLinksColumn = {
  heading: "Quick Links",
  links: [
    { label: "Rigging Department", to: "/rigging" },
    { label: "Rigging Product Specifications", to: "/product-info" },
    { label: "Crane Department", to: "/cranes" },
    { label: "Crane Info Center", to: "/info-center" },
  ],
};

const locationsColumn = {
  heading: "Locations and Contact",
  links: [
    { label: "Odessa, TX – Core Lifting", to: "/rigging#loc-odessa" },
    { label: "Houston, TX – Core Lifting", to: "/rigging#loc-houston" },
    { label: "Lafayette, LA – Core Lifting", to: "/rigging#loc-lafayette" },
    { label: "Houma, LA – Sea Ropes", to: "/rigging#loc-houma" },
    { label: "New Orleans, LA – Sea Ropes", to: "/rigging#loc-new-orleans" },
  ],
};

function FooterColumn({ heading, links, onHashLinkClick }) {
  return (
    <div className="footer-col">
      <h3 className="footer-col-heading">{heading}</h3>
      <ul className="footer-col-list">
        {links.map((link) => {
          const hashIndex = link.to.indexOf("#");
          if (hashIndex === -1) {
            return (
              <li key={link.to}>
                <Link to={link.to}>{link.label}</Link>
              </li>
            );
          }
          const path = link.to.slice(0, hashIndex);
          const hash = link.to.slice(hashIndex);
          return (
            <li key={link.to}>
              <a href={link.to} onClick={onHashLinkClick(path, hash)}>
                {link.label}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default function Footer() {
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

  return (
    <footer className="site-footer">
      <div className="footer-links">
        <FooterColumn {...featuredColumn} onHashLinkClick={scrollToHash} />
        <FooterColumn {...quickLinksColumn} onHashLinkClick={scrollToHash} />
        <FooterColumn {...locationsColumn} onHashLinkClick={scrollToHash} />
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Core Lifting. All rights reserved.</p>
      </div>
    </footer>
  );
}
