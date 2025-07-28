import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/scss/_01-General/_App.scss";

// Componentes principales
import HeaderUnificado from "./componentes/HeaderUnificado";
import MainContent from "./componentes/MainContent";
import MainWhatsappIcon from "./componentes/MainWhatsappIcon";
import Footer from "./componentes/Footer";
import ContactoLogoRedes from "./componentes/ContactoLogoRedes";
import ContactoFormularioSlider from "./componentes/ContactoFormularioSlider";
import ConsultasAyuda from "./componentes/ConsultasAyuda";

// Componentes de StaffService
import StaffGremiosLista from "./componentes/StaffGremiosLista";
import StaffGremiosDatos from "./componentes/StaffGremiosDatos";
import StaffBotonEmergencia from "./componentes/StaffBotonEmergencia";

function App() {
  const [searchQuery, setSearchQuery] = React.useState('');
  const [selectedCategory, setSelectedCategory] = React.useState('');

  // Categorías de gremios disponibles
  const categoriasGremios = [
    'Plomería', 
    'Electricidad', 
    'Albañilería', 
    'Jardinería',
    'Gasista',
    'Carpintería',
    'Techista',
    'Pinturería'
  ];

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  return (
    <Router>
      <div className="app-container">
        {/* Header con navegación y búsqueda */}
        <HeaderUnificado 
          categories={categoriasGremios}
          onCategoryChange={handleCategoryChange}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />

        {/* Contenido principal */}
        <main className="main-content-wrapper">
          <div className="content-wrapper">
            <Routes>
              {/* Ruta de inicio */}
              <Route path="/" element={<MainContent />} />
              
              {/* Ruta de listado de gremios */}
              <Route 
                path="/profesionales" 
                element={
                  <StaffGremiosLista 
                    searchQuery={searchQuery}
                    category={selectedCategory}
                  />
                } 
              />
              
              {/* Ruta de detalle de profesional */}
              <Route 
                path="/profesional/:id" 
                element={<StaffGremiosDatos />} 
              />
              
              {/* Ruta de contacto */}
              <Route
                path="/contacto"
                element={
                  <>
                    <ContactoLogoRedes />
                    <ContactoFormularioSlider />
                  </>
                }
              />
              
              {/* Ruta de ayuda */}
              <Route path="/ayuda" element={<ConsultasAyuda />} />
            </Routes>
          </div>
        </main>

        {/* Footer */}
        <Footer />
        
        {/* Componentes flotantes */}
        <MainWhatsappIcon />
        <StaffBotonEmergencia />
      </div>
    </Router>
  );
}

export default App;