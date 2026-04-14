import React, { useState, useEffect } from "react";
import "./Home.css";

//imagenes que se van a usar en el hero
import sillas from "../assets/images/sillas.jpg";
import mesita from "../assets/images/mesita.jpg";
import cama from "../assets/images/cama.jpg";

/*
  heroSlides:
    es un arreglo de slides para el carrusel
    cada slide tiene imagen, texto principal y texto secundario
*/
const heroSlides = [
  {
    id: 1,
    image: sillas,
    headline: "ARQUITECTURA EN CADA MUEBLE",
    subline: "DONDE EL DISEÑO SE CONVIERTE EN PIEZA.",
  },
  {
    id: 2,
    image: mesita,
    headline: "PIEZAS QUE TRANSFORMAN",
    subline: "ESPACIOS CON CARÁCTER Y PRECISIÓN.",
  },
  {
    id: 3,
    image: cama,
    headline: "DISEÑO SIN COMPROMISO",
    subline: "CADA DETALLE TIENE UN PROPÓSITO.",
  },
];

/*
  products:
    lista de productos que se muestran en el carrusel
*/
const products = [
  {
    id: 1,
    name: "SOFÁ DE DISEÑO PERSONALIZADO",
    image: null,
  },
  {
    id: 2,
    name: "SOFÁ SECCIONAL MINIMALISTA",
    image: null,
  },
  {
    id: 3,
    name: "SOFÁ MODULAR CONTEMPORÁNEO",
    image: null,
  },
  {
    id: 4,
    name: "PIEZA CENTRAL PARA SALA",
    image: null,
  },
  {
    id: 5,
    name: "SILLÓN LOUNGE ARTESANAL",
    image: null,
  },
];

export default function Home() {
  /*
    currentSlide: indice del slide actual en el hero
    carouselIndex: posicion actual del carrusel de productos
  */

  const [currentSlide, setCurrentSlide] = useState(0);
  const [carouselIndex, setCarouselIndex] = useState(0);

  //Auto-play del hero: cada 5 segundos cambia al siguiente slide. Cuando llega al final, vuelve a inciar
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  /*
    Configuracion del carrusel:
    visibleCount: cuantos productos se ven al mismo tiempo
    maxIndex: limite para no pasarse del carrusel
  */
  const visibleCount = 4;
  const maxIndex = products.length - visibleCount;

  /*
    Avanzar carrusel:
      - suma 1 al indice
      - pero nunca pasa de maxIndex
  */
  const nextProduct = () => {
    setCarouselIndex((prev) => Math.min(prev + 1, maxIndex));
  };

  /*
    Retroceder carrusel:
      - resta 1 al indice
      - pero nunca baja de 0
  */
  const prevProduct = () => {
    setCarouselIndex((prev) => Math.max(prev - 1, 0));
  };

  return (
    <main className="home">
      {/* ================= HERO ================= */}
      <section className="hero">
        {/*
          Renderiza todos los slides.
          Solo el slide activo recibe la clase "--active"
          (esto normalmente se usa para mostrar/ocultar con CSS)
        */}
        {heroSlides.map((slide, i) => (
          <div
            key={slide.id}
            className={`hero__slide ${
              i === currentSlide ? "hero__slide--active" : ""
            }`}
          >
            <img src={slide.image} alt="" className="hero__img" />
            <div className="hero__overlay" />
          </div>
        ))}

        {/*
          Contenido del slide actual
        */}
        <div className="hero__content">
          <p className="hero__headline">{heroSlides[currentSlide].headline}</p>
          <p className="hero__subline">{heroSlides[currentSlide].subline}</p>
          <button className="hero__cta">COMENZAR PROYECTO</button>
        </div>

        {/*
          Dots de navegación:
          - indican qué slide está activo
          - permiten cambiar manualmente de slide
        */}
        <div className="hero__dots">
          {heroSlides.map((_, i) => (
            <button
              key={i}
              className={`hero__dot ${
                i === currentSlide ? "hero__dot--active" : ""
              }`}
              onClick={() => setCurrentSlide(i)}
            />
          ))}
        </div>
      </section>

      {/* ================= FEATURED PRODUCTS ================= */}
      <section className="featured">
        <div className="featured__header">
          <p className="featured__label">NUESTROS DISEÑOS DESTACADOS</p>
          <p className="featured__sub">
            PIEZAS CREADAS PARA TRANSFORMAR ESPACIOS.
          </p>
        </div>

        <div className="featured__carousel-wrapper">
          {/*
            Flecha izquierda:
            solo aparece si no estamos en el inicio
          */}
          {carouselIndex > 0 && (
            <button
              className="featured__arrow featured__arrow--prev"
              onClick={prevProduct}
            >
              ‹
            </button>
          )}

          <div className="featured__track">
            {/*
              Contenedor que se mueve horizontalmente
              usando transform: translateX
            */}
            <div
              className="featured__list"
              style={{
                transform: `translateX(-${carouselIndex * 25}%)`,
              }}
            >
              {products.map((product) => (
                <div key={product.id} className="product-card">
                  <div className="product-card__img-wrap">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="product-card__img"
                    />
                  </div>
                  <p className="product-card__name">{product.name}</p>
                </div>
              ))}
            </div>
          </div>

          {/*
            Flecha derecha:
            solo aparece si aún hay más productos por mostrar
          */}
          {carouselIndex < maxIndex && (
            <button
              className="featured__arrow featured__arrow--next"
              onClick={nextProduct}
            >
              ›
            </button>
          )}
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="cta-banner">
        <div className="cta-banner__content">
          <p className="cta-banner__title">
            ¿LISTO PARA TRANSFORMAR TU ESPACIO?
          </p>
          <p className="cta-banner__sub">
            Diseñamos cada pieza a medida para tu proyecto.
          </p>
          <button className="cta-banner__btn">CONTÁCTANOS</button>
        </div>
      </section>
    </main>
  );
}
