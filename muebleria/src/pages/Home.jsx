import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Home.css";

//imagenes que se van a usar en el hero
import exterior02 from "../assets/images/exterior/exterior-02.jpg";
import cuarto09 from "../assets/images/cuarto/cuarto-09.jpg";
import sillon00 from "../assets/images/sala/sillon-00.jpg";

//imagenes que se van a usar en el carrusel de productos destacados
import bano04 from "../assets/images/baño/bano-04.jpg";
import cuarto12 from "../assets/images/cuarto/cuarto-12.jpg";
import cafe from "../assets/images/otros/cafe.jpg";
import mesa04 from "../assets/images/mesa/mesa-04.jpg";
import exterior11 from "../assets/images/exterior/exterior-11.jpg";

/*
  Precarga todas las imágenes apenas carga el módulo.
  Esto evita el flash negro al hacer scroll antes de que carguen.
*/
const allImages = [
  exterior02,
  cuarto09,
  sillon00,
  exterior11,
  bano04,
  cuarto12,
  cafe,
  mesa04,
  //heroMesa,
  //heroCama,
  //productoMesa,
  //productoSofas,
  //productoMesaRectangular,
  //productoSillaPiscina,
  //productoPuerta,
];
allImages.forEach((src) => {
  const img = new Image();
  img.src = src;
});

const heroSlides = [
  {
    id: 1,
    image: exterior02,
    headline: "ARQUITECTURA EN CADA MUEBLE",
    subline: "DONDE EL DISEÑO SE CONVIERTE EN PIEZA.",
  },
  {
    id: 2,
    image: cuarto09,
    headline: "PIEZAS QUE TRANSFORMAN",
    subline: "ESPACIOS CON CARÁCTER Y PRECISIÓN.",
  },
  {
    id: 3,
    image: sillon00,
    headline: "DISEÑO SIN COMPROMISO",
    subline: "CADA DETALLE TIENE UN PROPÓSITO.",
  },
];

const products = [
  { id: 1, name: "SOFÁ DE DISEÑO PERSONALIZADO", image: exterior11 },
  { id: 2, name: "SOFÁ SECCIONAL MINIMALISTA", image: cuarto12 },
  { id: 3, name: "SOFÁ MODULAR CONTEMPORÁNEO", image: cafe },
  { id: 4, name: "PIEZA CENTRAL PARA SALA", image: mesa04 },
  { id: 5, name: "SILLÓN LOUNGE ARTESANAL", image: bano04 },
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  // Auto-play del hero cada 5 segundos
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  // Detecta cambios de tamaño de pantalla
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      setCarouselIndex(0);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  /*
    En móvil: 2 productos visibles → desplazamiento de 50% por paso
    En desktop: 4 productos visibles → desplazamiento de 25% por paso
  */
  const visibleCount = isMobile ? 2 : 4;
  const itemWidth = isMobile ? 50 : 25;
  const maxIndex = products.length - visibleCount;

  const nextProduct = () =>
    setCarouselIndex((prev) => Math.min(prev + 1, maxIndex));
  const prevProduct = () => setCarouselIndex((prev) => Math.max(prev - 1, 0));

  return (
    <main className="home">
      {/* ================= HERO ================= */}
      <section className="hero">
        {heroSlides.map((slide, i) => (
          <div
            key={slide.id}
            className={`hero__slide ${i === currentSlide ? "hero__slide--active" : ""}`}
          >
            <img
              src={slide.image}
              alt=""
              className="hero__img"
              loading="eager"
            />
            <div className="hero__overlay" />
          </div>
        ))}

        <div className="hero__content">
          <p className="hero__headline">{heroSlides[currentSlide].headline}</p>
          <p className="hero__subline">{heroSlides[currentSlide].subline}</p>
          <Link
            to="/gallery"
            className={`hero__cta ${location.pathname === "/gallery" ? "navbar__link--active" : ""}`}
          >
            NUESTROS PROYECTOS
          </Link>
        </div>

        <div className="hero__dots">
          {heroSlides.map((_, i) => (
            <button
              key={i}
              className={`hero__dot ${i === currentSlide ? "hero__dot--active" : ""}`}
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
          {carouselIndex > 0 && (
            <button
              className="featured__arrow featured__arrow--prev"
              onClick={prevProduct}
            >
              ‹
            </button>
          )}

          <div className="featured__track">
            <div
              className="featured__list"
              style={{
                transform: `translateX(-${carouselIndex * itemWidth}%)`,
              }}
            >
              {products.map((product) => (
                <div key={product.id} className="product-card">
                  <div className="product-card__img-wrap">
                    <Link to="/gallery">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="product-card__img"
                        loading="eager"
                      />
                    </Link>
                  </div>
                  <p className="product-card__name">{product.name}</p>
                </div>
              ))}
            </div>
          </div>

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
          <Link to="/contact" className="cta-banner__btn">
            CONTÁCTANOS
          </Link>
        </div>
      </section>
    </main>
  );
}
