const express = require('express');
const router  = express.Router();

/**
 * @swagger
 * /api/contacto:
 *   post:
 *     summary: Recibe un mensaje de contacto
 *     tags: [Contacto]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombre:  { type: string }
 *               email:   { type: string }
 *               mensaje: { type: string }
 *     responses:
 *       200:
 *         description: Mensaje recibido
 */
router.post('/', (req, res) => {
  const { nombre, email, mensaje } = req.body;
  if (!nombre || !email || !mensaje) {
    return res.status(400).json({ error: 'Todos los campos son requeridos.' });
  }
  // Aquí se integraría el envío por correo o Telegram/WhatsApp
  console.log('Nuevo mensaje de contacto:', { nombre, email, mensaje });
  res.json({ ok: true, mensaje: 'Mensaje recibido. Te contactaremos pronto.' });
});

module.exports = router;
