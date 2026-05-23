import { useState, useEffect, useContext, useReducer } from 'react';
import { ReservasContext } from '../context/ReservasContext';
import { getServicios, postReserva } from '../services/api';

// useReducer: maneja el formulario con múltiples campos
function formReducer(state, action) {
  switch (action.type) {
    case 'SET_CAMPO':
      return { ...state, [action.campo]: action.valor };
    case 'RESET':
      return initialForm;
    default:
      return state;
  }
}

const initialForm = { nombre: '', telefono: '', servicio: '', fecha: '', hora: '' };

export default function Reservas() {
  const [servicios, setServicios]   = useState([]);
  const [enviando, setEnviando]     = useState(false);
  const [exito, setExito]           = useState(false);
  const [form, dispatch]            = useReducer(formReducer, initialForm);
  const { reservas, setReservas }   = useContext(ReservasContext); // useContext

  // useEffect: cargar servicios al montar
  useEffect(() => {
    getServicios().then(res => setServicios(res.data));
  }, []);

  const handleChange = (campo) => (e) =>
    dispatch({ type: 'SET_CAMPO', campo, valor: e.target.value });

  const handleSubmit = async () => {
    if (!form.nombre || !form.servicio || !form.fecha || !form.hora) {
      alert('Por favor completa todos los campos requeridos.');
      return;
    }
    setEnviando(true);
    try {
      const res = await postReserva(form);
      setReservas(prev => [...prev, res.data]);
      dispatch({ type: 'RESET' });
      setExito(true);
      setTimeout(() => setExito(false), 4000);
    } catch {
      alert('Error al registrar la reserva. Intenta de nuevo.');
    } finally {
      setEnviando(false);
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Reservar Cita</h1>

      {exito && <p style={styles.exito}>✅ ¡Reserva confirmada! Te esperamos.</p>}

      <div style={styles.form}>
        <label style={styles.label}>Nombre completo *</label>
        <input style={styles.input} value={form.nombre}
          onChange={handleChange('nombre')} placeholder="Tu nombre" />

        <label style={styles.label}>Teléfono</label>
        <input style={styles.input} value={form.telefono}
          onChange={handleChange('telefono')} placeholder="+57 300 000 0000" />

        <label style={styles.label}>Servicio *</label>
        <select style={styles.input} value={form.servicio}
          onChange={handleChange('servicio')}>
          <option value="">-- Selecciona un servicio --</option>
          {servicios.map(s => (
            <option key={s._id} value={s.nombre}>{s.nombre} — ${s.precio?.toLocaleString()}</option>
          ))}
        </select>

        <label style={styles.label}>Fecha *</label>
        <input style={styles.input} type="date" value={form.fecha}
          onChange={handleChange('fecha')} />

        <label style={styles.label}>Hora *</label>
        <input style={styles.input} type="time" value={form.hora}
          onChange={handleChange('hora')} />

        <button style={styles.btn} onClick={handleSubmit} disabled={enviando}>
          {enviando ? 'Enviando...' : 'Confirmar Reserva'}
        </button>
      </div>

      {/* Lista de reservas del contexto */}
      {reservas.length > 0 && (
        <div style={styles.historial}>
          <h3>Mis reservas en esta sesión</h3>
          {reservas.map((r, i) => (
            <p key={i} style={styles.item}>
              📅 {r.fecha} {r.hora} — {r.servicio} ({r.nombre})
            </p>
          ))}
        </div>
      )}
    </div>
  );
}

const styles = {
  container: { padding: '3rem 2rem', maxWidth: '600px', margin: '0 auto' },
  title: { fontSize: '2rem', textAlign: 'center', color: '#111', marginBottom: '2rem' },
  form: { display: 'flex', flexDirection: 'column', gap: '0.8rem' },
  label: { fontWeight: 'bold', color: '#333', fontSize: '0.95rem' },
  input: {
    padding: '0.7rem 1rem', borderRadius: '8px',
    border: '1px solid #ddd', fontSize: '1rem', outline: 'none',
  },
  btn: {
    background: '#d4a942', color: '#111', border: 'none',
    padding: '0.9rem', borderRadius: '8px', fontWeight: 'bold',
    fontSize: '1rem', cursor: 'pointer', marginTop: '0.5rem',
  },
  exito: {
    background: '#e6f9ee', color: '#2d7a4f', border: '1px solid #a3d9b5',
    borderRadius: '8px', padding: '1rem', marginBottom: '1rem', textAlign: 'center',
  },
  historial: { marginTop: '2rem', background: '#f9f9f9', borderRadius: '10px', padding: '1rem' },
  item: { margin: '0.4rem 0', color: '#444', fontSize: '0.95rem' },
};
