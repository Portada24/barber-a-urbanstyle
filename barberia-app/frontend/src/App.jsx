import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ReservasProvider } from './context/ReservasContext.jsx';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Inicio from './pages/Inicio';
import Servicios from './pages/Servicios';
import Reservas from './pages/Reservas';
import Contacto from './pages/Contacto';

export default function App() {
  return (
    <ReservasProvider>
      <BrowserRouter>
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/servicios" element={<Servicios />} />
            <Route path="/reservas" element={<Reservas />} />
            <Route path="/contacto" element={<Contacto />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </ReservasProvider>
  );
}
