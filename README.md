# BeatBoard — sitio web

Sitio público de presentación de BeatBoard, creado con React + Vite.

## Requisitos
- Node.js 18 o superior
- npm

## Ejecutar en tu computadora

```bash
npm install
npm run dev
```

Abre la dirección local que Vite muestre en la terminal (normalmente `http://localhost:5173`).

## Generar la versión para publicar

```bash
npm run build
```

Vite creará la carpeta `dist/`.

## Personalizar enlaces

El sitio es independiente de la aplicación BeatBoard: no necesita conexión con Supabase ni con la app. Sus botones navegan entre secciones informativas del propio sitio.

Si quieres mostrar el repositorio en el pie de página, abre `src/App.jsx` y reemplaza `GITHUB_URL` por el enlace de tu repositorio.

## Subir el proyecto a GitHub

1. Crea un repositorio nuevo en GitHub, por ejemplo `beatboard-web`.
2. Extrae este ZIP en una carpeta.
3. Abre una terminal dentro de esa carpeta y ejecuta:

```bash
git init
git add .
git commit -m "Crear sitio web de BeatBoard"
git branch -M main
git remote add origin https://github.com/TU-USUARIO/beatboard-web.git
git push -u origin main
```

Cambia `TU-USUARIO` por tu usuario de GitHub.

## Publicar con GitHub Pages

Puedes desplegarlo en GitHub Pages usando GitHub Actions o publicarlo en un servicio como Vercel o Netlify. Para GitHub Pages, configura el `base` de `vite.config.js` con el nombre del repositorio si no publicas desde un dominio raíz. Por ejemplo:

```js
base: "/beatboard-web/"
```

Luego ejecuta `npm run build` y configura Pages para desplegar la carpeta `dist` mediante GitHub Actions.

## Estructura

```text
beatboard-web/
├── index.html
├── package.json
├── vite.config.js
├── README.md
└── src/
    ├── App.jsx
    ├── main.jsx
    └── styles.css
```
