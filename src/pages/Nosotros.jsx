import React from 'react';
import '../styles/Nosotros.css';

const equipo = [
  {
    nombre: 'Josue Baca',
    rol: 'Full Stack Developer',
    imagen: '../../public/images/Josue.png',
  },
  {
    nombre: 'Abraham Velazquez',
    rol: 'Full Stack Developer',
    imagen: 'https://placehold.co/400x400/1f2937/FFFFFF?text=CTO',
  },
  {
    nombre: 'Pablo Hernan',
    rol: 'CEO Fundador',
    imagen: '../../public/images/Pablo.png',
  },
  {
    nombre: 'Mario Romero',
    rol: 'BackEnd Developer',
    imagen: '../../public/images/Mario.png',
  },
  {
    nombre: 'Patricia Sherlyn',
    rol: 'Social Media Maanager',
    imagen: '../../public/images/Pati.png',
  },
];

const Nosotros = () => {
  return (
    <section id="nosotros" className="nosotros-section page-section">
      <div className="container">
        <div className="text-center">
          <h2>Somos tu Socio Tecnológico Estratégico</h2>
          <p>
            Más que una agencia de desarrollo, somos un equipo de innovadores,
            pensadores y creadores apasionados por construir el futuro digital.
            Nuestra misión es traducir tus ideas en soluciones tecnológicas
            robustas y eficientes.
          </p>
        </div>

        {/* Misión y Visión */}
        <div className="grid">
          <div>
            <h3>Nuestra Misión</h3>
            <p>
              Empoderar a empresas de todos los tamaños a través de tecnología
              de vanguardia, creando plataformas web escalables que generen un
              impacto medible y un crecimiento sostenible.
            </p>
          </div>
          <div>
            <h3>Nuestra Visión</h3>
            <p>
              Ser el referente en desarrollo web a medida en Latinoamérica,
              reconocidos por nuestra excelencia técnica, nuestro enfoque en la
              experiencia de usuario y nuestra capacidad para forjar alianzas a
              largo plazo con nuestros clientes.
            </p>
          </div>
        </div>

        {/* Equipo */}
        <div className="mt-24">
          <div className="equipo-titulo">
            <h2>Conoce a Nuestro Equipo</h2>
            <p>
              El talento detrás de la tecnología. Un grupo diverso de
              profesionales listos para afrontar cualquier desafío.
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
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Nosotros;