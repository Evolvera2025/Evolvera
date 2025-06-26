import React from 'react';
import '../styles/Inicio.css'


const Inicio = () => {
  return (
    <section className="inicio-section">
      <div className="contenido">
        {/* Encabezado */}
        <div className="encabezado">
          <h2 className="titulo">Soluciones a tu Medida</h2>
          <p className="descripcion">
            Desde la idea hasta el lanzamiento, te acompañamos en cada paso para construir
            la solución digital que tu negocio necesita para brillar.
          </p>
        </div>

        {/* Servicios */}
        <div className="servicios">
          <div className="servicio">
            <h3>Desarrollo Estratégico</h3>
            <p>Plataformas robustas y escalables que crecen contigo.</p>
          </div>
          <div className="servicio">
            <h3>Diseño UI/UX Intuitivo</h3>
            <p>Interfaces que enamoran a tus usuarios y convierten.</p>
          </div>
          <div className="servicio">
            <h3>Optimización y Rendimiento</h3>
            <p>Velocidad y fiabilidad para una experiencia superior.</p>
          </div>
        </div>

        {/* Link servicios */}
        <div className="ver-servicios">
          <a href="#servicios">Ver todos nuestros servicios →</a>
        </div>

        {/* Testimonio */}
        <div className="testimonio">
          <h2>La Confianza de Nuestros Clientes</h2>
          <div className="testimonio-caja">
            <blockquote>
              “Trabajar con Evolvera transformó nuestro negocio. Su enfoque técnico y su
              compromiso con los plazos fueron excepcionales. ¡Son verdaderos socios
              estratégicos!”
            </blockquote>
            <footer>
              <p className="nombre">Laura Gómez</p>
              <p className="cargo">CEO de Tech Innovators</p>
            </footer>
          </div>
        </div>

        {/* CTA final */}
        <div className="cta">
          <h2>¿Tienes una idea?</h2>
          <p>
            Convirtámosla en una realidad digital. Contáctanos y descubre cómo podemos ayudarte a alcanzar tus metas.
          </p>
          <a href="#contacto" className="cta-boton">
            Iniciar mi Proyecto
          </a>
        </div>
      </div>
    </section>
  );
};

export default Inicio;


