# DanExcel — Curso Excel Power

Landing + portal de clases para el curso "Excel Power: Analiza y Transforma Datos con DAX y Power Query".

## Stack
- React 18 + Vite
- React Router DOM
- Deploy: Vercel (zero config)

## Estructura
```
src/
├── data/curso.js        ← TODA la config del curso (módulos, clases, precio, WA)
├── pages/
│   ├── Landing.jsx      ← Página de marketing
│   └── Clases.jsx       ← Portal de clases grabadas
├── components/
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── DashboardPreview.jsx
│   ├── Temario.jsx
│   └── CTAFinal.jsx
└── styles/globals.css
```

## Desarrollo local
```bash
npm install
npm run dev
```

## Deploy en Vercel
1. Subir repo a GitHub
2. Ir a vercel.com → New Project → importar el repo
3. Framework: **Vite** (lo detecta solo)
4. Deploy → listo en ~1 min

## Agregar clases grabadas
En `src/data/curso.js`, cada clase tiene `videoId: null`.
Cuando subas el video a YouTube, reemplaza `null` por el ID:

```js
// URL: https://www.youtube.com/watch?v=ABC123xyz
videoId: "ABC123xyz"
```

## Cambiar precio
En `src/data/curso.js`:
```js
export const PRECIO = { actual: 97000, anterior: 180000 }
```

## Cambiar WhatsApp
```js
export const WHATSAPP_URL = "https://wa.me/57TUNUMERO?text=..."
```
