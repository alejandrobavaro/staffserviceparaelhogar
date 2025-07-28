import React from "react";
import { Link } from "react-router-dom";
import FooterGondraWorldDev from './FooterGondraWorldDev';
import { FiTool } from "react-icons/fi";
import "../assets/scss/_03-Componentes/_Footer.scss";

function Footer() {
  return (
    <footer className="main-footer">
      <div className="footer-content">
        <div className="brand-container">
          <Link to="/" className="brand-link">
            <div className="logo-circle">
              <FiTool className="logo-icon" />
            </div>
            <span className="app-name">Staff Service</span>
          </Link>
        </div>
        
        <nav className="nav-container">
          <Link to="/ayuda" className="nav-item">
            <span>Ayuda</span>
          </Link>
          <Link to="/contacto" className="nav-item">
            <span>Contacto</span>
          </Link>
        </nav>
        
        <div className="footer-copyright">
          <FooterGondraWorldDev />
        </div>
      </div>
    </footer>
  );
}

export default Footer;