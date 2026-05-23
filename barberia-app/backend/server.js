const express    = require('express');
const cors       = require('cors');
const swaggerUi  = require('swagger-ui-express');
const swaggerJSDoc = require('swagger-jsdoc');

const app = express();
app.use(cors());
app.use(express.json());

// ——— Swagger ———
const swaggerSpec = swaggerJSDoc({
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Urban Style Barbería API',
      version: '1.0.0',
      description: 'API REST para la barbería Urban Style Barbería',
    },
    servers: [{ url: 'http://localhost:3001' }],
  },
  apis: ['./routes/*.js'],
});
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// ——— Rutas ———
app.use('/api/servicios', require('./routes/servicios'));
app.use('/api/reservas',  require('./routes/reservas'));
app.use('/api/contacto',  require('./routes/contacto'));

app.get('/', (req, res) => res.json({ mensaje: 'Urban Style Barbería API activa' }));

const PORT = process.env.PORT || 3001;
app.listen(PORT, () =>
  console.log(`Servidor corriendo en http://localhost:${PORT}\nSwagger: http://localhost:${PORT}/api-docs`)
);
