import { useState } from 'react';
import { postContacto } from '../services/api';

export default function Contacto() {
  const [form, setForm] = useState({ nombre: '', email: '', mensaje: '' });
  const [enviado, setEnviado] = useState(false);

  const set = (campo) => (e) => setForm(p => ({ ...p, [campo]: e.target.value }));

  const handleSubmit = async () => {
    try {
      await postContacto(form);
      setEnviado(true);
      setForm({ nombre: '', email: '', mensaje: '' });
    } catch {
      alert('Error al enviar. Intenta más tarde.');
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Contáctanos</h1>

      <div style={styles.info}>
        <p>📍 Aguachica, Santander</p>
        <p>📞 +57 300 000 0000</p>
        <p>📧 urbanstylebarber@gmail.com</p>
        <p>🕐 Lunes a Sábado: 8:00 am – 8:00 pm</p>
      </div>

      {enviado ? (
        <p style={styles.exito}>Mensaje enviado. Te contactaremos pronto.</p>
      ) : (
        <div style={styles.form}>
          <input style={styles.input} placeholder="Tu nombre"
            value={form.nombre} onChange={set('nombre')} />
          <input style={styles.input} placeholder="Tu correo electrónico" type="email"
            value={form.email} onChange={set('email')} />
          <textarea style={{ ...styles.input, minHeight: '120px', resize: 'vertical' }}
            placeholder="Escribe tu mensaje..." value={form.mensaje} onChange={set('mensaje')} />
          <button style={styles.btn} onClick={handleSubmit}>Enviar Mensaje</button>
        </div>
      )}
    </div>
  );
}

const styles = {
  container: { padding: '3rem 2rem', maxWidth: '600px', margin: '0 auto' },
  title: { fontSize: '2rem', textAlign: 'center', color: '#111', marginBottom: '1.5rem' },
  info: { background: '#f4f4f4', borderRadius: '10px', padding: '1.2rem', marginBottom: '2rem', lineHeight: '2' },
  form: { display: 'flex', flexDirection: 'column', gap: '1rem' },
  input: { padding: '0.8rem 1rem', borderRadius: '8px', border: '1px solid #ddd', fontSize: '1rem' },
  btn: {
    background: '#d4a942', color: '#111', border: 'none',
    padding: '0.9rem', borderRadius: '8px', fontWeight: 'bold', fontSize: '1rem', cursor: 'pointer',
  },
  exito: {
    background: '#e6f9ee', color: '#2d7a4f', border: '1px solid #a3d9b5',
    borderRadius: '8px', padding: '1.2rem', textAlign: 'center',
  },
};
