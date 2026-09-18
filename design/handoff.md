# Handoff: Sitio web RossyStudio

## Overview
Sitio institucional de **RossyStudio**, el estudio unipersonal de Rodrigo Rossy: diseño y desarrollo de productos digitales con foco en aplicaciones móviles, operado en remoto desde Uruguay con visitas presenciales cuando el proyecto lo requiere. Una segunda línea de servicio (Ciberseguridad) se anuncia como "próximamente".

Objetivo primario de conversión: **enviar una consulta** desde el formulario de contacto. Audiencia: fundadores de startups/PyMEs, empresas medianas que buscan proveedor externo, reclutadores para contratos por proyecto, y emprendedores que buscan un partner técnico. Idioma: **español (es-UY)**, tono confiado y directo, con filo, sin adjetivos de relleno.

Son 5 páginas: Home, Servicios, Caso eTool, Estudio, Contacto.

## About the Design Files
Los archivos `.dc.html` de este bundle son **referencias de diseño creadas en HTML** — prototipos que muestran el aspecto y el comportamiento buscados, **no código de producción para copiar tal cual**. Cada archivo usa un runtime de componentes propio (`<x-dc>`, `<helmet>`, `<sc-if>`, `<sc-for>`, `style-hover`, `support.js`) que **no debe reproducirse**.

La tarea es **recrear estos diseños en el entorno del proyecto destino** usando sus patrones y librerías establecidas. Si todavía no hay entorno, la recomendación para este sitio es **Next.js (App Router) + Tailwind CSS**, estático/SSG, desplegado en Vercel: son 5 páginas de contenido mayormente estático más un endpoint de formulario.

Equivalencias del runtime a HTML/React normal:
- `style-hover="…"` → una clase `hover:` de Tailwind o una regla CSS `:hover`.
- `<sc-if value>` → render condicional.
- `<sc-for list as>` → `.map()`.
- `{{ variable }}` → interpolación normal.
- `<image-slot>` → una etiqueta `<img>` / `next/image` con la imagen real (son placeholders para que el cliente suelte capturas).
- `<helmet>` → `<head>` / metadata de Next.

## Fidelity
**Alta fidelidad (hifi).** Colores, tipografía, espaciados, jerarquías y estados están definitivos; el README lleva los valores exactos. Recrear pixel-perfect con las librerías del proyecto destino. Las únicas piezas pendientes son **contenido real**, no diseño: capturas de la app eTool, retrato del estudio, email definitivo y año de apertura de la línea de Ciberseguridad.

## Design Tokens

### Colores
| Rol | Valor | Uso |
| --- | --- | --- |
| Fondo base | `#0b0b0b` | fondo de todas las páginas |
| Panel | `#111111` | bloques destacados (marco de capturas, bloque Ciberseguridad, panel "consulta enviada") |
| Tinta primaria | `#f2f2f2` | texto principal, botón primario, brand mark "R" |
| Tinta secundaria | `#b4b4b4` | párrafos de cuerpo |
| Plata | `#a8a8a8` | brand mark "S", nav en reposo, texto dentro de paneles |
| Plata apagada | `#8a8a8a` | kickers, etiquetas, numeración, metadatos |
| Placeholder de input | `#5a5a5a` | `::placeholder` |
| Número fantasma | `#454545` | cifra grande decorativa ("2027") sobre `#111` |
| Regla fuerte | `rgba(255,255,255,0.22)` | 2px — divide secciones mayores |
| Regla suave | `rgba(255,255,255,0.16)` | 1px — divide filas y celdas |
| Borde de control | `rgba(255,255,255,0.32)` | inputs y botones secundarios |
| Hover sobre oscuro | `rgba(255,255,255,0.04)` – `rgba(255,255,255,0.08)` | filas y botones fantasma |
| Blanco puro | `#ffffff` | hover del botón primario |

No hay color de acento cromático: la marca es negro + plata. El sistema Modernist aporta la estructura (grilla visible, reglas de 2px, radio 0, todo alineado a la izquierda, Archivo) pero **su rojo #ec3013 no se usa** — la marca del cliente manda.

### Tipografía
- Familia única: **Archivo** (Google Fonts), pesos 400 / 500 / 600 / 800. Fallback: `system-ui, sans-serif`.
- Títulos display: peso **800**, `text-transform: uppercase`, `letter-spacing: -0.05em`, `line-height: 0.85`.
- **Excepción:** el nombre de producto **"eTool"** nunca va en uppercase — se escribe con la e minúscula, tal cual la marca.
- Escala (fluida, con `clamp()`):
  | Elemento | Tamaño |
  | --- | --- |
  | H1 home / caso | `clamp(46px, 11.2vw, 184px)`, lh 0.85, ls −0.05em |
  | H1 páginas internas | `clamp(40px, 9vw, 158px)`, lh 0.85, ls −0.05em |
  | H2 de sección | `clamp(28px, 4vw, 52px)`, ls −0.035em, uppercase |
  | H2 de cierre (CTA) | `clamp(30px, 4.8vw, 76px)`, lh 0.92, ls −0.045em |
  | H3 de fila/tarjeta | `clamp(18px, 2.1vw, 27px)` (o 20px fijo en tarjetas), ls −0.02em |
  | Lead / intro | `clamp(16px, 1.6vw, 23px)`, peso 500, lh 1.45 |
  | Cuerpo | 15–16px, peso 400, lh 1.6–1.7 |
  | Kicker / etiqueta | 10–11px, peso 600, `letter-spacing: 0.16em–0.18em`, uppercase |
  | Label de botón | 11–13px, peso 800, `letter-spacing: 0.14em`, uppercase |
  | Cifra de dato | `clamp(26px, 3.2vw, 42px)`, peso 800, ls −0.035em |

### Espaciado y grilla
- Padding lateral de página: `5vw` (todas las secciones y el header comparten este canal).
- Padding vertical entre secciones: `6.5vw` en home, `6vw` en páginas internas.
- Radio de borde: **0 en todo el sitio**. Sin excepciones.
- Sin sombras. La jerarquía la dan las reglas y la escala tipográfica.
- Gaps internos: 12 / 18 / 22 / 28 / 44 / 48px.
- Grillas responsivas: `repeat(auto-fit, minmax(Xpx, 1fr))` con X entre 190 y 300px según la sección; las filas de servicio usan `grid-template-columns: 64px minmax(0,1fr) minmax(0,1.25fr)` (número / título / descripción).
- Celdas adyacentes se separan con borde de 1px, no con gap — la grilla tiene que verse.

### Estados
- Botón primario: fondo `#f2f2f2`, texto `#0b0b0b`; hover `#ffffff`. En el header, hover `#a8a8a8`.
- Botón secundario: transparente, borde `rgba(255,255,255,0.32)`; hover fondo `rgba(255,255,255,0.08)`.
- Nav: reposo `#a8a8a8`, hover `#ffffff`, página activa `#ffffff` fijo.
- Links de cuerpo: `#f2f2f2`, hover `#a8a8a8`.
- Filas clicables (servicios del home): hover fondo `rgba(255,255,255,0.04)`.
- Inputs: fondo transparente, borde inferior 1px `rgba(255,255,255,0.32)`; en foco el borde pasa a `#f2f2f2`. El textarea lleva borde completo en vez de solo inferior.
- Chips de tipo de consulta: reposo transparente con borde `rgba(255,255,255,0.32)` y texto `#b4b4b4`; activo fondo `#f2f2f2` con texto `#0b0b0b`.
- `::selection`: fondo `#f2f2f2`, texto `#0b0b0b`.
- Focus de teclado: **implementar** `:focus-visible { outline: 2px solid #f2f2f2; outline-offset: 2px; }` — los prototipos no lo traen y no debe quedar el anillo azul del navegador.

### Patrones compartidos (implementar como componentes)
1. **Header** (idéntico en las 5 páginas, `position: sticky; top: 0`, fondo `#0b0b0b`, `z-index: 20`, borde inferior 2px): brand mark + nav (Servicios / Trabajo / Estudio) + botón "Consultar". En Contacto se omite el botón "Consultar" (ya se está en contacto). El link de la página actual va en `#ffffff`.
2. **Brand mark**: cuadrado de 34×34px, fondo `#000`, borde 1px `rgba(255,255,255,0.28)`, con "R" en `#fff` y "S" en `#a8a8a8`, peso 800, 15px, ls −0.04em. Al lado el wordmark "ROSSYSTUDIO" (14px, peso 800, ls 0.18em, uppercase) con "STUDIO" en `#a8a8a8`. Reemplazable por el logotipo del cliente (ver Assets).
3. **Footer** (idéntico en las 5): borde superior 2px, dos spans a los extremos — "RossyStudio · Producto digital" y "Remoto · Uruguay" — 11px, peso 600, ls 0.16em, uppercase, `#8a8a8a`.
4. **Kicker de sección**: etiqueta corta en 11px/600/0.18em/uppercase/`#8a8a8a`, con la numeración de sección ("01 — Servicios") al extremo opuesto del H2 en la misma línea base.
5. **Fila de datos**: grilla de celdas iguales separadas por bordes de 1px, cada una con cifra grande arriba y etiqueta uppercase debajo.
6. **Bloque CTA de cierre**: borde superior 2px, H2 uppercase grande a la izquierda, párrafo + botón primario a la derecha.

## Screens / Views

### 1. Home (`RossyStudio Home.dc.html`)
**Propósito:** presentar el estudio, mostrar los cuatro servicios, adelantar el caso eTool y llevar a contacto.

**Layout,** de arriba a abajo:
1. **Header** (patrón compartido).
2. **Hero** — padding `5vw 5vw 0`, borde inferior 2px.
   - Fila de metadatos arriba: cuatro spans distribuidos con `justify-content: space-between` y `flex-wrap`, 11px/600/0.18em/uppercase/`#8a8a8a`: "Estudio de producto digital", "Mobile first", "Uruguay", y el estado — este último en `#f2f2f2` con un punto de 7px (`border-radius: 50%`, fondo `#f2f2f2`) delante. Texto del estado condicional: **"Tomando proyectos"** si hay disponibilidad, **"Agenda completa"** si no.
   - H1 en tres líneas con `<br>`: "PRODUCTO" / "DIGITAL" (esta en `#8a8a8a`) / "HECHO BIEN". `clamp(46px, 11.2vw, 184px)`, lh 0.85, ls −0.05em, uppercase, peso 800.
   - Bajo el H1, grilla de dos columnas (`minmax(270px,1fr)`, gap 40px): a la izquierda el lead ("Pienso, diseño y construyo aplicaciones móviles con mi propia visión del producto. Solo, o dirigiendo el equipo que haga falta.", `clamp(16px,1.6vw,23px)`, peso 500, max 32ch); a la derecha un párrafo de apoyo ("Pensar, decidir y construir son la misma tarea. Por eso acá no hay traspaso de manos: la persona que define el producto es la que lo escribe.", 15px, `#b4b4b4`, max 42ch) más dos botones: primario "ENVIAR CONSULTA →" (a Contacto) y secundario "VER EL CASO ETOOL" (al caso).
3. **Fila de datos** — 4 celdas, borde inferior 2px: "iOS/Android" (la barra en `#8a8a8a`) / "Una base de código"; "1" / "Responsable del proyecto"; "48h" / "Tiempo de respuesta"; "E2E" (en `#8a8a8a`) / "Idea, diseño, código, release".
4. **Servicios** (`#servicios`) — H2 "QUÉ HAGO" + kicker "01 — Servicios". Cuatro filas clicables (cada una linkea a la página Servicios), separadas por reglas de 1px, la última con regla de 2px; grilla `64px / 1fr / 1.25fr`: número (01–04, 12px/800/`#8a8a8a`), título uppercase, descripción.
   - 01 Producto de punta a punta — "De la idea cruda a la app publicada: definición, alcance, diseño, desarrollo y release, con una sola cabeza sosteniendo la coherencia."
   - 02 Aplicaciones móviles — "Mi especialidad. React Native y Expo, arquitectura pensada para crecer y una experiencia que no se siente hecha a los apurones."
   - 03 Diseño UX con criterio — "Flujos, jerarquía y decisiones defendibles. Menos pantallas bonitas, más caminos que la gente completa sin preguntar nada."
   - 04 Dirección técnica — "Para equipos que ya están construyendo y necesitan alguien que ordene el rumbo, revise decisiones y frene lo que no hay que hacer."
5. **Adelanto del caso eTool** (`#etool`) — H2 "eTool" (**sin uppercase**) + kicker "02 — Caso". Caja con borde 1px partida en dos columnas (`minmax(290px,1fr)`):
   - Izquierda (padding 38px): kicker "App móvil · Ganadería", H3 "La gestión del campo, en el bolsillo del productor", párrafo descriptivo, dos mini-datos en grilla separada por líneas de 1px ("iOS/And" / "Expo · React Native"; "4 módulos" / "Datos y proyecciones") y botón secundario "CASO COMPLETO →".
   - Derecha (fondo `#111`, padding 38px): dos marcos verticales `aspect-ratio: 9/19` con borde 1px; el segundo desplazado `margin-top: 36px` para dar ritmo. Van capturas reales de la app.
6. **El estudio** (`#sobre`) — borde superior 2px. Dos columnas: H2 "UN ESTUDIO DE UNA PERSONA, CON CRITERIO DE EQUIPO" con kicker "03 — El estudio"; a la derecha dos párrafos y un botón secundario "CÓMO TRABAJO →". El segundo párrafo aclara explícitamente que hay **visitas y reuniones presenciales** ("...pero cuando el proyecto lo pide, viajo: reuniones presenciales y visitas a las instalaciones del cliente para entender el trabajo donde realmente pasa. Y si hacen falta más manos, sumo especialistas y los dirijo yo.").
7. **Ciberseguridad (próximamente)** — sección **condicional** (puede ocultarse por completo). Caja con borde 1px, fondo `#111`, dos columnas: izquierda con tag outline "PRÓXIMA LÍNEA", H3 "CIBERSEGURIDAD" y párrafo; derecha con el año (`clamp(46px,7vw,96px)`, `#454545`, alineado al fondo de la celda) y la etiqueta "Apertura estimada". El año es un valor configurable (por defecto **2027**).
8. **CTA de cierre** — "CONTAME QUÉ QUERÉS CONSTRUIR" + "Respondo personalmente en menos de 48 horas. Si el proyecto no es para mí, te lo digo derecho." + botón primario grande "ENVIAR CONSULTA →".
9. **Footer** (patrón compartido).

**Parámetros configurables del home** (en los prototipos son props; en el sitio conviene que sean contenido editable o constantes en un archivo de config):
- `disponible` (booleano, default `true`) → alterna el texto de estado del hero.
- `mostrarCiber` (booleano, default `true`) → muestra u oculta la sección de Ciberseguridad.
- `anioCiber` (texto, default `"2027"`) → el año grande de esa sección.

### 2. Servicios (`RossyStudio Servicios.dc.html`)
**Propósito:** detallar los cuatro servicios y el proceso de trabajo.

1. **Hero** — kicker "SERVICIOS", H1 "CUATRO / FORMAS DE / TRABAJAR" (la tercera línea en `#8a8a8a`), párrafo de bajada ("Ninguna es un paquete cerrado. Todas arrancan con una conversación honesta sobre qué hay que construir, qué no, y cuánto cuesta cada camino.", max 54ch). Borde inferior 2px.
2. **Cuatro artículos de servicio**, cada uno una fila de dos columnas separadas por borde vertical de 1px, y separados entre sí por reglas horizontales de 1px:
   - Columna izquierda (padding `4vw 5vw`): kicker numerado ("01 — Producto", "02 — Mobile", "03 — UX", "04 — Dirección"), H2 uppercase `clamp(24px,3.2vw,40px)`, párrafo de 16px (max 48ch).
   - Columna derecha: una lista tabular — encabezado uppercase 10px ("Incluye" / "Stack habitual" / "Entregables" / "Formato") y 4 ítems de 15px peso 600, cada uno separado por regla de 1px.
   - Contenido exacto: **01 Producto** (Definición de alcance y roadmap · Diseño de flujos e interfaz · Desarrollo y pruebas · Publicación en tiendas); **02 Mobile** (React Native · Expo / Autenticación y roles / Datos, gráficos y proyecciones / Builds y distribución (EAS)); **03 UX** (Mapa de flujos y estados / Prototipo navegable / Sistema visual básico / Especificación para desarrollo); **04 Dirección** (Revisión de producto y prioridades / Auditoría de decisiones técnicas / Acompañamiento del equipo / Reunión semanal fija).
3. **Proceso** — H2 "CÓMO TRABAJAMOS" + kicker "Proceso". Cuatro tarjetas en grilla (`minmax(230px,1fr)`) separadas por líneas de 1px dentro de una caja con borde 1px: 01 Conversación ("Una llamada para entender el negocio y el problema real. Sin costo."), 02 Propuesta ("Alcance, etapas, plazos y precio por escrito. Lo que entra y lo que no."), 03 Construcción ("Entregas cada dos semanas, con algo usable en la mano cada vez."), 04 Release y sostén ("Publicación, medición y un período de acompañamiento acordado.").
4. **CTA de cierre** — "¿CUÁL DE LAS CUATRO NECESITÁS?" + párrafo + botón primario.
5. **Footer**.

### 3. Caso eTool (`RossyStudio Caso eTool.dc.html`)
**Propósito:** el caso de estudio detallado; la prueba de cómo trabaja el estudio.

1. **Hero** — fila de metadatos ("Caso 01", "App móvil · Ganadería", "iOS · Android", "En desarrollo activo"), H1 **"eTool"** con la e minúscula y **sin `text-transform`**, y un párrafo-lead `clamp(17px,2vw,28px)`: "La gestión del campo, en el bolsillo del productor: animales, pasturas, suplementación y proyecciones en una sola app."
2. **Ficha del proyecto** — 4 celdas separadas por bordes de 1px, con borde inferior 2px: Mi rol → "Producto, diseño y desarrollo"; Equipo → "Dos personas (mayoría propia)"; Stack → "React Native / Expo · EAS"; Estado → "v0.9 en pruebas".
3. **Problema y decisión de producto** — dos columnas (`minmax(290px,1fr)`, gap 44px):
   - "01 — El problema" · H2 "LOS NÚMEROS DEL CAMPO VIVEN EN PAPEL" + dos párrafos.
   - "02 — La decisión de producto" · H2 "CARGAR POCO, PROYECTAR MUCHO" + dos párrafos. Las palabras "datos" y "proyecciones" van en `<strong>` con `color:#f2f2f2; font-weight:600` (el resto del párrafo en `#b4b4b4`).
4. **Galería de pantallas** — grilla `minmax(240px,1fr)` con 4 marcos `aspect-ratio: 9/19`, borde 1px, gap 22px; leyenda debajo. Placeholders: "Pantalla: acceso", "Pantalla: datos", "Pantalla: animales", "Pantalla: proyecciones".
5. **Los cuatro módulos** — H2 "LOS CUATRO MÓDULOS" + kicker "03 — Qué hace". Cuatro tarjetas (`minmax(250px,1fr)`) rotuladas "MOD 01"…"MOD 04": **Animales** ("Categorías, cabezas y kilos vivos. La base de cualquier cálculo de consumo."), **Pasturas** ("Superficie y disponibilidad por lote, cargadas con el mínimo de campos posible."), **Suplementos** ("Otros alimentos y su stock, para completar la dieta cuando la pastura no alcanza."), **Proyecciones** ("Gráficos de consumo y disponibilidad en el tiempo. Acá el dato se vuelve decisión.").
6. **Decisiones técnicas** — "04 — Construcción" · H2 "DECISIONES TÉCNICAS QUE SOSTIENEN EL PRODUCTO" a la izquierda; a la derecha cuatro entradas numeradas separadas por reglas de 1px, cada una con el concepto en `<strong>` claro y el resto en `#b4b4b4`: (1) una sola base de código para iOS y Android sobre Expo con builds por EAS; (2) sesión y roles desde el arranque — credenciales en almacenamiento seguro, invitaciones por establecimiento y ruteo por rol; (3) gráficos nativos dibujados en el dispositivo, no imágenes; (4) interfaz pensada para el campo — pocas pantallas, objetivos grandes, formularios cortos, usable con una mano y sin buena señal.
7. **CTA de cierre** — "¿TENÉS UN PRODUCTO EN ESTA ETAPA?" + párrafo + botón primario "ENVIAR CONSULTA →" y secundario "VER SERVICIOS".
8. **Footer**.

> Nota de precisión: los módulos, el stack y los roles de este caso se tomaron del código real de la app (Expo + React Native, pantallas de auth, establecimientos con invitaciones y roles, datos de animales/pasturas/otros alimentos, pantalla de proyecciones con gráficos). Si el caso se actualiza, actualizar contra el repo, no de memoria.

### 4. Estudio (`RossyStudio Estudio.dc.html`)
**Propósito:** quién está detrás, cómo piensa el trabajo, y el anuncio de la línea de Ciberseguridad.

1. **Hero** — kicker "EL ESTUDIO", H1 "UNA / PERSONA, / UN CRITERIO" (tercera línea en `#8a8a8a`). Borde inferior 2px.
2. **Retrato + texto** — dos columnas separadas por borde de 1px, borde inferior 2px. Izquierda: marco `aspect-ratio: 4/5`, ancho `min(300px,100%)`, borde 1px, **con la imagen en blanco y negro** (clase `grayscale` del sistema → `filter: grayscale(1) contrast(1.08)`; toda fotografía del sitio va así). Derecha: una frase destacada `clamp(17px,1.9vw,26px)` peso 500 ("RossyStudio no es una agencia chica: es la forma en que trabajo cuando puedo decidir bien.") más tres párrafos de 16px sobre el modo de trabajo, el remoto y la dirección de especialistas.
3. **Principios** — H2 "CÓMO PIENSO EL TRABAJO" + kicker "Principios". Cuatro filas `64px / 1fr / 1.3fr` separadas por reglas de 1px (la última 2px): 01 "Primero entender, después construir"; 02 "Menos alcance, mejor ejecución"; 03 "Decir lo que pienso"; 04 "Entregar cosas usables" — cada una con su descripción de una línea.
4. **Ciberseguridad** — misma caja que en el home (fondo `#111`, borde 1px), con tag "PRÓXIMA LÍNEA", H3 "CIBERSEGURIDAD", párrafo ("...Quien diseñó la aplicación es quien mejor sabe dónde se rompe."), botón secundario "AVISAME CUANDO ABRA →" que va a Contacto, y el año "2027" en `#454545` alineado al fondo de la celda derecha.
5. **CTA de cierre** — "TRABAJEMOS JUNTOS" + párrafo + botón primario.
6. **Footer**.

### 5. Contacto (`RossyStudio Contacto.dc.html`)
**Propósito:** la conversión. Formulario de consulta.

- El header de esta página **no** lleva el botón "Consultar". El layout usa `min-height:100vh` en columna con el footer empujado por `margin-top:auto`.
- **Hero:** kicker "CONTACTO", H1 "CONTAME / EL PROYECTO" (segunda línea en `#8a8a8a`).
- **Dos columnas** (`minmax(300px,1fr)`, gap 56px, `align-items: start`):
  - **Izquierda — datos.** Párrafo ("Respondo personalmente en menos de 48 horas. Si el proyecto no es para mí, te lo digo derecho y, si puedo, te recomiendo a alguien.") y cuatro filas tabulares separadas por reglas de 1px, cada una con etiqueta uppercase de 10px (ancho mínimo 110px) y valor de 16px peso 600: **Email** → `hola@rossystudio.com` (`mailto:`) — **pendiente de confirmar el definitivo**; **Base** → "Uruguay · 100% remoto"; **Zona horaria** → "GMT−3 · flexible con Europa y EEUU"; **Disponibilidad** → "Tomando proyectos" con el punto de 7px.
  - **Derecha — formulario.** Campos en columna, gap 22px:
    | Campo | Tipo | Requerido | Placeholder |
    | --- | --- | --- | --- |
    | Nombre | texto | sí | "Cómo te llamás" |
    | Email | email | sí | "tu@empresa.com" |
    | Empresa o proyecto | texto | no | "Opcional" |
    | Qué necesitás | chips multi-selección | no | — |
    | Contame un poco | textarea 5 filas | sí | "Qué querés construir, en qué etapa está y para cuándo lo necesitás." |
    Chips (selección múltiple, toggle): "Producto de punta a punta", "App móvil", "Diseño UX", "Dirección técnica", "Ciberseguridad (futuro)".
    Pie del formulario: botón primario "ENVIAR CONSULTA →" y, al lado, la leyenda "RESPUESTA EN 48H" (11px/600/0.14em/uppercase/`#8a8a8a`).
- **Estado enviado:** al enviar, el formulario se reemplaza por un panel (`#111`, borde 1px, padding `44px 38px`) con el kicker "CONSULTA ENVIADA", el H2 "GRACIAS, {primer nombre}" (toma la primera palabra del campo Nombre), el párrafo "Te escribo a la dirección que dejaste en menos de 48 horas. Si es urgente, respondeme el mail directamente." y un botón secundario "ENVIAR OTRA CONSULTA" que vuelve al formulario limpio (los chips se deseleccionan).

## Interactions & Behavior
- **Navegación:** links normales entre las 5 páginas. Rutas sugeridas: `/`, `/servicios`, `/trabajo/etool`, `/estudio`, `/contacto`. La nav marca la página activa en `#ffffff`.
- **Header sticky** en las 4 páginas de contenido (`top: 0`, fondo opaco `#0b0b0b`, `z-index: 20`); en Contacto es estático.
- **Hovers:** solo cambios de fondo/color, sin movimiento ni escalado. No hay animaciones de entrada ni parallax en el diseño — el ritmo lo da la tipografía. Si se agregan transiciones, mantenerlas por debajo de 200ms y solo en `background-color` / `color`.
- **Formulario:** validación nativa de HTML sobre los tres campos requeridos (`required`, `type="email"`). Los chips son estado local, no requeridos. Al enviar, `preventDefault` y cambio a estado enviado. **En producción hay que conectar el envío real** (endpoint propio, Formspree/Resend o similar) y considerar: honeypot o captcha invisible contra spam, estado de carga en el botón, y estado de error con mensaje visible en `#f2f2f2` sobre el panel `#111` si el envío falla. El diseño actual **no** contempla estos dos últimos estados: seguir el mismo patrón del panel de éxito.
- **Marcos de imagen:** en producción son `<img>` con `object-fit: cover`; mantener los `aspect-ratio` (9/19 para capturas de móvil, 4/5 para el retrato) y el borde de 1px. Toda fotografía va en blanco y negro.
- **Responsive:** todo el layout es fluido por `clamp()` y `auto-fit/minmax`, sin media queries. Verificar a 360px, 768px, 1280px y 1920px. Puntos a vigilar en móvil: la fila de metadatos del hero (debe envolver en dos líneas), la nav del header (envuelve; si se prefiere, convertirla en menú hamburguesa — el diseño no lo define, decidirlo con el cliente), y las filas de servicio de 3 columnas (a un ancho chico deben pasar a una sola columna apilada: número, título, descripción).
- **Accesibilidad:** contraste ya verificado (tinta `#f2f2f2` y cuerpo `#b4b4b4` sobre `#0b0b0b` superan 4.5:1; `#8a8a8a` se usa solo en etiquetas cortas). Agregar `:focus-visible` (ver Tokens), `aria-pressed` en los chips, `aria-current="page"` en la nav, `<main>` y jerarquía correcta de headings (un solo `h1` por página), y `lang="es"`.
- **SEO/meta:** títulos por página, descripción, Open Graph con el logotipo negro, `prefers-color-scheme` irrelevante (el sitio es oscuro siempre).

## State Management
Mínimo — el sitio es casi todo estático.
- **Contacto:** `enviado: boolean`, `nombreEnviado: string` (primer nombre para el agradecimiento), `seleccion: string[]` (chips). Transiciones: submit → `enviado = true`; "enviar otra consulta" → `enviado = false`, `seleccion = []`. Más, en producción: `enviando: boolean` y `error: string | null`.
- **Home:** tres valores de configuración (`disponible`, `mostrarCiber`, `anioCiber`) que no cambian en runtime — constantes o CMS, no estado.
- **Sin data fetching** en ninguna página. El único request del sitio es el POST del formulario.

## Assets
- `logo/RS-logotipo-cuadrado.PNG` — marca cuadrada "RS" sobre negro (R blanca, S plata). Fuente: subida por el cliente. Usar como favicon, app icon y OG image.
- `logo/RS-logotipo-horizontal.PNG` — logotipo horizontal "ROSSY STUDIO". **Ojo:** esta versión incluye la bajada "UX · MARKETING · PRODUCTO" con detalles en color cobre; **"marketing" está descartado como servicio y el cobre no pertenece a la paleta**. No usar esta versión tal cual: o se recorta a solo el wordmark, o se usa el lockup en texto que traen los prototipos (brand mark + "ROSSYSTUDIO" en Archivo 800).
- `logo/etool-logo-provisorio.png` — logotipo provisorio de eTool (fondo claro, verdes). Es de la marca del cliente de eTool, no de RossyStudio; si se usa en el caso, va dentro de un marco propio y **no** se le aplica `grayscale`.
- **Faltantes, a pedir al cliente:** capturas reales de la app eTool (4 para la galería del caso + 2 para el adelanto del home, formato vertical de móvil) y un retrato o foto de trabajo para la página Estudio (vertical 4:5, se renderiza en blanco y negro).
- **Tipografía:** Archivo, Google Fonts, pesos 400/500/600/800. Autoalojarla en producción (`next/font` o `@font-face` local) en vez de pegar a Google.
- **Iconos:** el diseño casi no usa iconos — solo flechas "→" como carácter de texto en los botones. Si se necesitan más, el sistema base indica **Lucide**.

## Files
Prototipos incluidos en este bundle (referencias de diseño, no código de producción):
- `RossyStudio Home.dc.html`
- `RossyStudio Servicios.dc.html`
- `RossyStudio Caso eTool.dc.html`
- `RossyStudio Estudio.dc.html`
- `RossyStudio Contacto.dc.html`
- `support.js`, `image-slot.js` — runtime de los prototipos. **No portar.** `image-slot.js` solo existe para que los marcos de imagen acepten archivos arrastrados durante el diseño.
- `_ds/modernist-.../styles.css` — hoja del sistema base Modernist (tokens, reglas de 2px, radio 0, Archivo, clase `.grayscale`). Aporta la estructura; **el color de acento rojo de esa hoja no se usa en este sitio** — la paleta es la de la tabla de Tokens.

Para abrir los prototipos: servir la carpeta con un servidor estático (p. ej. `npx serve .`) y abrir cualquiera de los `.dc.html`; los links entre páginas funcionan.

## Contenido pendiente de confirmar con el cliente
1. Email definitivo (el prototipo usa `hola@rossystudio.com`).
2. Año de apertura de la línea de Ciberseguridad (hoy 2027) y si la sección se publica ya o se oculta.
3. Dominio exacto y si el sitio arranca solo en español o necesita versión en inglés (hoy: solo español).
4. Capturas de eTool y permiso del socio/cliente para publicar el caso con ese nivel de detalle.
5. Datos de la fila de métricas del home ("1", "48h", "E2E") — están definidos como promesa de servicio, confirmar que se quieren sostener por escrito.
