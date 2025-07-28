import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { FiStar, FiMapPin, FiPhone, FiMail, FiClock, FiTool } from 'react-icons/fi';
import '../assets/scss/_03-Componentes/_StaffGremiosDatos.scss';

const StaffGremiosDatos = () => {
  const { id } = useParams();
  const [gremio, setGremio] = useState(null);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const cargarGremio = async () => {
      try {
        const respuesta = await fetch('/gremioshogar.json');
        if (!respuesta.ok) {
          throw new Error('No se pudo cargar la información');
        }
        const datos = await respuesta.json();
        const profesional = datos.find(prof => prof.id === parseInt(id));

        if (!profesional) {
          throw new Error('Profesional no encontrado');
        }

        setGremio(profesional);
      } catch (error) {
        setError(error.message);
        console.error("Error:", error);
      } finally {
        setCargando(false);
      }
    };
    cargarGremio();
  }, [id]);

  if (cargando) {
    return <div className="carga">Cargando información...</div>;
  }

  if (error) {
    return <div className="error">{error}</div>;
  }

  return (
    <div className="detalle-container">
      {/* Encabezado */}
      <div className="detalle-header">
        <div className="foto-container">
          {gremio.imagen ? (
            <img
              src={`/img/profesionales/${gremio.imagen}`}
              alt={gremio.nombre}
              className="foto-perfil"
            />
          ) : (
            <div className="foto-placeholder">
              <FiTool className="icono-foto" />
            </div>
          )}
        </div>

        <div className="info-basica">
          <h1>{gremio.nombre}</h1>
          <h2>{gremio.gremio}</h2>

          <div className="valoracion">
            <FiStar className="icono" />
            <span>{gremio.valoracion} ({gremio.reseñas} reseñas)</span>
          </div>
        </div>
      </div>

      {/* Información detallada */}
      <div className="detalle-content">
        <div className="seccion">
          <h3>Descripción</h3>
          <p>{gremio.descripcion || 'Profesional con amplia experiencia en el rubro.'}</p>
        </div>

        <div className="seccion">
          <h3>Especialidades</h3>
          <ul className="especialidades-list">
            {gremio.especialidades.map((esp, index) => (
              <li key={index}>{esp}</li>
            ))}
          </ul>
        </div>

        <div className="seccion-doble">
          <div className="subseccion">
            <h3>Contacto</h3>
            <ul className="contacto-list">
              <li>
                <FiPhone className="icono" />
                <a href={`tel:${gremio.telefono}`}>{gremio.telefono}</a>
              </li>
              <li>
                <FiMail className="icono" />
                <a href={`mailto:${gremio.email}`}>{gremio.email}</a>
              </li>
            </ul>
          </div>

          <div className="subseccion">
            <h3>Disponibilidad</h3>
            <p>
              <FiClock className="icono" />
              {gremio.disponibilidad}
            </p>
          </div>
        </div>

        <div className="seccion">
          <h3>Zona de trabajo</h3>
          <p>
            <FiMapPin className="icono" />
            {gremio.zona} - {gremio.barrios.join(', ')}
          </p>
          {/* Aquí iría un componente de mapa */}
          <div className="mapa-placeholder">
            Mapa de la zona de cobertura
          </div>
        </div>
      </div>

      {/* Botones de acción */}
      <div className="acciones-detalle">
        <a
          href={`https://wa.me/${gremio.whatsapp}`}
          className="btn-whatsapp"
          target="_blank"
          rel="noopener noreferrer"
        >
          Contactar por WhatsApp
        </a>
        <button className="btn-llamar">
          Llamar ahora
        </button>
      </div>
    </div>
  );
};

export default StaffGremiosDatos;
