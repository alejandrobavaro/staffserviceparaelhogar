import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import '../assets/scss/_03-Componentes/_MainWhatsappIcon.scss';

/**
 * MainWhatsappIcon - Botón flotante de WhatsApp para contacto rápido
 * 
 * Funcionalidad:
 * - Permite contacto directo con soporte
 * - Visible en todas las páginas
 * - Posición fija en esquina inferior
 */
const MainWhatsappIcon = () => {
  const whatsappNumber = '5491112345678'; // Número de soporte
  
  return (
    <a 
      href={`https://wa.me/${whatsappNumber}`}
      className="whatsapp-button"
      target="_blank" 
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
    >
      <FaWhatsapp className="whatsapp-icon" />
    </a>
  );
};

export default MainWhatsappIcon;