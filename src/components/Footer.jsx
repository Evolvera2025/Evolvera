import '../styles/Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-column brand">
          <img className="LogoF" src="../../public/images/evolvera_logo_horizontal_blanco.png" alt="" />
          <p>Transformando ideas en experiencias digitales.</p>
        </div>

        <div className="footer-column">
          <h4>Empresa</h4>
          <ul>
            <li><a href="#nosotros">Nosotros</a></li>
            <li><a href="#servicios">Servicios</a></li>
            <li><a href="#contacto">Contacto</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Soporte</h4>
          <ul>
            <li><a href="#">FAQ</a></li>
            <li><a href="#">Privacidad</a></li>
            <li><a href="#">Términos</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Síguenos</h4>
          <div className="social-icons">
            <a href="https://www.facebook.com/share/1VgNDjiZdX/?mibextid=qi2Omg"><i className="fa-brands fa-facebook-f"></i></a>
            <a href="#"><i className="fa-brands fa-twitter"></i></a>
            <a href="#"><i className="fa-brands fa-instagram"></i></a>
            <a href="#"><i className="fa-brands fa-linkedin-in"></i></a>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Evolvera. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}
