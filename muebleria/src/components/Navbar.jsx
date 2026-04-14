import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <h1>Aduo Mobiliario</h1>

      <ul>
        <li>
          <Link to="/">INICIO</Link>
        </li>
        <li>
          <Link to="/gallery">GALERIA DE PROYECTOS</Link>
        </li>
        <li>
          <Link to="/about">CONOCENOS</Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
