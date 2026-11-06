# Ideago — sitio web

Landing de Ideago (antes RossyStudio), estudio de producto digital. Construida con [Astro](https://astro.build), sin frameworks de UI: CSS propio y un script chico para las animaciones.

## Desarrollo local

```bash
npm install
npm run dev
```

Abre `http://localhost:4321`.

## Build

```bash
npm run build
npm run preview
```

## Deploy

Netlify (configurado en `netlify.toml`): build `npm run build`, publica `dist`. Las rutas del sitio anterior (`/servicios`, `/estudio`, `/trabajo/*`, `/contacto`) redirigen a las secciones de la landing.

## Qué tiene la landing

- **Intro animada** (idea → diseño → código → go.), una vez por sesión y con botón para saltarla. No se muestra si el sistema pide menos movimiento.
- **Manifiesto que se enciende** palabra por palabra al hacer scroll.
- **Cursor propio** (solo con mouse): punto que invierte el color de lo que tiene debajo; sobre links y botones se agranda y dice "go →" (azul marino sobre botones naranjas).
- **Formulario de contacto** con Netlify Forms (`name="contacto"`), redirige a `/gracias`.

## Pendiente

- Activar la detección de formularios en Netlify (Site configuration → Forms) y configurar a qué email llegan los avisos.
- Email de contacto visible y link de Instagram (se sacaron hasta tenerlos).
- Logo definitivo (hoy `public/logo/ideago.png`, provisorio) y dominio de Ideago.

## Estructura

- `src/layouts/Layout.astro` — layout base (meta, fuentes Sora + Inter).
- `src/styles/global.css` — colores, fondo y estilos de las páginas simples.
- `src/pages/index.astro` — la landing (marcado, estilos y script).
- `src/pages/gracias.astro`, `src/pages/404.astro`.
