import React from 'react';
import { Link } from 'react-router-dom';
import { FiTool, FiStar, FiMapPin, FiMessageSquare } from 'react-icons/fi';
import '../assets/scss/_03-Componentes/_StaffGremiosCard.scss';

/**
 * StaffGremiosCard - Tarjeta individual para cada profesional
 *
 * Props:
 * - gremio: Object - Datos del profesional
 *
 * Muestra:
 * - Nombre y foto
 * - Gremio y especialidades
 * - Valoración y ubicación
 * - Botones de contacto
 */
const StaffGremiosCard = ({ gremio }) => {
  // Extraer solo el nombre del archivo de la ruta completa
  const imageName = gremio.imagen.split('/').pop();

  return (
    <div className="gremio-card">
      {/* Encabezado con foto y nombre */}
      <div className="card-header">
        <div className="gremio-foto">
          {imageName ? (
            <img src={`/img/06-gremiostienda/${imageName}`} alt={gremio.nombre} />
          ) : (
            <FiTool className="icono-default" />
          )}
        </div>
        <div className="gremio-info">
          <h3>{gremio.nombre}</h3>
          <span className="gremio-tag">{gremio.gremio}</span>
        </div>
      </div>

      {/* Especialidades */}
      <div className="especialidades">
        <h4>Especialidades:</h4>
        <ul>
          {gremio.especialidades.map((esp, index) => (
            <li key={index}>{esp}</li>
          ))}
        </ul>
      </div>

      {/* Valoración y ubicación */}
      <div className="detalles">
        <div className="valoracion">
          <FiStar className="icono" />
          <span>{gremio.valoracion} ({gremio.reseñas} reseñas)</span>
        </div>
        <div className="ubicacion">
          <FiMapPin className="icono" />
          <span>{gremio.zona} - {gremio.barrios.join(', ')}</span>
        </div>
      </div>

      {/* Botones de acción */}
      <div className="acciones">
        <Link
          to={`/profesional/${gremio.id}`}
          className="btn btn-detalle"
        >
          Ver Detalles
        </Link>
        <a
          href={`https://wa.me/${gremio.whatsapp}`}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-whatsapp"
        >
          <FiMessageSquare /> WhatsApp
        </a>
      </div>
    </div>
  );
};

export default StaffGremiosCard;
