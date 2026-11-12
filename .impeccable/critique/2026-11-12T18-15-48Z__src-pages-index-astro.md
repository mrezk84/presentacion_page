---
target: index
total_score: 23
max_score: 32
na_heuristics: 7,10
p0_count: 0
p1_count: 2
target_identity: "file:/Users/marcosrezk/presentacion_page/src/pages/index.astro"
target_fingerprint: "sha256:5939c248379b6d53d322bd51a01ebd062a0da96cb566ac74c09c74b00e2ccd7e"
target_path: /Users/marcosrezk/presentacion_page/src/pages/index.astro
timestamp: 2026-11-12T18-15-48Z
slug: src-pages-index-astro
---
Method: dual-agent (A: design review · B: detector + browser)

## Heurísticas (23/32, Bueno; 7 y 10 n/a)
1 Visibilidad 3 · 2 Mundo real 3 · 3 Control 3 · 4 Consistencia 3 · 5 Prevención 3 · 6 Reconocimiento 2 · 7 n/a · 8 Minimalismo 2 · 9 Recuperación 4 · 10 n/a

## Especificidad
Expediente autoral de punta a punta; 06 Servicios hereda el sistema (grilla, pino, sin bermellón) pero es el tramo menos autoral: paquetes + proceso + condiciones es la estructura canónica de página de freelancer. Detector: 9 advisory, misma base, 0 nuevos. Overlay: 9 (1280) / 10 (390); único efecto de 06: icon-tile-stack ×3 en los paquetes. Medidas: 10.105 px a 1280 (11,2 pantallas), 18.093 px a 390 (21,4 pantallas); Servicios 3.707 px en móvil (4,4 pantallas, 20,5 % de la página; antes de 06 la página medía ~14.390 px). Contraste mínimo en 06: 4,80:1 (label 11 px sobre sunk). Sin scroll horizontal. Ningún oculto recibe foco. Sección "01 En números" sin heading ni aria-label.

## Priority issues
- [P1] Servicios se interpone entre el reclutador y el formulario (index.astro:404–412; 3.707 px en móvil). Mover <ServicesSection /> después de #contacto o dar escape "¿Venís por un puesto? Ir al contacto". /impeccable layout
- [P1] ?consulta=proyecto aterriza en el hero del puesto (index.astro:872 solo hace setType); Dana queda a 12.000 px de los precios. Scroll a #servicios o #contacto respetando reduced-motion; H2 "Si llegaste hasta acá, hablemos." presupone scroll. /impeccable onboard
- [P2] Tres tratamientos de precio: display 3xl en paquetes (ServicesSection.astro:67), label mono 11 px de tres líneas para mantenimiento (:99), nada en el select. /impeccable typeset
- [P2] Redundancia acumulada: "24 h" ×4 en main, "17 años" ×5, "Plazo a convenir" ×3, "Cómo trabajo" 5 celdas para 5 frases; "17 años del lado de la operación" en maintenance.proof. /impeccable distill
- [P3] Líneas de prueba en jerga (Astro, HMAC, PCI-DSS) para público no técnico (services.ts:61,77,95). /impeccable clarify

## Persona red flags
Reclutadora: no se confunde en el fold; si clica "Servicios" ve precios y nada sobre disponibilidad en paralelo; nav de 8 destinos. Dana: aterriza en hero de reclutador; "Plazo a convenir" no responde "¿llega para la temporada?"; pasarela sin nombre; select empieza en "Todavía no sé" (bien). Casey: 21 pantallas, 3 diagramas con scroll lateral, "Cómo trabajo" en 5 celdas altas. Sam: ninguna section con aria-labelledby; cambio de tipo por data-inquiry sin anuncio en #form-status; ~60 focos antes del formulario; 2 links de prueba de 12 px a 390 (284×35) y 3 links del pie de 20 px de alto.

## Minor
Fold 390: solo Nivel y Ubicación arriba del pliegue (preexistente). description del Layout cierra con servicios. Dos numeraciones en 06 ("Paquete 01" tinta vs "01" pino). Prueba de Landing sin href queda gris frente a las otras dos en menta. "quince años" en Credenciales (CredentialsSection.astro:156) vs "17" en el resto. Link inline de prueba 12 px como único enlace en tarjeta.

## Questions
¿Qué conclusión debe sacar un hiring manager de "disponible ya" + "desde USD 2.000"? ¿06 necesita 3.707 px o 3 precios, 5 condiciones y un botón, con el detalle en /servicios? ¿Cuál fue el plazo real de este sitio, para reemplazar "Plazo a convenir"?
