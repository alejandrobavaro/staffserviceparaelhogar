import React from 'react';
import ContactoFormularioSlider from "./ContactoFormularioSlider";
import '../assets/scss/_03-Componentes/_ConsultasAyuda.scss';

/**
 * ConsultasAyuda - Ahora para preguntas frecuentes sobre servicios
 * - Muestra información de ayuda para usuarios que buscan profesionales
 * - Incluye formulario de contacto especializado
 */
const ConsultasAyuda = () => {
  return (
    <div className="ayuda">
      <h2>Ayuda y Preguntas Frecuentes</h2>
      
      <div className="faq-section">
        <h3>¿Cómo contactar a un profesional?</h3>
        <p>Selecciona el gremio que necesitas, elige un profesional y haz clic en "Contactar".</p>
        
        <h3>¿Los profesionales están verificados?</h3>
        <p>Todos nuestros gremios pasan por un proceso de verificación de antecedentes.</p>
        
        <h3>¿Qué zonas cubren?</h3>
        <p>Cada profesional indica las zonas donde trabaja en su perfil.</p>
      </div>

      <form className="contacto-form">
        <h3>¿No encontraste lo que buscabas?</h3>
        <p>Envíanos tu consulta y te ayudaremos:</p>
        
        <ContactoFormularioSlider />
      </form>
    </div>
  );
}

export default ConsultasAyuda;