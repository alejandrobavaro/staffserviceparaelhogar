import React, { useState, useEffect } from 'react';
import StaffGremiosCard from './StaffGremiosCard';
import StaffCategoriasFiltros from './StaffCategoriasFiltros';
import '../assets/scss/_03-Componentes/_StaffGremiosLista.scss';

const StaffGremiosLista = ({ searchQuery, category }) => {
  const [gremios, setGremios] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);
  const [filtros, setFiltros] = useState({
    barrio: '',
    valoracion: '',
    disponibilidad: ''
  });

  useEffect(() => {
    const cargarGremios = async () => {
      try {
        const respuesta = await fetch('/gremioshogar.json');
        if (!respuesta.ok) throw new Error('Error al cargar datos');
        const datos = await respuesta.json();
        setGremios(datos);
      } catch (err) {
        setError("No se pudieron cargar los profesionales. Intente más tarde.");
        console.error("Error:", err);
      } finally {
        setCargando(false);
      }
    };
    cargarGremios();
  }, []);

  const handleFiltroChange = (nuevosFiltros) => {
    setFiltros(nuevosFiltros);
  };

  const gremiosFiltrados = gremios.filter(gremio => {
    const coincideCategoria = category ?
      gremio.gremio.toLowerCase().includes(category.toLowerCase()) :
      true;

    const coincideBusqueda = searchQuery ?
      (
        gremio.nombre.toLowerCase().includes(searchQuery.toLowerCase()) ||
        gremio.gremio.toLowerCase().includes(searchQuery.toLowerCase()) ||
        gremio.especialidades.some(esp => esp.toLowerCase().includes(searchQuery.toLowerCase()))
      ) :
      true;

    const coincideBarrio = filtros.barrio ?
      gremio.barrios.some(barrio => barrio.toLowerCase().includes(filtros.barrio.toLowerCase())) :
      true;

    const coincideValoracion = filtros.valoracion ?
      gremio.valoracion >= parseFloat(filtros.valoracion) :
      true;

    const coincideDisponibilidad = filtros.disponibilidad ?
      gremio.disponibilidad.toLowerCase().includes(filtros.disponibilidad.toLowerCase()) :
      true;

    return coincideCategoria && coincideBusqueda && coincideBarrio && coincideValoracion && coincideDisponibilidad;
  });

  if (cargando) {
    return <div className="carga">Cargando profesionales...</div>;
  }

  if (error) {
    return <div className="error">{error}</div>;
  }

  return (
    <div className="gremios-lista-container">
      <StaffCategoriasFiltros onFiltroChange={handleFiltroChange} />
      <div className="resultados-busqueda">
        {searchQuery && <p>Resultados para: <strong>"{searchQuery}"</strong></p>}
        {category && <p>Filtrado por: <strong>{category}</strong></p>}
      </div>
      <div className="gremios-grid">
        {gremiosFiltrados.length > 0 ? (
          gremiosFiltrados.map(gremio => (
            <StaffGremiosCard key={gremio.id} gremio={gremio} />
          ))
        ) : (
          <div className="sin-resultados">
            <h3>No se encontraron profesionales</h3>
            <p>Intenta con otro término de búsqueda o categoría</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default StaffGremiosLista;
