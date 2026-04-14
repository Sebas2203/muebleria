import React, { useState, useEffect } from "react";
/*
  useState: permite crear estados (variables reactivas). Cuando cambian, react vuelve a renderizar el componente automaticamente
  useEffect: permite ejecutar codigo en momentos especificos del ciclo de vida, por ejemplo cuando el componente se monta por primera vez
*/

import { Link, useLocation } from "react-router-dom";
/*
  Link: funciona como la etiqueta <a>, pero sin recargar la pagina
  useLocation: hook que devuelve informacion de la URL actual, como el pathname
*/

//importar archivo css
import "./Navbar.css";

//Componeten Navbar
function Navbar() {
  /*
    useState: retorna un arreglo con dos elemetos:
      - scrolled: estado actual (empieza false)
      - setScrolled: funcion para actualizar ese estado

    location: contiene la informacion de la ruta actual
  */

  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  /*
    Detecta el scroll del usuario:
      - si baja mas de 20px -> scrolled = true
      - si no -> scrolled = false

    Se agrega un listener al hacer scroll y se limpia cuando el componente se desmonta
  */
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    /*
      <nav> contenedor principal de la navbar

      navbar:
        - Si scrolled es true se aplica el estilo

      navbar__link:
        - Se aplica si la ruta actual coincide con el link
    */

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
