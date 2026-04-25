import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
      <Link to="/" className="navbar__brand" onClick={closeMenu}>
        Creativos muebles Furniture
      </Link>

      <button className="navbar__toggle" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </button>

      <ul className={`navbar__links ${menuOpen ? "navbar__links--open" : ""}`}>
        <li>
          <Link
            to="/gallery"
            onClick={closeMenu}
            className={`navbar__link ${
              location.pathname === "/gallery" ? "navbar__link--active" : ""
            }`}
          >
            GALERÍA DE PROYECTOS
          </Link>
        </li>

        <li>
          <Link
            to="/about"
            onClick={closeMenu}
            className={`navbar__link ${
              location.pathname === "/about" ? "navbar__link--active" : ""
            }`}
          >
            CONÓCENOS
          </Link>
        </li>

        <li>
          <Link
            to="/contact"
            onClick={closeMenu}
            className={`navbar__link ${
              location.pathname === "/contact" ? "navbar__link--active" : ""
            }`}
          >
            CONTACTO
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
