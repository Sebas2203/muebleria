import React from "react";
import "./About.css";

const values = [
  {
    id: 1,
    title: "DISEÑO",
    desc: "Cada pieza nace de un proceso creativo riguroso. No fabricamos muebles, creamos arquitectura para el hogar.",
  },
  {
    id: 2,
    title: "PRECISIÓN",
    desc: "Materiales seleccionados, ensambles exactos. La calidad no es un estándar, es nuestra base.",
  },
  {
    id: 3,
    title: "PERSONALIZACIÓN",
    desc: "Trabajamos contigo desde el concepto hasta la entrega. Tu espacio, tu visión, nuestra ejecución.",
  },
];

const team = [
  {
    id: 1,
    name: "Sebastian Mora",
    role: "Programador",
    image: null,
  },
  {
    id: 2,
    name: "Bryan Leiva",
    role: "Programador",
    image: null,
  },
  {
    id: 3,
    name: "VALERIA MORA",
    role: "Diseñadora de Interiores",
    image: null,
  },
];

export default function About() {
  return (
    <main className="about">
      {/* Hero */}
      <section className="about-hero">
        <div className="about-hero__overlay" />
        <img
          src="https://images.unsplash.com/photo-1538688423619-a81d3f23454b?w=1600&q=80"
          alt=""
          className="about-hero__img"
        />
        <div className="about-hero__content">
          <p className="about-hero__label">SOBRE NOSOTROS</p>
          <h1 className="about-hero__title">ADUO MOBILIARIO</h1>
        </div>
      </section>

      {/* Historia */}
      <section className="about-story">
        <div className="about-story__grid">
          <div className="about-story__text">
            <p className="about-section__label">NUESTRA HISTORIA</p>
            <p className="about-story__body">
              Aduo Mobiliario nació de una convicción simple: los espacios donde
              vivimos merecen piezas que los eleven. Fundada en Costa Rica,
              nuestra empresa une tradición artesanal con sensibilidad
              contemporánea para crear mobiliario que trasciende lo funcional.
            </p>
            <p className="about-story__body">
              Cada proyecto es una colaboración. Escuchamos, diseñamos y
              construimos pensando en el espacio que habitarás, no en una
              producción en serie.
            </p>
          </div>
          <div className="about-story__img-wrap">
            <img
              src="https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=800&q=80"
              alt="Taller Aduo"
              className="about-story__img"
            />
          </div>
        </div>
      </section>

      {/* Valores */}
      <section className="about-values">
        <p className="about-section__label about-section__label--light">
          NUESTRA FILOSOFÍA
        </p>
        <div className="about-values__grid">
          {values.map((v) => (
            <div key={v.id} className="value-card">
              <p className="value-card__num">0{v.id}</p>
              <p className="value-card__title">{v.title}</p>
              <p className="value-card__desc">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Equipo */}
      <section className="about-team">
        <p className="about-section__label">NUESTRO EQUIPO</p>
        <div className="about-team__grid">
          {team.map((member) => (
            <div key={member.id} className="team-card">
              <div className="team-card__img-wrap">
                <img
                  src={member.image}
                  alt={member.name}
                  className="team-card__img"
                />
              </div>
              <p className="team-card__name">{member.name}</p>
              <p className="team-card__role">{member.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contacto */}
      <section className="about-contact">
        <div className="about-contact__content">
          <p className="about-section__label about-section__label--light">
            CONTACTO
          </p>
          <p className="about-contact__title">HABLEMOS DE TU PROYECTO</p>
          <div className="about-contact__info">
            <div className="contact-item">
              <p className="contact-item__label">UBICACIÓN</p>
              <p className="contact-item__value">San José, Costa Rica</p>
            </div>
            <div className="contact-item">
              <p className="contact-item__label">CORREO</p>
              <p className="contact-item__value">info@aduomobiliario.com</p>
            </div>
            <div className="contact-item">
              <p className="contact-item__label">TELÉFONO</p>
              <p className="contact-item__value">+506 8888 0000</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
