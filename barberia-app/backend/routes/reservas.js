const express = require('express');
const router  = express.Router();

let reservas = [];
let nextId = 1;

/**
 * @swagger
 * /api/reservas:
 *   get:
 *     summary: Retorna todas las reservas registradas
 *     tags: [Reservas]
 *     responses:
 *       200:
 *         description: Lista de reservas
 */
router.get('/', (req, res) => {
  res.json(reservas);
});

/**
 * @swagger
 * /api/reservas:
 *   post:
 *     summary: Registra una nueva reserva
 *     tags: [Reservas]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombre:   { type: string }
 *               telefono: { type: string }
 *               servicio: { type: string }
 *               fecha:    { type: string }
 *               hora:     { type: string }
 *     responses:
 *       201:
 *         description: Reserva creada exitosamente
 *       400:
 *         description: Datos inválidos
 */
router.post('/', (req, res) => {
  const { nombre, servicio, fecha, hora } = req.body;
  if (!nombre || !servicio || !fecha || !hora) {
    return res.status(400).json({ error: 'Campos requeridos: nombre, servicio, fecha, hora' });
  }
  const nueva = { _id: String(nextId++), ...req.body, creadaEn: new Date() };
  reservas.push(nueva);
  res.status(201).json(nueva);
});

/**
 * @swagger
 * /api/reservas/{id}:
 *   delete:
 *     summary: Elimina una reserva por ID
 *     tags: [Reservas]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema: { type: string }
 *     responses:
 *       200:
 *         description: Reserva eliminada
 *       404:
 *         description: Reserva no encontrada
 */
router.delete('/:id', (req, res) => {
  const idx = reservas.findIndex(r => r._id === req.params.id);
  if (idx === -1) return res.status(404).json({ error: 'Reserva no encontrada' });
  reservas.splice(idx, 1);
  res.json({ mensaje: 'Reserva eliminada' });
});

module.exports = router;
