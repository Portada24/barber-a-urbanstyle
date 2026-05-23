const express = require('express');
const router  = express.Router();

// Datos en memoria (reemplazar con MongoDB en producción)
let servicios = [
  { _id: '1', nombre: 'Corte Clásico',      descripcion: 'Corte tradicional con tijeras.',    precio: 25000, duracion: 30, icono: '✂' },
  { _id: '2', nombre: 'Corte + Barba',       descripcion: 'Corte y arreglo de barba completo.', precio: 40000, duracion: 50, icono: '🪒' },
  { _id: '3', nombre: 'Degradado Moderno',   descripcion: 'Fade profesional a tu gusto.',        precio: 35000, duracion: 40, icono: '💈' },
  { _id: '4', nombre: 'Tratamiento Capilar', descripcion: 'Hidratación profunda del cabello.',   precio: 30000, duracion: 45, icono: '💆' },
];

/**
 * @swagger
 * /api/servicios:
 *   get:
 *     summary: Retorna todos los servicios disponibles
 *     tags: [Servicios]
 *     responses:
 *       200:
 *         description: Lista de servicios
 */
router.get('/', (req, res) => {
  res.json(servicios);
});

/**
 * @swagger
 * /api/servicios/{id}:
 *   get:
 *     summary: Retorna un servicio por ID
 *     tags: [Servicios]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema: { type: string }
 *     responses:
 *       200:
 *         description: Servicio encontrado
 *       404:
 *         description: Servicio no encontrado
 */
router.get('/:id', (req, res) => {
  const s = servicios.find(s => s._id === req.params.id);
  if (!s) return res.status(404).json({ error: 'Servicio no encontrado' });
  res.json(s);
});

module.exports = router;
