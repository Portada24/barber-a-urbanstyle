# Urban Style Barbería — Aplicación Web de Barbería
## Actividad 4 — Desarrollo de Aplicaciones Web
**Corporación Universitaria Iberoamericana**
Estudiante: David Barbosa Delgado

---

## Stack tecnológico

| Capa      | Tecnología                              |
|-----------|-----------------------------------------|
| Frontend  | React 18 + Vite + React Router          |
| HTTP      | Axios                                   |
| Backend   | Node.js + Express                       |
| Docs API  | Swagger (swagger-jsdoc + swagger-ui-express) |
| Despliegue| Netlify (frontend) + Railway (backend)   |

---

## Instalación local

### Backend
```bash
cd barberia-app/backend
npm install
npm run dev
# Servidor: http://localhost:3001
# Swagger:  http://localhost:3001/api-docs
```

### Frontend
```bash
cd barberia-app/frontend
npm install
npm run dev
# App: http://localhost:5173
```

---

## Despliegue en producción

### Frontend → Netlify
```bash
npm run build
Se carga la carpeta dist en Netlify y se carga la URL
```

### Backend → Railway
1. Crear cuenta en https://railway.app
2. Conectar repositorio GitHub
3. Railway detecta automáticamente Node.js y despliega
4. se agrega a Railway la variable node server.js
5. Crear dominio público

---

## Endpoints de la API

| Método | Ruta                | Descripción                    |
|--------|---------------------|--------------------------------|
| GET    | /api/servicios      | Lista todos los servicios      |
| GET    | /api/servicios/:id  | Obtiene un servicio por ID     |
| GET    | /api/reservas       | Lista todas las reservas       |
| POST   | /api/reservas       | Registra una nueva reserva     |
| DELETE | /api/reservas/:id   | Elimina una reserva            |
| POST   | /api/contacto       | Envía un mensaje de contacto   |
