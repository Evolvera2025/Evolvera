import React from "react";
import "../styles/Hero.css"; // Asegúrate de crear este archivo para los estilos del texto animado

const Hero = () => {
  return (
    <section id="home" className="page-section active">
      <main className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            Impulsamos tu <span className="animated-gradient-text">Evolución Tecnológica</span>
          </h1>
          <p className="hero-subtitle">
            Creamos soluciones web a medida que no solo se ven increíbles, sino que funcionan para escalar,
            innovar y liderar en tu industria.
          </p>
          <div className="hero-buttons">
            <a href="#precios" className="btn btn-primary nav-link">Ver Planes</a>
            <a href="#contacto" className="btn btn-secondary nav-link">Hablemos</a>
          </div>
        </div>
      </main>
    </section>
  );
};

export default Hero;