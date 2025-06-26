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
            Creemos en la transparencia. Nuestros planes están diseñados para adaptarse al tamaño y la etapa de tu proyecto, garantizando siempre la máxima calidad y el mejor retorno de inversión.
          </p>
        </div>
        
        <div className="planes-grid">
          {/* Plan 1: Esencial */}
          <div className="plan-card plan-basic">
            <div className="plan-header">
              <h3 className="plan-name">Plan Esencial</h3>
              <p className="plan-subtitle">Ideal para startups y MVPs.</p>
            </div>
            
            <div className="plan-price">
              <span className="price-amount">Desde $50,000</span>
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
                <span>Diseño responsive.</span>
              </li>
              <li className="feature-item">
                <svg className="feature-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>Formulario de contacto.</span>
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
              <p className="plan-subtitle">Para negocios en crecimiento.</p>
            </div>
            
            <div className="plan-price">
              <span className="price-amount">Desde $120,000</span>
              <span className="price-currency">MXN</span>
              <p className="price-period">por proyecto</p>
            </div>
            
            <ul className="plan-features">
              <li className="feature-item">
                <svg className="feature-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>Aplicación web a medida (CRUD).</span>
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
                <span>Diseño UI/UX avanzado.</span>
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
              <p className="plan-subtitle">Soluciones a gran escala.</p>
            </div>
            
            <div className="plan-price">
              <span className="price-amount">Hablemos</span>
              <p className="price-period">presupuesto personalizado</p>
            </div>
            
            <ul className="plan-features">
              <li className="feature-item">
                <svg className="feature-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>Plataformas SaaS complejas.</span>
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
                <span>Integraciones empresariales (ERP, CRM).</span>
              </li>
              <li className="feature-item">
                <svg className="feature-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>Soporte prioritario y SLA.</span>
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