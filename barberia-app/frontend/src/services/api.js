import axios from 'axios';

const api = axios.create({
  baseURL: 'https://barber-a-urbanstyle-production.up.railway.app/api',
  // baseURL: 'http://localhost:3001/api',
  headers: { 'Content-Type': 'application/json' },
});

export const getServicios = () => api.get('/servicios');
export const postReserva  = (datos) => api.post('/reservas', datos);
export const postContacto = (datos) => api.post('/contacto', datos);

export default api;
