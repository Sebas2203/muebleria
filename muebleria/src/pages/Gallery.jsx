import React, { useState } from "react";
import { projects, categories } from "../data/projects";
import "../styles/Gallery.css";

// ─────────────────────────────────────────
// DATOS DE CONTACTO — cambiá estos cuando los tengas
const WHATSAPP_NUMBER = "50671681098";
const CONTACT_EMAIL = "info@aduomobiliario.com";
// ─────────────────────────────────────────

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

  const handleWhatsApp = (project) => {
    const msg = `Hola, estoy interesado en cotizar: *${project.name}* (${project.category}). ¿Me pueden dar más información?`;
    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`,
      "_blank",
    );
  };

  const handleEmail = (project) => {
    const subject = `Cotización — ${project.name}`;
    const body = `Hola,\n\nEstoy interesado en cotizar el siguiente proyecto:\n\nProyecto: ${project.name}\nCategoría: ${project.category}\nPrecio referencial: ${project.price}\n\nQuedo a la espera de su respuesta.\n\nGracias.`;
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <main className="gallery" onKeyDown={handleKeyDown} tabIndex={-1}>
      {/* HERO */}
      <section className="gallery-hero">
        <p className="gallery-hero__label">PROYECTOS</p>
        <h1 className="gallery-hero__title">GALERÍA DE DISEÑOS</h1>
      </section>

      {/* FILTROS */}
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

      {/* GRID */}
      <section className="gallery-grid">
        {filtered.map((project, index) => (
          <div
            key={project.id}
            className="gallery-item"
            onClick={() => openLightbox(project)}
          >
            <img
              src={project.image}
              alt={project.name}
              className="gallery-item__img"
              // Las primeras 9 imágenes cargan eager (las visibles al entrar)
              // el resto lazy (solo cuando el usuario hace scroll)
              loading={index < 9 ? "eager" : "lazy"}
              decoding="async"
            />
            <div className="gallery-item__overlay">
              <p className="gallery-item__category">{project.category}</p>
              <p className="gallery-item__name">{project.name}</p>
            </div>
          </div>
        ))}
      </section>

      {/* LIGHTBOX EXPANDIDO */}
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
          {currentIndex < filtered.length - 1 && (
            <button
              className="lightbox__arrow lightbox__arrow--next"
              onClick={goNext}
            >
              ›
            </button>
          )}

          <div className="lightbox__panel" onClick={(e) => e.stopPropagation()}>
            {/* Columna izquierda — imagen */}
            <div className="lightbox__img-col">
              <img
                src={lightbox.image}
                alt={lightbox.name}
                className="lightbox__img"
                loading="eager"
                decoding="async"
              />
              <p className="lightbox__counter">
                {currentIndex + 1} / {filtered.length}
              </p>
            </div>

            {/* Columna derecha — detalle + contacto */}
            <div className="lightbox__detail">
              <p className="lightbox__detail-category">{lightbox.category}</p>
              <h2 className="lightbox__detail-name">{lightbox.name}</h2>

              <p className="lightbox__detail-desc">{lightbox.description}</p>

              <div className="lightbox__specs">
                <div className="lightbox__spec">
                  <p className="lightbox__spec-label">MATERIALES</p>
                  <p className="lightbox__spec-value">{lightbox.materials}</p>
                </div>
                <div className="lightbox__spec">
                  <p className="lightbox__spec-label">DIMENSIONES</p>
                  <p className="lightbox__spec-value">{lightbox.dimensions}</p>
                </div>
                <div className="lightbox__spec">
                  <p className="lightbox__spec-label">PRECIO REFERENCIAL</p>
                  <p className="lightbox__spec-value lightbox__spec-value--price">
                    {lightbox.price}
                  </p>
                </div>
                <div className="lightbox__spec">
                  <p className="lightbox__spec-label">TIEMPO DE ENTREGA</p>
                  <p className="lightbox__spec-value">{lightbox.delivery}</p>
                </div>
              </div>

              <div className="lightbox__contact">
                <p className="lightbox__contact-label">
                  ¿TE INTERESA ESTA PIEZA?
                </p>
                <div className="lightbox__contact-btns">
                  <button
                    className="lightbox__btn lightbox__btn--whatsapp"
                    onClick={() => handleWhatsApp(lightbox)}
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="lightbox__btn-icon"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    WHATSAPP
                  </button>
                  <button
                    className="lightbox__btn lightbox__btn--email"
                    onClick={() => handleEmail(lightbox)}
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      className="lightbox__btn-icon"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                      />
                    </svg>
                    CORREO
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
