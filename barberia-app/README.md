# UrbanCuts — Aplicación Web de Barbería
## Actividad 4 — Desarrollo de Aplicaciones Web
**Corporación Universitaria Iberoamericana**
Estudiante: David Barbosa Delgado

---

## Stack tecnológico

| Capa      | Tecnología                              |
|-----------|-----------------------------------------|
| Frontend  | React 18 + Vite + React Router v6       |
| HTTP      | Axios                                   |
| Backend   | Node.js + Express                       |
| Docs API  | Swagger (swagger-jsdoc + swagger-ui-express) |
| Despliegue| Vercel (frontend) + Railway (backend)   |

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

### Frontend → Vercel
```bash
npm run build
vercel --prod
```

### Backend → Railway
1. Crear cuenta en https://railway.app
2. Conectar repositorio GitHub
3. Railway detecta automáticamente Node.js y despliega

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

---

## Repositorio GitHub

Este proyecto debe subirse a GitHub:
```bash
git init
git add .
git commit -m "feat: Actividad 4 - Barbería UrbanCuts"
git branch -M main
git remote add origin https://github.com/TU_USUARIO/barberia-urbancuts.git
git push -u origin main
```
