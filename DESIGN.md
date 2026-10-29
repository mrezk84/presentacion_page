---
name: Marcos Rezk · Portfolio
description: Expediente técnico de un Full Stack Developer con 15+ años en producción; papel hueso, tinta, pino estructural y bermellón para la acción.
colors:
  paper: "#f4f1ea"
  surface: "#fffdf8"
  surface-sunk: "#ebe6db"
  line: "#ddd6c8"
  line-strong: "#c6bdaa"
  ink: "#111716"
  ink-soft: "#4c5754"
  ink-faint: "#5a6663"
  pine: "#0b5d4e"
  pine-deep: "#073e34"
  pine-bright: "#0f7a64"
  pine-wash: "#0b5d4e14"
  signal: "#b93b26"
  signal-bright: "#c4432b"
  signal-wash: "#b93b2614"
  on-pine: "#f4f1ea"
  on-signal: "#fffdf8"
  night-paper: "#0b1110"
  night-surface: "#131b19"
  night-ink: "#ece7dc"
  night-pine: "#4fd6ae"
  night-signal: "#ff8163"
typography:
  display:
    fontFamily: "Bricolage Grotesque Variable, Georgia, serif"
    fontSize: "clamp(2rem, 4.2vw, 3.75rem)"
    fontWeight: 700
    lineHeight: 0.94
    letterSpacing: "-0.035em"
  headline:
    fontFamily: "Bricolage Grotesque Variable, Georgia, serif"
    fontSize: "clamp(2rem, 4.5vw, 3.25rem)"
    fontWeight: 700
    lineHeight: 0.94
    letterSpacing: "-0.035em"
  stat:
    fontFamily: "Bricolage Grotesque Variable, Georgia, serif"
    fontSize: "3.75rem"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "-0.025em"
  title:
    fontFamily: "Bricolage Grotesque Variable, Georgia, serif"
    fontSize: "1.5rem"
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: "-0.02em"
  body-lead:
    fontFamily: "IBM Plex Sans Variable, system-ui, -apple-system, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.625
  body:
    fontFamily: "IBM Plex Sans Variable, system-ui, -apple-system, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 400
    lineHeight: 1.625
  button:
    fontFamily: "IBM Plex Sans Variable, system-ui, -apple-system, sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 600
    lineHeight: 1
  label:
    fontFamily: "IBM Plex Mono, ui-monospace, SFMono-Regular, monospace"
    fontSize: "0.6875rem"
    fontWeight: 500
    letterSpacing: "0.16em"
rounded:
  none: "0px"
  focus: "2px"
  full: "999px"
spacing:
  field-y: "0.8125rem"
  field-x: "1rem"
  btn-y: "0.9375rem"
  btn-x: "1.75rem"
  cell: "1.75rem"
  gutter: "1.5rem"
  section: "6rem"
components:
  button-signal:
    backgroundColor: "{colors.signal}"
    textColor: "{colors.on-signal}"
    typography: "{typography.button}"
    rounded: "{rounded.none}"
    padding: "{spacing.btn-y} {spacing.btn-x}"
  button-signal-hover:
    backgroundColor: "{colors.signal-bright}"
  button-outline:
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.none}"
    padding: "{spacing.btn-y} {spacing.btn-x}"
  button-pine:
    backgroundColor: "{colors.pine}"
    textColor: "{colors.on-pine}"
    typography: "{typography.button}"
    rounded: "{rounded.none}"
    padding: "{spacing.btn-y} {spacing.btn-x}"
  button-pine-hover:
    backgroundColor: "{colors.pine-bright}"
  card:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.none}"
    padding: "{spacing.cell}"
  bento-cell:
    backgroundColor: "{colors.paper}"
    rounded: "{rounded.none}"
    padding: "{spacing.cell}"
  field:
    backgroundColor: "{colors.surface-sunk}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "{spacing.field-y} {spacing.field-x}"
  tag-pine:
    backgroundColor: "{colors.pine-wash}"
    textColor: "{colors.pine}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
  label-section:
    textColor: "{colors.pine}"
    typography: "{typography.label}"
---

# Design System: Marcos Rezk · Portfolio

## Overview

**Creative North Star: "El Expediente Técnico"**

La página se presenta como un dossier impreso de ingeniería, no como una landing. El fondo es papel hueso con un grano casi imperceptible, el texto va en tinta verde-negra y cada sección se abre con un rótulo mono numerado y una línea de cota. La grilla de plano técnico asoma detrás del hero. Las tarjetas muestran marcas de registro en las esquinas al pasar el cursor, como las de una prueba de imprenta. Todo dice "esto se diseñó y se midió", que es justo lo que el contenido afirma del trabajo de Marcos.

El color tiene dos voces con funciones separadas. El **pino** es la estructura: rótulos de sección, enlaces, cifras, la línea de tiempo y el borde en hover. El **bermellón** es la señal: la acción principal, el estado "disponible", el foco y los errores. Los componentes son táctiles y directos: bloques de esquinas rectas que responden al cursor elevándose, cambiando de borde o revelando sus marcas. No hay radios en ningún lugar salvo los puntos de estado.

La densidad es de documento: cifras grandes en Bricolage Grotesque apretado, texto en IBM Plex Sans con medida de 62ch y metadatos en IBM Plex Mono de 11px en versalitas espaciadas. El modo oscuro no se agrega por encima: cada color es un token semántico que se invierte con `.dark`, y el marcado no lleva variantes `dark:`.

**Key Characteristics:**
- Papel, tinta y dos acentos con roles estrictos: pino = estructura, bermellón = acción.
- Esquinas rectas en todo: botones, tarjetas, campos, tags y modal.
- Micro-rótulos mono numerados ("01 / En números") como tejido conectivo.
- Grano de papel y grilla técnica como únicas texturas.
- Hover táctil: elevación de 2–3px, borde pino y marcas de registro.
- Tokens semánticos `--c-*` que se invierten en oscuro; nada de `dark:` en el marcado.

## Colors

Papel cálido y tinta fría, con un verde pino que ordena y un bermellón que llama a actuar.

### Primary
- **Pino** (pine): el color estructural. Rótulos de sección, enlaces (`link-draw`), cifras del bento, la línea de tiempo, el borde de las tarjetas en hover, la selección de texto y los tags de tecnología.
- **Pino Profundo / Pino Vivo** (pine-deep, pine-bright): pino-deep para texto enfático sobre lavados, pine-bright para el hover del botón pino.
- **Lavado de Pino** (pine-wash): fondo de tags y halo de foco de los campos.

### Secondary
- **Bermellón Señal** (signal): reservado a la acción y al estado vivo. Botón principal, punto "disponible" pulsante, nodo actual de la línea de tiempo, anillo de foco y estado de error en campos.
- **Bermellón Vivo** (signal-bright): hover del botón señal. Un paso más claro que la señal, sin bajar de 4,5:1 bajo el texto del botón.
- **Lavado de Señal** (signal-wash): halo del nodo actual y del campo inválido.

### Neutral
- **Papel** (paper): fondo de página y de las celdas del bento.
- **Superficie** (surface): tarjetas, campos en foco y celdas del bento en hover.
- **Papel Hundido** (surface-sunk): pozos, campos en reposo, banda de métricas y pista del scrollbar.
- **Línea / Línea Firme** (line, line-strong): filetes de 1px, separadores de grilla y borde del botón outline.
- **Tinta** (ink): titulares y texto principal.
- **Tinta Suave** (ink-soft): texto secundario y párrafos de apoyo.
- **Tinta Tenue** (ink-faint): metadatos y rótulos. Está calibrada a ≥4.5:1 sobre papel, superficie y hundido, porque vive a 11px.
- **Modo oscuro:** papel `night-paper`, superficie `night-surface`, tinta `night-ink`. El pino se vuelve un menta luminoso (`night-pine`) y la señal un coral (`night-signal`). El texto sobre pino y sobre señal se oscurece.

### Named Rules
**La Regla de las Dos Voces.** El pino ordena y el bermellón llama a actuar; nunca intercambian roles. Si algo no es una acción, un estado vivo o un error, no es bermellón. El énfasis que no es acción (el tramo clave de un diagrama, una nota técnica) va en tinta plena o en papel hundido, no en bermellón.

**La Regla del Token Semántico.** Todo color sale de `--c-*` mediante las utilidades `bg-paper`, `text-ink`, `border-line`, etc. Un hex suelto o una variante `dark:` en el marcado es un error.

## Typography

**Display Font:** Bricolage Grotesque Variable (con Georgia, serif)
**Body Font:** IBM Plex Sans Variable (con system-ui, -apple-system, sans-serif)
**Label/Mono Font:** IBM Plex Mono (con ui-monospace, SFMono-Regular, monospace)

**Character:** una grotesca con carácter, de ópticas variables y apretada en tamaños grandes, sobre la familia Plex, de raíz industrial. La display da la voz; Plex Sans, la lectura técnica; Plex Mono, el registro.

Todas las fuentes se alojan en el propio sitio con `@fontsource`, y las de la primera pantalla se precargan.

### Hierarchy
- **Display** (700, clamp(2rem, 4.2vw, 3.75rem), line-height 0.94, -0.035em): solo el titular del hero, puesto + dato duro en dos líneas ("Full Stack .NET + React" / "17 años en tecnología." en pino). Cada línea debe entrar entera en desktop: si el texto crece, baja el tamaño antes que dejar una palabra sola.
- **Headline** (700, clamp(2rem, 4.5vw, 3.25rem), 0.94, -0.035em): títulos de sección. El contacto sube hasta 4rem.
- **Stat** (700, 3rem–3.75rem, 1, ajustado): cifras del bento en pino, con la unidad en un tamaño menor alineada arriba.
- **Title** (600, 1.25–1.5rem, -0.02em): títulos de capacidad, de puesto y de proyecto. Todos los `h1`–`h4` heredan la display a 600.
- **Body Lead** (400, 1.125–1.25rem, 1.625): párrafo del hero y entradillas de sección, limitado a `.measure` (62ch).
- **Body** (400, 0.875rem, 1.625): descripciones en tarjetas, viñetas de experiencia y etiquetas de métricas.
- **Label** (500, 0.6875rem, 0.16em, mayúsculas): rótulos de sección, períodos, unidades, notas de métricas y metadatos. La variante `label-file` quita las mayúsculas para correos y rutas.

### Named Rules
**La Regla del Rótulo.** Toda pieza de metadato (sección, período, unidad, ubicación, estado) va en el label mono. No se inventan tamaños intermedios de "texto chico" en Plex Sans para ese rol.

**La Regla de lo Literal.** Los correos, las URLs y los handles nunca van en versalitas: se escriben como se escriben (`label-file`).

## Layout

Una columna de secciones apiladas en un contenedor `max-w-6xl` (72rem) con un gutter de 1.5rem. Las secciones tienen entre 5 y 7rem de padding vertical (`py-20 sm:py-24`) y se separan con un filete superior `border-line`, no con cambios de fondo. La excepción es la banda de métricas, en papel hundido con filetes arriba y abajo.

- **Rótulo de sección:** número mono + nombre + línea de cota que se desvanece (`.eyebrow`), siempre alineado a la izquierda y a 3rem del contenido.
- **Encabezados asimétricos:** en desktop, el título ocupa 7 columnas y la entradilla 5, alineada abajo (`lg:col-span-7` / `lg:col-span-5`).
- **Bento de grilla con filete:** las celdas se separan con `gap-px` sobre un fondo `bg-line`, de modo que el filete de 1px es la propia grilla. Va en 2 columnas en mobile y 4 en `lg`.
- **Hero:** el claim y los datos de disponibilidad (`<dl>` de ubicación, modalidad, zona horaria y respuesta) van a la izquierda; el retrato, a la derecha. Debajo sigue directamente la banda de métricas.
- **Breakpoints:** los de Tailwind (`sm` 640, `md` 768, `lg` 1024). La navegación de escritorio aparece en `lg`.

## Elevation & Depth

El sistema es plano en reposo y se eleva al interactuar. La profundidad base la dan los filetes y el papel hundido. Las sombras son cálidas, nunca gris neutro (tinta `rgb(17 23 22)`), y en oscuro pasan a negro con más opacidad. La textura (grano, grilla) da materialidad sin sombra.

### Shadow Vocabulary
- **sm** (`0 1px 2px rgb(17 23 22 / 0.05)`): contacto mínimo.
- **md** (`0 2px 4px rgb(17 23 22 / 0.04), 0 8px 20px -8px rgb(17 23 22 / 0.1)`): botón señal en reposo y botón pino en hover.
- **lg** (`0 4px 8px rgb(17 23 22 / 0.05), 0 24px 48px -20px rgb(17 23 22 / 0.18)`): tarjeta y botón señal en hover.
- **Header con scroll:** `backdrop-filter: blur(14px) saturate(140%)` sobre papel traslúcido, con filete inferior.

### Named Rules
**La Regla del Bloque que Responde.** Una superficie interactiva se eleva entre 2 y 3px, cambia su borde a pino y sube a la sombra `lg`, siempre con `--ease-out-expo`. Lo que no es interactivo no se eleva.

## Shapes

Esquinas rectas sin excepción en botones, tarjetas, campos, tags, celdas, modal y logotipo "MR". El único redondeo es el de los puntos (estado pulsante, nodos de la línea de tiempo) y la píldora del scrollbar. El anillo de foco lleva 2px de radio para no cortar el outline. Los bordes son siempre de 1px. Las marcas de registro (`.ticked`) son escuadras de 9px y 2px de grosor, en pino, en las esquinas superior izquierda e inferior derecha. Los íconos son de trazo, y en el bento aparece un glifo fantasma enorme al 4.5% detrás de la cifra.

## Components

### Buttons
Táctiles y directos: bloques rectos que suben al cursor.
- **Shape:** esquinas rectas (0px), padding 0.9375rem × 1.75rem, Plex Sans 600 a 0.9375rem, ícono con 0.625rem de gap.
- **Señal (primario):** bermellón con texto claro y sombra `md`. En hover pasa a bermellón vivo, sube 2px y toma la sombra `lg`. Es la única acción principal por vista: contacto o envío.
- **Outline (secundario):** transparente con borde `line-strong` y texto tinta. En hover, borde y texto pasan a pino y sube 2px. Se usa para descargar el CV y otras acciones de apoyo.
- **Pino:** relleno pino para acciones estructurales que no son la conversión principal.
- **Fantasma (terciario):** sin relleno ni borde, texto `ink-soft` que pasa a tinta en hover. Es la salida ("Cerrar") cuando arriba hay una acción más fuerte, como en el modal de error.
- **Press / Focus:** al presionar escala a 0.985. El foco es un outline bermellón de 2px con 3px de offset.

### Tags
- **Tag pino:** texto pino sobre lavado de pino, con un borde de pino al 28%, en mono. Se usa para el stack en proyectos y capacidades.
- **Estado "Actual":** label bermellón con borde de 1px bermellón.

### Cards / Containers
- **Corner Style:** recto.
- **Background:** superficie sobre papel.
- **Shadow Strategy:** sin sombra en reposo; en hover, sombra `lg`, borde pino y elevación de 3px.
- **Border:** 1px `line`.
- **Signature:** marcas de registro `.ticked`, que aparecen en hover.

### Bento cell
Es la celda de métrica o capacidad dentro de la grilla con filete: papel que pasa a superficie en hover, la cifra en display pino, el rótulo en Plex Sans y la nota en label. El glifo fantasma en la esquina inferior derecha crece y rota −4° en hover.

### Inputs / Fields
- **Style:** fondo papel hundido, borde 1px `line`, esquinas rectas, padding 0.8125rem × 1rem, Plex Sans a 0.9375rem. El placeholder va en tinta tenue.
- **Focus:** el fondo pasa a superficie, el borde a pino y aparece un halo de 3px de lavado de pino.
- **Valid / Invalid:** el válido lleva borde pino. El inválido lleva borde bermellón con halo de lavado de señal y un mensaje bermellón de 0.75rem debajo.

### Navigation
- Header fijo y transparente arriba. Con scroll se vuelve papel traslúcido con blur y filete inferior.
- El logotipo es un cuadrado de 2.25rem con borde `line-strong` y "MR" en mono pino; en hover se rellena de pino.
- Junto al logo va el nombre en display 700 y el rol en label.
- Los enlaces van en Plex Sans 500 a 0.875rem, en tinta suave, y pasan a pino en hover. Un separador vertical de 1px los divide del tema y las redes.

### Línea de tiempo (Signature)
Un eje vertical de 1px que se desvanece de pino a línea. Cada puesto tiene un nodo de 11px en papel con borde `line-strong`; el puesto actual lleva un nodo bermellón con halo de lavado de señal. El período va en label, el título en display 600 y las viñetas en body.

## Do's and Don'ts

### Do:
- **Do** abrir cada sección con el `.eyebrow`: label pino numerado ("05 / Stack") y la línea de cota.
- **Do** usar solo utilidades semánticas (`bg-paper`, `bg-surface`, `bg-sunk`, `text-ink`, `text-ink-soft`, `border-line`, `text-pine`, `bg-signal`).
- **Do** mantener las esquinas rectas en todo componente nuevo.
- **Do** hacer que lo interactivo responda con elevación de 2–3px, borde pino y `--ease-out-expo`.
- **Do** usar el label mono para todo metadato, y `label-file` para correos y URLs.
- **Do** dejar el contenido visible si fallan las animaciones (`.reveal` tiene fallback sin JS y respeta `prefers-reduced-motion`).

### Don't:
- **Don't** usar bermellón para decorar, titular o resaltar algo que no sea una acción, un estado vivo o un error.
- **Don't** agregar `border-radius` a botones, tarjetas, campos o tags.
- **Don't** escribir variantes `dark:` ni hex sueltos en el marcado.
- **Don't** usar sombras gris neutro: la sombra se tiñe con la tinta.
- **Don't** separar secciones con fondos de colores: se separan con filetes. El papel hundido queda solo para la banda de métricas y los pozos.
- **Don't** cargar fuentes desde CDNs externos: todo se aloja en el sitio.
