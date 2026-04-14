import React, { useState } from "react";
import "./Gallery.css";

/*
  projects:
    lista de proyectos a mostrar en la galería.

  Cada uno tiene:
    - nombre
    - categoría
    - imagen
*/
const projects = [
  {
    id: 1,
    name: "SALA CONTEMPORÁNEA",
    category: "SALA",
    image:
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80",
  },
  {
    id: 2,
    name: "COMEDOR MINIMALISTA",
    category: "COMEDOR",
    image: null,
  },
  {
    id: 3,
    name: "DORMITORIO SERENO",
    category: "DORMITORIO",
    image: null,
  },
  {
    id: 4,
    name: "ESTUDIO MODERNO",
    category: "ESTUDIO",
    image: null,
  },
  {
    id: 5,
    name: "SALA DE LECTURA",
    category: "SALA",
    image: null,
  },
  {
    id: 6,
    name: "TERRAZA EXTERIOR",
    category: "EXTERIOR",
    image: null,
  },
  {
    id: 7,
    name: "SALA INDUSTRIAL",
    category: "SALA",
    image: null,
  },
  {
    id: 8,
    name: "COMEDOR FAMILIAR",
    category: "COMEDOR",
    image: null,
  },
  {
    id: 9,
    name: "DORMITORIO SUITE",
    category: "DORMITORIO",
    image: null,
  },
];

//categorias, opciones de filtro para la galeria
const categories = [
  "TODOS",
  "SALA",
  "COMEDOR",
  "DORMITORIO",
  "ESTUDIO",
  "EXTERIOR",
];

export default function Gallery() {
  // active: categoría actualmente seleccionada
  // lightbox: proyecto seleccionado (para mostrar en vista ampliada) si es null → lightbox cerrado

  const [active, setActive] = useState("TODOS");
  const [lightbox, setLightbox] = useState(null);

  /*
    filtered:
    lista de proyectos filtrada por categoría
      - si es "TODOS", muestra todo
      - si no, filtra por categoría
  */
  const filtered =
    active === "TODOS"
      ? projects
      : projects.filter((p) => p.category === active);

  /*
    currentIndex: posición del proyecto actual dentro de la lista filtrada (se usa para navegación en el lightbox)
  */
  const currentIndex =
    lightbox !== null ? filtered.findIndex((p) => p.id === lightbox.id) : -1;

  // Abrir y cerrar lightbox
  const openLightbox = (project) => setLightbox(project);
  const closeLightbox = () => setLightbox(null);

  /*
    Navegación del lightbox:
      - goPrev: va al anterior
      - goNext: va al siguiente

    stopPropagation evita que el click cierre el lightbox
  */
  const goPrev = (e) => {
    e.stopPropagation();
    if (currentIndex > 0) setLightbox(filtered[currentIndex - 1]);
  };

  const goNext = (e) => {
    e.stopPropagation();
    if (currentIndex < filtered.length - 1)
      setLightbox(filtered[currentIndex + 1]);
  };

  /*
    Control con teclado:
      - ← anterior
      - → siguiente
      - ESC cerrar
  */
  const handleKeyDown = (e) => {
    if (!lightbox) return;
    if (e.key === "ArrowLeft") goPrev(e);
    if (e.key === "ArrowRight") goNext(e);
    if (e.key === "Escape") closeLightbox();
  };

  return (
    /*
      tabIndex={-1} permite que el contenedor reciba eventos de teclado
    */
    <main className="gallery" onKeyDown={handleKeyDown} tabIndex={-1}>
      {/* ================= HERO ================= */}
      <section className="gallery-hero">
        <p className="gallery-hero__label">PROYECTOS</p>
        <h1 className="gallery-hero__title">GALERÍA DE DISEÑOS</h1>
      </section>

      {/* ================= FILTROS ================= */}
      <div className="gallery-filters">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`gallery-filter ${
              active === cat ? "gallery-filter--active" : ""
            }`}
            onClick={() => setActive(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* ================= GRID ================= */}
      <section className="gallery-grid">
        {filtered.map((project) => (
          <div
            key={project.id}
            className="gallery-item"
            onClick={() => openLightbox(project)}
          >
            <img
              src={project.image}
              alt={project.name}
              className="gallery-item__img"
            />

            <div className="gallery-item__overlay">
              <p className="gallery-item__category">{project.category}</p>
              <p className="gallery-item__name">{project.name}</p>
            </div>
          </div>
        ))}
      </section>

      {/* ================= LIGHTBOX ================= */}
      {lightbox && (
        <div className="lightbox" onClick={closeLightbox}>
          {/* botón cerrar */}
          <button className="lightbox__close" onClick={closeLightbox}>
            ✕
          </button>

          {/* flecha izquierda */}
          {currentIndex > 0 && (
            <button
              className="lightbox__arrow lightbox__arrow--prev"
              onClick={goPrev}
            >
              ‹
            </button>
          )}

          {/* contenido principal */}
          <div
            className="lightbox__content"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={lightbox.image}
              alt={lightbox.name}
              className="lightbox__img"
            />

            <div className="lightbox__info">
              <p className="lightbox__category">{lightbox.category}</p>
              <p className="lightbox__name">{lightbox.name}</p>
              <p className="lightbox__counter">
                {currentIndex + 1} / {filtered.length}
              </p>
            </div>
          </div>

          {/* flecha derecha */}
          {currentIndex < filtered.length - 1 && (
            <button
              className="lightbox__arrow lightbox__arrow--next"
              onClick={goNext}
            >
              ›
            </button>
          )}
        </div>
      )}
    </main>
  );
}
