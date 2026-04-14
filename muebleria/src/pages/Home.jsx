import React, { useState, useEffect } from "react";
import "./Home.css";

const heroSlides = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=1600&q=80",
    headline: "ARQUITECTURA EN CADA MUEBLE",
    subline: "DONDE EL DISEÑO SE CONVIERTE EN PIEZA.",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1600&q=80",
    headline: "PIEZAS QUE TRANSFORMAN",
    subline: "ESPACIOS CON CARÁCTER Y PRECISIÓN.",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1540518614846-7eded433c457?w=1600&q=80",
    headline: "DISEÑO SIN COMPROMISO",
    subline: "CADA DETALLE TIENE UN PROPÓSITO.",
  },
];

const products = [
  {
    id: 1,
    name: "SOFÁ DE DISEÑO PERSONALIZADO",
    image:
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&q=80",
  },
  {
    id: 2,
    name: "SOFÁ SECCIONAL MINIMALISTA",
    image:
      "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=600&q=80",
  },
  {
    id: 3,
    name: "SOFÁ MODULAR CONTEMPORÁNEO",
    image:
      "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=600&q=80",
  },
  {
    id: 4,
    name: "PIEZA CENTRAL PARA SALA",
    image:
      "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=600&q=80",
  },
  {
    id: 5,
    name: "SILLÓN LOUNGE ARTESANAL",
    image:
      "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=600&q=80",
  },
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [carouselIndex, setCarouselIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const visibleCount = 4;
  const maxIndex = products.length - visibleCount;

  const nextProduct = () => {
    setCarouselIndex((prev) => Math.min(prev + 1, maxIndex));
  };

  const prevProduct = () => {
    setCarouselIndex((prev) => Math.max(prev - 1, 0));
  };

  return (
    <main className="home">
      {/* Hero */}
      <section className="hero">
        {heroSlides.map((slide, i) => (
          <div
            key={slide.id}
            className={`hero__slide ${i === currentSlide ? "hero__slide--active" : ""}`}
          >
            <img src={slide.image} alt="" className="hero__img" />
            <div className="hero__overlay" />
          </div>
        ))}

        <div className="hero__content">
          <p className="hero__headline">{heroSlides[currentSlide].headline}</p>
          <p className="hero__subline">{heroSlides[currentSlide].subline}</p>
          <button className="hero__cta">COMENZAR PROYECTO</button>
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

      {/* Featured Products */}
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
              style={{ transform: `translateX(-${carouselIndex * 25}%)` }}
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

      {/* CTA Banner */}
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
