import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";

// ─────────────────────────────────────────────────────────────
// CONFIGURACIÓN EMAILJS — completá estos 3 valores cuando
// tengas tu cuenta en https://emailjs.com
//
// 1. Entrá a EmailJS → Email Services → Add New Service → conectá tu Gmail
//    Copiá el Service ID que te da (ej: "service_abc123")
//
// 2. Entrá a Email Templates → Create New Template
//    En el template usá estas variables: {{from_name}}, {{from_email}}, {{message}}
//    Copiá el Template ID (ej: "template_xyz789")
//
// 3. Entrá a Account → General → Public Key
//    Copiá la clave (ej: "aBcDeFgHiJkLmNoP")
// ─────────────────────────────────────────────────────────────
const EMAILJS_SERVICE_ID = "TU_SERVICE_ID";
const EMAILJS_TEMPLATE_ID = "TU_TEMPLATE_ID";
const EMAILJS_PUBLIC_KEY = "TU_PUBLIC_KEY";

// Mismos datos que Gallery.jsx
const WHATSAPP_NUMBER = "50688880000";
const CONTACT_EMAIL = "info@aduomobiliario.com";

export default function Contact() {
  const formRef = useRef(null);

  const [form, setForm] = useState({
    from_name: "",
    from_email: "",
    message: "",
  });
  // status: "idle" | "sending" | "success" | "error"
  const [status, setStatus] = useState("idle");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validación básica
    if (
      !form.from_name.trim() ||
      !form.from_email.trim() ||
      !form.message.trim()
    )
      return;

    setStatus("sending");

    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        EMAILJS_PUBLIC_KEY,
      );
      setStatus("success");
      setForm({ from_name: "", from_email: "", message: "" });
    } catch (err) {
      console.error("EmailJS error:", err);
      setStatus("error");
    }
  };

  const handleWhatsApp = () => {
    const msg =
      "Hola, me gustaría obtener más información sobre sus productos y servicios.";
    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`,
      "_blank",
    );
  };

  return (
    <main className="contact">
      {/* Hero */}
      <section className="contact-hero">
        <p className="contact-hero__label">CONTACTO</p>
        <h1 className="contact-hero__title">HABLEMOS DE TU PROYECTO</h1>
      </section>

      <section className="contact-body">
        {/* Columna izquierda — info */}
        <div className="contact-info">
          <p className="contact-info__intro">
            Cada proyecto es único. Contanos tu idea y nos ponemos en contacto
            para diseñar la pieza que tu espacio necesita.
          </p>

          <div className="contact-info__items">
            <div className="contact-info__item">
              <p className="contact-info__label">UBICACIÓN</p>
              <p className="contact-info__value">San José, Costa Rica</p>
            </div>

            <div className="contact-info__item">
              <p className="contact-info__label">CORREO</p>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="contact-info__value contact-info__link"
              >
                {CONTACT_EMAIL}
              </a>
            </div>

            <div className="contact-info__item">
              <p className="contact-info__label">WHATSAPP</p>
              <button
                className="contact-info__value contact-info__link contact-info__wa"
                onClick={handleWhatsApp}
              >
                +506 8888-0000
              </button>
            </div>
          </div>

          {/* Acceso directo WhatsApp */}
          <button className="contact-wa-btn" onClick={handleWhatsApp}>
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              className="contact-wa-btn__icon"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            ESCRIBIRNOS POR WHATSAPP
          </button>
        </div>

        {/* Columna derecha — formulario */}
        <div className="contact-form-wrap">
          <p className="contact-form__title">ENVÍANOS UN MENSAJE</p>

          <form ref={formRef} className="contact-form" onSubmit={handleSubmit}>
            <div className="contact-form__field">
              <label className="contact-form__label" htmlFor="from_name">
                NOMBRE
              </label>
              <input
                id="from_name"
                name="from_name"
                type="text"
                className="contact-form__input"
                placeholder="Tu nombre completo"
                value={form.from_name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="contact-form__field">
              <label className="contact-form__label" htmlFor="from_email">
                CORREO
              </label>
              <input
                id="from_email"
                name="from_email"
                type="email"
                className="contact-form__input"
                placeholder="tu@correo.com"
                value={form.from_email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="contact-form__field">
              <label className="contact-form__label" htmlFor="message">
                MENSAJE
              </label>
              <textarea
                id="message"
                name="message"
                className="contact-form__textarea"
                placeholder="Contanos sobre tu proyecto..."
                rows={5}
                value={form.message}
                onChange={handleChange}
                required
              />
            </div>

            <button
              type="submit"
              className={`contact-form__submit ${status === "sending" ? "contact-form__submit--sending" : ""}`}
              disabled={status === "sending"}
            >
              {status === "sending" ? "ENVIANDO..." : "ENVIAR MENSAJE"}
            </button>

            {status === "success" && (
              <p className="contact-form__feedback contact-form__feedback--success">
                ✓ Mensaje enviado. Te contactamos pronto.
              </p>
            )}

            {status === "error" && (
              <p className="contact-form__feedback contact-form__feedback--error">
                Hubo un error al enviar. Intentá de nuevo o escribinos por
                WhatsApp.
              </p>
            )}
          </form>
        </div>
      </section>
    </main>
  );
}
