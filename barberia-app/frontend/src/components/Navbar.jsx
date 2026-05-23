import { NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav style={styles.nav}>
      <span style={styles.logo}>✂ Urban Style Barbería</span>
      <div style={styles.links}>
        <NavLink to="/" style={linkStyle} end>Inicio</NavLink>
        <NavLink to="/servicios" style={linkStyle}>Servicios</NavLink>
        <NavLink to="/reservas" style={linkStyle}>Reservar</NavLink>
        <NavLink to="/contacto" style={linkStyle}>Contacto</NavLink>
      </div>
    </nav>
  );
}

const linkStyle = ({ isActive }) => ({
  color: isActive ? '#d4a942' : '#fff',
  textDecoration: 'none',
  fontWeight: isActive ? 'bold' : 'normal',
  marginLeft: '1.5rem',
  fontSize: '1rem',
});

const styles = {
  nav: {
    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
    background: '#111', padding: '1rem 2rem', position: 'sticky', top: 0, zIndex: 100,
  },
  logo: { color: '#d4a942', fontSize: '1.5rem', fontWeight: 'bold', letterSpacing: 2 },
  links: { display: 'flex' },
};
