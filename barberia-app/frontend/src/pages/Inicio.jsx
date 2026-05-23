import { Link } from 'react-router-dom';

export default function Inicio() {
  return (
    <div>
      {/* Hero */}
      <section style={styles.hero}>
        <h1 style={styles.heroTitle}>✂ Urban Style Barbería</h1>
        <p style={styles.heroSub}>Barbería de estilo urbano y moderno en Aguachica</p>
        <Link to="/reservas" style={styles.cta}>Reservar Cita</Link>
      </section>

      {/* Por qué elegirnos */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>¿Por qué elegirnos?</h2>
        <div style={styles.cards}>
          {[
            { icon: '✂', title: 'Expertos', desc: 'Barberos con más de 5 años de experiencia.' },
            { icon: '🕐', title: 'Puntualidad', desc: 'Respetamos tu tiempo. Sin esperas.' },
            { icon: '🏆', title: 'Calidad', desc: 'Productos premium para tu cabello.' },
          ].map(c => (
            <div key={c.title} style={styles.card}>
              <span style={styles.cardIcon}>{c.icon}</span>
              <h3 style={styles.cardTitle}>{c.title}</h3>
              <p style={styles.cardDesc}>{c.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

const styles = {
  hero: {
    background: 'linear-gradient(135deg, #111 0%, #1a1a1a 100%)',
    color: '#fff', textAlign: 'center', padding: '5rem 2rem',
  },
  heroTitle: { fontSize: '3.5rem', color: '#d4a942', marginBottom: '1rem' },
  heroSub: { fontSize: '1.2rem', color: '#ccc', marginBottom: '2rem' },
  cta: {
    background: '#d4a942', color: '#111', padding: '0.8rem 2rem',
    borderRadius: '30px', textDecoration: 'none', fontWeight: 'bold', fontSize: '1.1rem',
  },
  section: { padding: '4rem 2rem', background: '#f9f9f9', textAlign: 'center' },
  sectionTitle: { fontSize: '2rem', marginBottom: '2rem', color: '#111' },
  cards: { display: 'flex', gap: '2rem', justifyContent: 'center', flexWrap: 'wrap' },
  card: {
    background: '#fff', borderRadius: '12px', padding: '2rem', width: '220px',
    boxShadow: '0 4px 16px rgba(0,0,0,0.08)',
  },
  cardIcon: { fontSize: '2.5rem' },
  cardTitle: { fontSize: '1.2rem', color: '#111', margin: '0.8rem 0 0.4rem' },
  cardDesc: { color: '#666', fontSize: '0.95rem' },
};
