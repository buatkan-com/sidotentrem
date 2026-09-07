import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Icon from "./Icons";
import { nav } from "../data/site";
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false),
    [open, setOpen] = useState(false),
    loc = useLocation();
  useEffect(() => {
    const f = () => setScrolled(scrollY > 30);
    addEventListener("scroll", f);
    return () => removeEventListener("scroll", f);
  }, []);
  useEffect(() => setOpen(false), [loc.pathname]);
  return (
    <header className={`nav ${scrolled ? "nav-solid" : ""}`}>
      <div className="nav-inner">
        <Link className="brand" to="/">
          <span>SIDO TENTREM</span>
          <small>Warisan yang Menenteramkan.</small>
        </Link>
        <nav className="desktop-nav">
          {nav.map(([label, path]) => (
            <Link
              key={path}
              className={loc.pathname === path ? "active" : ""}
              to={path}
            >
              {label}
            </Link>
          ))}
        </nav>
        <div className="nav-tools">
          <button aria-label="Search" className="icon-btn">
            <Icon name="Search" size={18} />
          </button>
          <a
            aria-label="Instagram"
            className="icon-btn"
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon name="Instagram" size={18} />
          </a>
          <button
            aria-label="Open menu"
            className="menu-btn"
            onClick={() => setOpen(!open)}
          >
            {open ? <Icon name="X" /> : <Icon name="Menu" />}
          </button>
        </div>
      </div>
      {open && (
        <div className="mobile-menu">
          {nav.map(([label, path]) => (
            <Link key={path} to={path}>
              {label}
              <span>↗</span>
            </Link>
          ))}
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram <span>↗</span>
          </a>
        </div>
      )}
    </header>
  );
}
