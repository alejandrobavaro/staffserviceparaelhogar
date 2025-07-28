import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../assets/scss/_03-Componentes/_ContactoFormularioSlider.scss";

const ContactoFormularioSlider = () => {
  const [profesionales, setProfesionales] = useState([]);

  useEffect(() => {
    const fetchProfesionales = async () => {
      try {
        const response = await fetch("/data/gremioshogar.json");
        const data = await response.json();
        setProfesionales(data);
      } catch (error) {
        console.error("Error al cargar profesionales:", error);
      }
    };

    fetchProfesionales();
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
  };

  return (
    <div className="contacto-form-slider-container">
      {/* Formulario de contacto */}
      <div className="form-column">
        <form
          className="contact-form"
          action="https://formspree.io/f/xbjnlgzz"
          target="_blank"
          method="post"
        >
          <h2 className="form-title">CONTACTO STAFF SERVICE</h2>

          <div className="form-group">
            <label htmlFor="nombre">Nombre:</label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              placeholder="Ingresa tu nombre"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="telefono">Teléfono:</label>
            <input
              type="tel"
              id="telefono"
              name="telefono"
              placeholder="Ingresa tu teléfono"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Correo Electrónico:</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Ingresa tu correo"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="servicio">Servicio requerido:</label>
            <select id="servicio" name="servicio" required>
              <option value="">Seleccione un servicio</option>
              <option value="Plomería">Plomería</option>
              <option value="Electricidad">Electricidad</option>
              <option value="Albañilería">Albañilería</option>
              <option value="Jardinería">Jardinería</option>
              <option value="Gasista">Gasista</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="mensaje">Mensaje:</label>
            <textarea
              id="mensaje"
              name="mensaje"
              rows={4}
              placeholder="Describe tu necesidad"
              required
            />
          </div>

          <button type="submit" className="btn-submit">
            ENVIAR CONSULTA
          </button>
        </form>
      </div>

      {/* Slider de profesionales destacados */}
      <div className="slider-column">
        <h2 className="slider-title">Profesionales Destacados</h2>

        <Slider {...settings}>
          {profesionales.map((profesional) => (
            <div key={profesional.id} className="slider-item">
              <img
                src={`/img/profesionales/${profesional.imagen}`}
                alt={profesional.nombre}
                className="slider-image"
              />
              <div className="slider-info">
                <h3>{profesional.nombre}</h3>
                <p>{profesional.gremio}</p>
                <p>⭐ {profesional.valoracion} ({profesional.reseñas} reseñas)</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default ContactoFormularioSlider;