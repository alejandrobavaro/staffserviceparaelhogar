import React from 'react';
import { FiAlertTriangle } from 'react-icons/fi';
import '../assets/scss/_03-Componentes/_StaffBotonEmergencia.scss';

const StaffBotonEmergencia = () => {
  const handleClick = () => {
    // Lógica para mostrar emergencias
    console.log("Mostrar profesionales de emergencia");
  };

  return (
    <button 
      className="emergencia-btn"
      onClick={handleClick}
      aria-label="Solicitar servicio de emergencia"
    >
      <FiAlertTriangle className="icono" />
      <span className="texto">EMERGENCIA</span>
    </button>
  );
};

export default StaffBotonEmergencia;