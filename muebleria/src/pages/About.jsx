import React from "react";
import "../styles/About.css";

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
          src="https://res.cloudinary.com/dui38bv9y/image/upload/q_auto,f_auto,w_800/v1777697463/puerta-04_u9lmjz.webp"
          alt=""
          className="about-hero__img"
        />
        <div className="about-hero__content">
          <p className="about-hero__label">SOBRE NOSOTROS</p>
          <h1 className="about-hero__title">CREATIVOS MUEBLES FURNITURE</h1>
        </div>
      </section>

      {/* Historia */}
      <section className="about-story">
        <div className="about-story__grid">
          <div className="about-story__text">
            <p className="about-section__label">NUESTRA HISTORIA</p>
            <p className="about-story__body">
              En Creativos Muebles Furniture diseñamos y fabricamos mobiliario
              cuidando cada detalle, desde la idea inicial hasta el producto
              final. Creamos piezas funcionales y estéticas, pensadas para durar
              y adaptarse a cada espacio. Además, ofrecemos asesoría en diseño
              de interiores y acompañamiento personalizado durante todo el
              proceso, desde la conceptualización hasta la instalación.
            </p>
            <p className="about-story__body">
              Cada proyecto es una colaboración. Escuchamos tus ideas, diseñamos
              y fabricamos pensando en tu espacio y estilo, creando muebles
              únicos en lugar de producción en serie.
            </p>
          </div>
          <div className="about-story__img-wrap">
            <img
              src="https://res.cloudinary.com/dui38bv9y/image/upload/q_auto,f_auto,w_800/v1777697459/mesa-17_qqrljh.webp"
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

      {/*
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
      */}

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
