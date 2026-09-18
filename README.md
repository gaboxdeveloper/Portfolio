# RossyStudio — sitio web

Sitio institucional construido con [Astro](https://astro.build) + Tailwind CSS, a partir del handoff de diseño en [`design/handoff.md`](./design/handoff.md).

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

## Deploy en Netlify

1. Conectá este repositorio en Netlify (New site from Git).
2. Build command: `npm run build` — Publish directory: `dist` (ya configurado en `netlify.toml`).
3. Una vez deployado, andá a **Domain settings → Add a domain** y seguí las instrucciones para apuntar tu dominio propio (registros DNS `A`/`CNAME` según indique Netlify).

## Contenido pendiente (placeholders a reemplazar)

- **Email de contacto**: `hola@rossystudio.com` en `src/pages/contacto.astro`.
- **Año de Ciberseguridad**: `2027`, constante `anioCiber` en `src/pages/index.astro` y `src/pages/estudio.astro`.
- **Capturas de la app eTool**: marcos placeholder en `src/pages/index.astro` (sección eTool) y `src/pages/trabajo/etool.astro` (galería). Reemplazar los `<ImageFrame>` por `<img>` reales.
- **Retrato del estudio**: placeholder en `src/pages/estudio.astro`.
- **Envío real del formulario de contacto**: hoy el formulario de `src/pages/contacto.astro` solo simula el envío en el navegador (estado "enviado" con JS). Falta conectarlo a un proveedor (Formspree, Resend, etc.) cuando lo decidan.

## Estructura

- `src/layouts/Layout.astro` — layout base (meta, fuentes, fondo).
- `src/components/` — Header, Footer, BrandMark y bloques compartidos (fila de datos, marco de imagen, CTA de cierre).
- `src/pages/` — Home (`index.astro`), Servicios, Caso eTool (`trabajo/etool.astro`), Estudio, Contacto.

## Créditos de diseño

Basado en el handoff [`design/handoff.md`](./design/handoff.md) (tokens de color, tipografía Archivo, grillas y estados definidos ahí).
