import React, { useState, useEffect } from 'react';
import { FiFilter } from 'react-icons/fi';
import '../assets/scss/_03-Componentes/_StaffCategoriasFiltros.scss';

const StaffCategoriasFiltros = ({ onFiltroChange }) => {
  const [filtros, setFiltros] = useState({
    barrio: '',
    valoracion: '',
    disponibilidad: ''
  });

  const [opcionesFiltro, setOpcionesFiltro] = useState({
    barrios: [],
    valoraciones: [],
    disponibilidades: []
  });

  useEffect(() => {
    const cargarDatos = async () => {
      try {
        const respuesta = await fetch('/gremioshogar.json');
        if (!respuesta.ok) {
          throw new Error('Error al cargar los datos');
        }
        const datos = await respuesta.json();

        // Extraer opciones únicas para cada filtro
        const barrios = [...new Set(datos.flatMap(item => item.barrios))];
        const valoraciones = [...new Set(datos.map(item => item.valoracion))].sort((a, b) => a - b);
        const disponibilidades = [...new Set(datos.map(item => item.disponibilidad))];

        setOpcionesFiltro({ barrios, valoraciones, disponibilidades });
      } catch (error) {
        console.error("Error al cargar los datos:", error);
      }
    };

    cargarDatos();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    const nuevosFiltros = {
      ...filtros,
      [name]: value
    };
    setFiltros(nuevosFiltros);
    onFiltroChange(nuevosFiltros);
  };

  return (
    <div className="filtros-container">
      <h3 className="filtros-titulo">
        <FiFilter className="icono" /> Filtrar profesionales
      </h3>
      <div className="filtros-grid">
        <div className="filtro-group">
          <label htmlFor="barrio">Barrio:</label>
          <select id="barrio" name="barrio" value={filtros.barrio} onChange={handleChange}>
            <option value="">Todos los barrios</option>
            {opcionesFiltro.barrios.map((barrio, index) => (
              <option key={index} value={barrio}>{barrio}</option>
            ))}
          </select>
        </div>

        <div className="filtro-group">
          <label htmlFor="valoracion">Valoración mínima:</label>
          <select id="valoracion" name="valoracion" value={filtros.valoracion} onChange={handleChange}>
            <option value="">Cualquier valoración</option>
            {opcionesFiltro.valoraciones.map((valoracion, index) => (
              <option key={index} value={valoracion}>{valoracion} estrellas</option>
            ))}
          </select>
        </div>

        <div className="filtro-group">
          <label htmlFor="disponibilidad">Disponibilidad:</label>
          <select id="disponibilidad" name="disponibilidad" value={filtros.disponibilidad} onChange={handleChange}>
            <option value="">Cualquier horario</option>
            {opcionesFiltro.disponibilidades.map((disponibilidad, index) => (
              <option key={index} value={disponibilidad}>{disponibilidad}</option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default StaffCategoriasFiltros;
