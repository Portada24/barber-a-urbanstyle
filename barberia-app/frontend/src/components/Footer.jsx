export default function Footer() {
  return (
    <footer style={styles.footer}>
      <p>© 2026 Urban Style Barbería — Todos los derechos reservados</p>
      <p style={{ color: '#d4a942', marginTop: '0.3rem' }}>
        📍 Aguachica, Colombia &nbsp;|&nbsp; 📞 +57 300 000 0000
      </p>
    </footer>
  );
}

const styles = {
  footer: {
    background: '#111', color: '#aaa',
    textAlign: 'center', padding: '1.5rem', fontSize: '0.9rem', marginTop: '3rem',
  },
};
