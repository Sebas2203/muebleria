import React from "react";
import { Link } from "react-router-dom";
import "./NotFoundPage.css";

function NotFoundPage() {
  return (
    <div className="notfound">
      <div className="notfound__content">
        <p className="notfound__code">404</p>
        <p className="notfound__title">PÁGINA NO ENCONTRADA</p>
        <p className="notfound__sub">
          La página que buscas no existe o fue movida.
        </p>
        <Link to="/" className="notfound__btn">
          VOLVER AL INICIO
        </Link>
      </div>
    </div>
  );
}

export default NotFoundPage;
