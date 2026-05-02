import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Bloquea el scroll del body cuando el menú está abierto
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  // Cierra el menú al cambiar de página
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <nav
        className={`navbar ${scrolled || location.pathname === "/contact" ? "navbar--scrolled" : ""}`}
      >
        <Link to="/" className="navbar__brand" onClick={closeMenu}>
          CREATIVOS MUEBLES FURNITURE
        </Link>

        {/* Links desktop — se ocultan en móvil con CSS */}
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
          <li>
            <Link
              to="/contact"
              className={`navbar__link ${location.pathname === "/contact" ? "navbar__link--active" : ""}`}
            >
              CONTACTO
            </Link>
          </li>
        </ul>

        {/* Hamburguesa — solo visible en móvil */}
        <button
          className="navbar__toggle"
          onClick={() => setMenuOpen(true)}
          aria-label="Abrir menú"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>

      {/* Menú fullscreen móvil */}
      <div className={`mobile-menu ${menuOpen ? "mobile-menu--open" : ""}`}>
        {/* Nombre de la empresa arriba */}
        <p className="mobile-menu__brand">CREATIVOS MUEBLES FURNITURE</p>

        {/* Links centrados */}
        <ul className="mobile-menu__links">
          <li>
            <Link
              to="/gallery"
              className={`mobile-menu__link ${location.pathname === "/gallery" ? "mobile-menu__link--active" : ""}`}
            >
              GALERÍA DE PROYECTOS
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className={`mobile-menu__link ${location.pathname === "/about" ? "mobile-menu__link--active" : ""}`}
            >
              CONÓCENOS
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className={`mobile-menu__link ${location.pathname === "/contact" ? "mobile-menu__link--active" : ""}`}
            >
              CONTACTO
            </Link>
          </li>
        </ul>

        {/* Botón cerrar abajo */}
        <button
          className="mobile-menu__close"
          onClick={closeMenu}
          aria-label="Cerrar menú"
        >
          ✕
        </button>
      </div>
    </>
  );
}

export default Navbar;
