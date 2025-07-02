import React from 'react';
import '../styles/Nosotros.css';

const equipo = [
  {
    nombre: 'Josue Baca',
    rol: 'Full Stack Developer',
    imagen: '/img/Josue.png',
    linkedin: 'http://www.linkedin.com/in/josue-alexander-baca-cortes-45537025b', 
  },
  {
    nombre: 'Abraham Velazquez',
    rol: 'Full Stack Developer',
    imagen: '/img/Abraham.jpg',
    linkedin: 'https://www.linkedin.com/in/abrahamvelazquez/', 
  },
  {
    nombre: 'Pablo Hernan',
    rol: 'CEO Fundador',
    imagen: '/img/Pablo.png',
    linkedin: 'https://www.linkedin.com/in/pablo-hernan-gómez-jiménez-976a83293',
  },
  {
    nombre: 'Mario Romero',
    rol: 'BackEnd Developer',
    imagen: '/img/Mario.png',
    linkedin: 'https://www.linkedin.com/in/marioromero/', 
  },
  {
    nombre: 'Patricia Sherlyn',
    rol: 'Social Media Manager',
    imagen: '/img/Pati.png',
    linkedin: 'https://www.linkedin.com/in/patricia-sherylin-gonz%C3%A1lez-guzm%C3%A1n-22614a328?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app', 
  },
];

const Nosotros = () => {
  return (
    <section id="nosotros" className="nosotros-section page-section">
      <div className="container">
        <div className="text-center">
          <h2>Somos tu Socio Tecnológico Estratégico</h2>
          <p>
            Más que una agencia, somos un aliado para tu crecimiento digital. Un equipo de innovadores, desarrolladores y creativos comprometidos con transformar tus ideas en soluciones reales.
          </p>
        </div>

        {/* Misión y Visión */}
        <div className="grid">
          <div>
            <h3>Nuestra Misión</h3>
            <p>
              Impulsar a empresas de todos los tamaños mediante tecnología de vanguardia, creando plataformas web escalables con impacto real y crecimiento sostenible, alineadas con sus objetivos de negocio.
            </p>
          </div>
          <div>
            <h3>Nuestra Visión</h3>
            <p>
              Ser el referente en soluciones digitales a medida en Latinoamérica, reconocidos por nuestra excelencia técnica, enfoque centrado en el usuario y capacidad para construir alianzas duraderas con cada cliente.
            </p>
          </div>
        </div>

        {/* Equipo */}
        <div className="mt-24">
          <div className="equipo-titulo">
            <h2>Conoce a Nuestro Equipo</h2>
            <p>
              Somos un equipo diverso, creativo y altamente capacitado, listo para enfrentar cualquier desafío y convertir ideas en soluciones digitales de alto impacto.
            </p>
          </div>

          <div className="team-grid">
            {equipo.map((miembro, index) => (
              <div className="team-member" key={index}>
                <img
                  src={miembro.imagen}
                  alt={miembro.nombre}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src =
                      'https://placehold.co/400x400/1f2937/FFFFFF?text=Imagen';
                  }}
                />
                <h4>{miembro.nombre}</h4>
                <p>{miembro.rol}</p>
                <a href={miembro.linkedin} target="_blank" rel="noopener noreferrer">
                  <i className="fa-brands fa-linkedin" style={{ color: '#ffffff', fontSize: '2rem', marginTop: '10px' }}></i>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Nosotros;