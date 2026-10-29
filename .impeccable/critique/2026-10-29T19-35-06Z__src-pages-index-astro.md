---
target: index
total_score: 20
max_score: 32
na_heuristics: 7,10
p0_count: 0
p1_count: 1
target_identity: "file:/Users/marcosrezk/presentacion_page/src/pages/index.astro"
target_fingerprint: "sha256:a6c22b8fd05132c13910712e6727984efc312a4bc0d4a6b4a818728e7dfe32f3"
target_path: /Users/marcosrezk/presentacion_page/src/pages/index.astro
timestamp: 2026-10-29T19-35-06Z
slug: src-pages-index-astro
closed: true
---
Method: dual-agent (A: design review · B: detector + browser)

## Heurísticas (20/32, Aceptable; 7 y 10 n/a)
1 Visibilidad 2 · 2 Mundo real 3 · 3 Control 3 · 4 Consistencia 2 · 5 Prevención 3 · 6 Reconocimiento 3 · 7 n/a · 8 Minimalismo 2 · 9 Recuperación 2 · 10 n/a

## Especificidad
Hero y diagramas a medida; segunda mitad intercambiable (cabeceras clonadas en 02/04/06/07, cinco grillas de celdas seguidas). Detector: 10 advisory de base; real solo --ease-spring con rebote en el modal (global.css:50, usado en :704 con transition: all). Overlay: 20 (1280) / 19 (390); reales 11 stragglers y 3 headings desbalanceados.

## Priority issues
- [P1] Modal de error con ícono ✓ fijo (index.astro:632) y sin salida accionable: ícono de alerta, botones WhatsApp (con mensaje) y Copiar email, errores de Formspree traducidos, quitar --ease-spring. /impeccable harden
- [P2] Redundancia hero / 04 / 05: stack 5 veces, "sumando Java/Go" 5 veces; fusionar 04 y 05, sacar stack de nota "4+" y tarjeta. /impeccable distill
- [P2] Monotonía estructural de la segunda mitad: romper patrón (Credenciales como tabla densa, Contacto con H2 a ancho completo, escala de H2 por jerarquía). /impeccable layout
- [P2] Foto de perfil 288px mostrada a ~380px, selfie con fondo quemado: retrato ≥800px o foto carnet 160-200px. /impeccable polish (asset del usuario)
- [P3] 11 stragglers y 3 headings desbalanceados: text-wrap pretty en párrafos, balance en H2/H3. /impeccable typeset

## Persona red flags
Reclutadora: inglés básico-intermedio 3 veces; seniority no explícito (4+ vs 17 años). Jordan: "Qué resuelvo" opaco; 01 no está en el nav. Riley: 500 muestra ✓; 422 en inglés; nombre con paréntesis bloqueado; 4.º envío en un minuto da error. Casey: tarjeta con foto ocupa una pantalla; nota "4+" en 5 líneas mono; enlaces de 17-20px de alto; logo 36px.

## Minor
#about vs "Qué resuelvo"; "Sin copia digital" x3; íconos fantasma chocan con tags; jerarquía formulario vs canales sin definir. Diagramas verticales en móvil: no recomendado (scroll lateral ya resuelve legibilidad).

## Questions
Caso del equipo de 13 técnicos como historia; qué se pierde sin 04 y 05; sello "Disponible" como sello real de expediente.
