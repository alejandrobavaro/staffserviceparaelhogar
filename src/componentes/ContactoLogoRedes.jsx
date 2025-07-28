import React from "react";
import { FaFacebook, FaInstagram, FaYoutube, FaEnvelope, FaHandHoldingHeart } from "react-icons/fa";
import "../assets/scss/_03-Componentes/_ContactoLogoRedes.scss";

const ContactoLogoRedes = () => {
  return (
    <div className="contacto-redes-container">
      <div className="contacto-redes-content">
        {/* Logo */}
        <div className="logo-section">
          <img
            alt="Logo Staff Service"
            className="logo-main"
            src="/img/02-logos/logostaffserviceparaelhogar1.png"
          />
          <h2>Staff Service</h2>
          <p>Profesionales para tu hogar</p>
        </div>

        {/* Redes sociales */}
        <div className="redes-section">
          <h3>Síguenos en redes</h3>
          
          <div className="redes-list">
            <a href="#" target="_blank" rel="noopener noreferrer" className="red-item">
              <FaFacebook className="red-icon" />
              <span>Facebook</span>
            </a>
            
            <a href="#" target="_blank" rel="noopener noreferrer" className="red-item">
              <FaInstagram className="red-icon" />
              <span>Instagram</span>
            </a>
            
            <a href="#" target="_blank" rel="noopener noreferrer" className="red-item">
              <FaYoutube className="red-icon" />
              <span>YouTube</span>
            </a>
            
            <a href="mailto:contacto@staffservice.com" className="red-item">
              <FaEnvelope className="red-icon" />
              <span>Contacto</span>
            </a>
            
            <a href="#" target="_blank" rel="noopener noreferrer" className="red-item">
              <FaHandHoldingHeart className="red-icon" />
              <span>Colaborar</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactoLogoRedes;