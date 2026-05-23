import { useState, useEffect } from 'react';
import { getServicios } from '../services/api';

export default function Servicios() {
  const [servicios, setServicios] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  // useEffect: carga servicios al montar el componente
  useEffect(() => {
    getServicios()
      .then(res => setServicios(res.data))
      .catch(() => setError('No se pudieron cargar los servicios.'))
      .finally(() => setCargando(false));
  }, []);

  if (cargando) return <p style={styles.msg}>Cargando servicios...</p>;
  if (error)    return <p style={{ ...styles.msg, color: 'red' }}>{error}</p>;

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Nuestros Servicios</h1>
      <div style={styles.grid}>
        {servicios.map(s => (
          <div key={s._id} style={styles.card}>
            <div style={styles.cardTop}>
              <span style={styles.icon}>{s.icono || '✂'}</span>
              <h3 style={styles.nombre}>{s.nombre}</h3>
            </div>
            <p style={styles.desc}>{s.descripcion}</p>
            <p style={styles.precio}>${s.precio.toLocaleString()} COP</p>
            <p style={styles.duracion}>⏱ {s.duracion} min</p>
          </div>
        ))}
      </div>
    </div>
  );
}

const styles = {
  container: { padding: '3rem 2rem', maxWidth: '1100px', margin: '0 auto' },
  title: { fontSize: '2.2rem', textAlign: 'center', color: '#111', marginBottom: '2.5rem' },
  msg: { textAlign: 'center', padding: '3rem', fontSize: '1.1rem', color: '#666' },
  grid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '1.5rem' },
  card: {
    border: '1px solid #eee', borderRadius: '12px', padding: '1.5rem',
    boxShadow: '0 2px 12px rgba(0,0,0,0.06)', background: '#fff',
  },
  cardTop: { display: 'flex', alignItems: 'center', gap: '0.8rem', marginBottom: '0.8rem' },
  icon: { fontSize: '1.8rem' },
  nombre: { fontSize: '1.1rem', fontWeight: 'bold', color: '#111' },
  desc: { color: '#666', fontSize: '0.9rem', marginBottom: '1rem' },
  precio: { color: '#d4a942', fontWeight: 'bold', fontSize: '1.1rem' },
  duracion: { color: '#999', fontSize: '0.85rem', marginTop: '0.3rem' },
};
