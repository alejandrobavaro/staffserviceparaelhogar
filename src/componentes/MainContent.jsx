import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/scss/_03-Componentes/_MainContent.scss';

/**
 * MainContent - Página de inicio de Staff Service
 * 
 * Muestra:
 * - Banner principal con llamada a acción
 * - Breve explicación del servicio
 * - Categorías destacadas
 * - Testimonios (opcional)
 */
const MainContent = () => {
  const categoriasDestacadas = [
    { nombre: 'Plomería', icono: 'fa-faucet', color: '#3498db' },
    { nombre: 'Electricidad', icono: 'fa-bolt', color: '#f1c40f' },
    { nombre: 'Albañilería', icono: 'fa-bricks', color: '#e67e22' },
    { nombre: 'Jardinería', icono: 'fa-leaf', color: '#2ecc71' }
  ];

  return (
    <div className="home-container">
      {/* Banner principal */}
      <section className="hero-banner">
        <div className="hero-content">
          <h1>Encontrá al profesional que necesitás</h1>
          <p>Staff Service conecta dueños de casa con profesionales verificados para todas las necesidades del hogar</p>
          <Link to="/profesionales" className="btn-primary">
            Buscar Profesionales
          </Link>
        </div>
      </section>

      {/* Categorías destacadas */}
      <section className="categorias-section">
        <h2>Gremios disponibles</h2>
        <div className="categorias-grid">
          {categoriasDestacadas.map((categoria, index) => (
            <Link 
              to={`/profesionales?categoria=${categoria.nombre.toLowerCase()}`} 
              className="categoria-card" 
              key={index}
              style={{ '--color-categoria': categoria.color }}
            >
              <i className={`fas ${categoria.icono}`}></i>
              <span>{categoria.nombre}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* Cómo funciona */}
      <section className="how-it-works">
        <h2>¿Cómo funciona?</h2>
        <div className="steps-container">
          <div className="step">
            <div className="step-number">1</div>
            <h3>Elegí tu gremio</h3>
            <p>Seleccioná la categoría del profesional que necesitás</p>
          </div>
          <div className="step">
            <div className="step-number">2</div>
            <h3>Encontrá profesionales</h3>
            <p>Revisá perfiles, valoraciones y zonas de trabajo</p>
          </div>
          <div className="step">
            <div className="step-number">3</div>
            <h3>Contactá directamente</h3>
            <p>Hablá por WhatsApp o llamá al profesional</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MainContent;