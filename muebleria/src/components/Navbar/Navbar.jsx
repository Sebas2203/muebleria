import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
      <Link to="/" className="navbar__brand">
        ADUO MOBILIARIO
      </Link>
      <ul className="navbar__links">
        <li>
          <Link
            to="/gallery"
            className={`navbar__link ${location.pathname === "/gallery" ? "navbar__link--active" : ""}`}
          >
            GALERÍA DE PROYECTOS
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            className={`navbar__link ${location.pathname === "/about" ? "navbar__link--active" : ""}`}
          >
            CONÓCENOS
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
