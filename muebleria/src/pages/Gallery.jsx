import React, { useState } from "react";
import "./Gallery.css";

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
    image:
      "https://images.unsplash.com/photo-1617104678098-de229db51175?w=800&q=80",
  },
  {
    id: 3,
    name: "DORMITORIO SERENO",
    category: "DORMITORIO",
    image:
      "https://images.unsplash.com/photo-1540518614846-7eded433c457?w=800&q=80",
  },
  {
    id: 4,
    name: "ESTUDIO MODERNO",
    category: "ESTUDIO",
    image:
      "https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=800&q=80",
  },
  {
    id: 5,
    name: "SALA DE LECTURA",
    category: "SALA",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80",
  },
  {
    id: 6,
    name: "TERRAZA EXTERIOR",
    category: "EXTERIOR",
    image:
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80",
  },
  {
    id: 7,
    name: "SALA INDUSTRIAL",
    category: "SALA",
    image:
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80",
  },
  {
    id: 8,
    name: "COMEDOR FAMILIAR",
    category: "COMEDOR",
    image:
      "https://images.unsplash.com/photo-1617806118233-18e1de247200?w=800&q=80",
  },
  {
    id: 9,
    name: "DORMITORIO SUITE",
    category: "DORMITORIO",
    image:
      "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&q=80",
  },
];

const categories = [
  "TODOS",
  "SALA",
  "COMEDOR",
  "DORMITORIO",
  "ESTUDIO",
  "EXTERIOR",
];

export default function Gallery() {
  const [active, setActive] = useState("TODOS");
  const [lightbox, setLightbox] = useState(null);

  const filtered =
    active === "TODOS"
      ? projects
      : projects.filter((p) => p.category === active);

  const currentIndex =
    lightbox !== null ? filtered.findIndex((p) => p.id === lightbox.id) : -1;

  const openLightbox = (project) => setLightbox(project);
  const closeLightbox = () => setLightbox(null);

  const goPrev = (e) => {
    e.stopPropagation();
    if (currentIndex > 0) setLightbox(filtered[currentIndex - 1]);
  };

  const goNext = (e) => {
    e.stopPropagation();
    if (currentIndex < filtered.length - 1)
      setLightbox(filtered[currentIndex + 1]);
  };

  const handleKeyDown = (e) => {
    if (!lightbox) return;
    if (e.key === "ArrowLeft") goPrev(e);
    if (e.key === "ArrowRight") goNext(e);
    if (e.key === "Escape") closeLightbox();
  };

  return (
    <main className="gallery" onKeyDown={handleKeyDown} tabIndex={-1}>
      {/* Hero */}
      <section className="gallery-hero">
        <p className="gallery-hero__label">PROYECTOS</p>
        <h1 className="gallery-hero__title">GALERÍA DE DISEÑOS</h1>
      </section>

      {/* Filtros */}
      <div className="gallery-filters">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`gallery-filter ${active === cat ? "gallery-filter--active" : ""}`}
            onClick={() => setActive(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
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

      {/* Lightbox */}
      {lightbox && (
        <div className="lightbox" onClick={closeLightbox}>
          <button className="lightbox__close" onClick={closeLightbox}>
            ✕
          </button>

          {currentIndex > 0 && (
            <button
              className="lightbox__arrow lightbox__arrow--prev"
              onClick={goPrev}
            >
              ‹
            </button>
          )}

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
