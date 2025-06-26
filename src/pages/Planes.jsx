import "../styles/Planes.css";
import React from 'react';

const Planes = () => {
  return (
    <section id="precios" className="planes-section">
      <div className="planes-container">
        <div className="planes-header">
          <h2 className="planes-title">
            Planes Flexibles para cada Necesidad
          </h2>
          <p className="planes-description">
            En Evolvera, la transparencia es clave. Nuestros planes están diseñados para adaptarse al tamaño, ritmo y visión de tu proyecto, asegurando siempre la máxima calidad, escalabilidad y retorno de inversión desde el primer clic.
          </p>
        </div>
        
        <div className="planes-grid">
          {/* Plan 1: Esencial */}
          <div className="plan-card plan-basic">
            <div className="plan-header">
              <h3 className="plan-name">Plan Basico</h3>
              <p className="plan-subtitle">Ideal para negocios que inician su presencia en línea.</p>
            </div>
            
            <div className="plan-price">
              <span className="price-amount">Desde $3,000</span>
              <span className="price-currency">MXN</span>
              <p className="price-period">por proyecto</p>
            </div>
            
            <ul className="plan-features">
              <li className="feature-item">
                <svg className="feature-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>Sitio web informativo o Landing Page.</span>
              </li>
              <li className="feature-item">
                <svg className="feature-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>Diseño responsivo.</span>
              </li>
              <li className="feature-item">
                <svg className="feature-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>Formulario de contacto.</span>
              </li>
               <li className="feature-item">
                <svg className="feature-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>Enlace a redes sociales.</span>
              </li>
              <li className="feature-item">
                <svg className="feature-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>Entrega rápida.</span>
              </li>
            </ul>
            
            <a href="#contacto" className="plan-button">
              Empezar
            </a>
          </div>

          {/* Plan 2: Profesional (Popular) */}
          <div className="plan-card plan-popular">
            
            <div className="plan-header">
              <h3 className="plan-name">Plan Profesional</h3>
              <p className="plan-subtitle">Perfecto para empresas que requieren interacción con sus clientes.</p>
            </div>
            
            <div className="plan-price">
              <span className="price-amount">Desde $8,000</span>
              <span className="price-currency">MXN</span>
              <p className="price-period">por proyecto</p>
            </div>
            
            <ul className="plan-features">
              <li className="feature-item">
                <svg className="feature-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>Formularios funcionales con almacenamiento en base de datos.</span>
              </li>
              <li className="feature-item">
                <svg className="feature-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>Panel de administración.</span>
              </li>
              <li className="feature-item">
                <svg className="feature-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>Autenticación de usuarios.</span>
              </li>
              <li className="feature-item">
                <svg className="feature-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>Página web completamente dinámica.</span>
              </li>
            </ul>
            
            <a href="#contacto" className="plan-button plan-button-primary">
              Empezar
            </a>
          </div>

          {/* Plan 3: Empresarial */}
          <div className="plan-card plan-enterprise">
            <div className="plan-header">
              <h3 className="plan-name">Plan Empresarial</h3>
              <p className="plan-subtitle">Para empresas que necesitan automatización, datos y visualización avanzada.</p>
            </div>
            
            <div className="plan-price">
              <span className="price-amount">Desde $15,000</span>
              <span className="price-currency">MXN</span>
              <p className="price-period">por proyecto</p>
            </div>
            
            <ul className="plan-features">
              <li className="feature-item">
                <svg className="feature-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>Integración con APIs externas (pasarelas de pago, clima, cotizaciones, etc.)</span>
              </li>
              <li className="feature-item">
                <svg className="feature-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>Arquitecturas de microservicios.</span>
              </li>
              <li className="feature-item">
                <svg className="feature-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>Dashboards interactivos con gráficas y reportes (Chart.js, Power BI, etc.)</span>
              </li>
              <li className="feature-item">
                <svg className="feature-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>Soporte técnico personalizado y mantenimiento mensual.</span>
              </li>
            </ul>
            
            <a href="#contacto" className="plan-button">
              Contactar
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Planes;