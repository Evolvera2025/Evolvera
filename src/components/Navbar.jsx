// src/components/Navbar.jsx
import { useState, useEffect } from 'react';
import '../styles/Navbar.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleToggle = () => {
    setIsOpen(prev => !prev);
  };

  // Efecto para manejar el scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      
      // Cambiar estado cuando se haga scroll de más de 50px
      if (scrollPosition > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Cerrar menú móvil al hacer scroll
      if (isOpen) {
        setIsOpen(false);
      }
    };

    // Agregar event listener
    window.addEventListener('scroll', handleScroll);

    // Cleanup al desmontar el componente
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isOpen]); // Dependencia para cerrar menú al hacer scroll

  // Función para manejar clicks en enlaces
  const handleLinkClick = (e, targetId) => {
    // Cerrar menú móvil
    setIsOpen(false);
    
    // Scroll suave a la sección (opcional)
    if (targetId) {
      e.preventDefault();
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        const offsetTop = targetElement.offsetTop - 50; // Compensar altura del navbar
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });
      }
    }
  };

  return (
    <header className={isScrolled ? 'scrolled' : ''}>
      <div className="nav-bar">
        <div className="logo">
          <a href="#" onClick={(e) => handleLinkClick(e, '#home')}><img  className="LogoN" src="/img/evolvera_logo_horizontal_blanco.png"/></a>
        </div>

        <ul className="links">
          <li><a href="#home" onClick={(e) => handleLinkClick(e, '#home')}>Inicio</a></li>
          <li><a href="#nosotros" onClick={(e) => handleLinkClick(e, '#nosotros')}>Nosotros</a></li>
          <li><a href="#servicios" onClick={(e) => handleLinkClick(e, '#servicios')}>Servicios</a></li>
          <li><a href="#precios" onClick={(e) => handleLinkClick(e, '#precios')}>Planes</a></li>
          <li><a href="#contacto" onClick={(e) => handleLinkClick(e, '#contacto')}>Contacto</a></li>
        </ul>

        <a 
          href="#contacto" 
          className="action_btn"
          onClick={(e) => handleLinkClick(e, '#contacto')}
        >
          Contáctanos
        </a>

        <div className="toggle_btn" onClick={handleToggle}>
          <i className={`fa-solid ${isOpen ? 'fa-xmark' : 'fa-bars'}`}></i>
        </div>
      </div>

      <div className={`dropdown_menu ${isOpen ? 'open' : ''}`}>
        <li><a href="#home" onClick={(e) => handleLinkClick(e, '#home')}>Inicio</a></li>
        <li><a href="#nosotros" onClick={(e) => handleLinkClick(e, '#nosotros')}>Nosotros</a></li>
        <li><a href="#servicios" onClick={(e) => handleLinkClick(e, '#servicios')}>Servicios</a></li>
        <li><a href="#precios" onClick={(e) => handleLinkClick(e, '#precios')}>Planes</a></li>
        <li><a href="#contacto" onClick={(e) => handleLinkClick(e, '#contacto')}>Contacto</a></li>
        <li>
          <a 
            href="#contacto" 
            className="action_btn"
            onClick={(e) => handleLinkClick(e, '#contacto')}
          >
            Contáctanos
          </a>
        </li>
      </div>
    </header>
  );
}