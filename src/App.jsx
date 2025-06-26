import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Inicio from './pages/Inicio';
import Nosotros from './pages/Nosotros';
import Servicios from './pages/Servicios';
import Planes from './pages/Planes';
import Contacto from './components/contacto';

function App() {
  return (
    <div>
      <script src="http://localhost:8097"></script>
      <Navbar />
        <main>
          <Hero />
          <Inicio />
          <Nosotros />
          <Servicios />
          <Planes />
          <Contacto />
        </main>
      <Footer />
    </div>
  );
}
export default App
