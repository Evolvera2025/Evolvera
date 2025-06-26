import '../styles/Servicios.css';

const Servicios = () => {
  return (
    <section id="servicios" className="page-section">
      <div className="container mx-auto px-6 py-16">
        {/* Encabezado de la sección */}
        <div className="servicios-header">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Servicios Diseñados para Crecer
          </h2>
          <p>
            En Evolvera, brindamos soluciones completas y estratégicas, acompañándote en cada etapa del desarrollo: desde la primera idea hasta el lanzamiento exitoso... y mucho más allá.
          </p>
        </div>

        <div className="mt-20 space-y-20 px-4 md:px-8 lg:px-16">
          {/* Servicio 1 - Desarrollo Web */}
          <div className="servicio-item flex flex-col md:flex-row items-center gap-8 md:gap-12">
            <div className="w-full md:w-1/2">
              <div className="servicio-content">
                <h3 className="servicio-title text-3xl font-bold mb-4">
                  Desarrollo Web a Medida
                </h3>
                <p className="servicio-descripcion">
                  Creamos aplicaciones web complejas, portales de clientes y plataformastotalmente a medida. Nuestro enfoque se basa en una arquitectura escalable, código limpio y un rendimiento excepcional, para que tu plataforma esté lista para crecer sin límites.
                </p>
                <ul className="servicio-lista">
                  <li className="animate-delay-100">
                    <CheckIcon className="check-icon" />
                    <span>Diseño y desarrollo limpio</span>
                  </li>
                  <li className="animate-delay-200">
                    <CheckIcon className="check-icon" />
                    <span>Integración con APIs y servicios de terceros</span>
                  </li>
                  <li className="animate-delay-300">
                    <CheckIcon className="check-icon" />
                    <span>Dashboards y herramientas de gestión interna</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <div className="servicio-imagen">
                <img
                  src="https://placehold.co/600x400/111827/3b82f6?text=Desarrollo"
                  className="rounded-xl shadow-lg"
                  alt="Desarrollo Web"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = 'https://placehold.co/600x400/111827/FFFFFF?text=Imagen';
                  }}
                />
              </div>
            </div>
          </div>

          {/* Servicio 2 - UI/UX Design */}
          <div className="servicio-item flex flex-col md:flex-row-reverse items-center gap-8 md:gap-12">
            <div className="w-full md:w-1/2">
              <div className="servicio-content">
                <h3 className="servicio-title text-2xl font-bold mb-3">
                  Diseño de Experiencia (UI/UX)
                </h3>
                <p className="servicio-descripcion">
                  Una gran plataforma debe ser intuitiva y atractiva. Nuestro proceso de diseño se centra en
                  el usuario final, creando interfaces que no solo se ven bien, sino que son fáciles de usar,
                  aumentan la retención y guían a los usuarios hacia sus objetivos.
                </p>
                <ul className="servicio-lista">
                  <li className="animate-delay-100">
                    <CheckIcon className="check-icon" />
                    <span>Investigación de usuarios y prototipado</span>
                  </li>
                  <li className="animate-delay-200">
                    <CheckIcon className="check-icon" />
                    <span>Diseño de interfaces y sistemas de diseño</span>
                  </li>
                  <li className="animate-delay-300">
                    <CheckIcon className="check-icon" />
                    <span>Pruebas de usabilidad y optimización</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <div className="servicio-imagen">
                <img
                  src="https://placehold.co/600x400/111827/8b5cf6?text=Diseño+UI/UX"
                  className="rounded-xl shadow-lg"
                  alt="Diseño UI/UX"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = 'https://placehold.co/600x400/111827/FFFFFF?text=Imagen';
                  }}
                />
              </div>
            </div>
          </div>

          {/* Servicio 3 - Consultoría Técnica */}
          <div className="servicio-item flex flex-col md:flex-row items-center gap-8 md:gap-12">
            <div className="w-full md:w-1/2">
              <div className="servicio-content">
                <h3 className="servicio-title text-2xl font-bold mb-3">
                  Consultoría Técnica
                </h3>
                <p className="servicio-descripcion">
                  Te ayudamos a tomar las mejores decisiones tecnológicas para tu proyecto. Desde la selección
                  de tecnologías hasta la optimización de arquitecturas existentes, nuestro equipo te guía
                  en cada paso del proceso de transformación digital.
                </p>
                <ul className="servicio-lista">
                  <li className="animate-delay-100">
                    <CheckIcon className="check-icon" />
                    <span>Auditoría y optimización de código</span>
                  </li>
                  <li className="animate-delay-200">
                    <CheckIcon className="check-icon" />
                    <span>Arquitectura de sistemas escalables</span>
                  </li>
                  <li className="animate-delay-300">
                    <CheckIcon className="check-icon" />
                    <span>Estrategia de migración tecnológica</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <div className="servicio-imagen">
                <img
                  src="https://placehold.co/600x400/111827/10b981?text=Consultoría"
                  className="rounded-xl shadow-lg"
                  alt="Consultoría Técnica"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = 'https://placehold.co/600x400/111827/FFFFFF?text=Imagen';
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Indicador de scroll (opcional) */}
        <div className="scroll-indicator">
          <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
};

const CheckIcon = ({ className = "" }) => (
  <svg 
    className={`w-5 h-5 ${className}`} 
    fill="none" 
    stroke="currentColor" 
    viewBox="0 0 24 24"
  >
    <path 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      strokeWidth="2" 
      d="M5 13l4 4L19 7" 
    />
  </svg>
);

export default Servicios;