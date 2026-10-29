---
target: index
total_score: 24
max_score: 32
na_heuristics: 7,10
p0_count: 0
p1_count: 2
target_identity: "file:/Users/marcosrezk/presentacion_page/src/pages/index.astro"
target_fingerprint: "sha256:6ad72e12460f6857e3ee2a74510cab7408ebf5d28601b201e73c537348f84983"
target_path: /Users/marcosrezk/presentacion_page/src/pages/index.astro
timestamp: 2026-10-29T20-37-13Z
slug: src-pages-index-astro
---
Method: dual-agent (A: design review · B: detector + browser)

## Heurísticas (24/32, Bueno; 7 y 10 n/a)
1 Visibilidad 3 · 2 Mundo real 3 · 3 Control 3 · 4 Consistencia 3 · 5 Prevención 3 · 6 Reconocimiento 3 · 7 n/a · 8 Minimalismo 2 · 9 Recuperación 4 · 10 n/a

## Especificidad
Expediente cumplido de punta a punta; lo genérico es la arquitectura de información de dev portfolio, pensada para tech lead y no para RR.HH. Detector: 9 advisory, todos falsos positivos/intencionales. Overlay: 6 (1280) / 7 (390), antes 20/19. Evidencia de navegador: #scroll-to-top oculto recibe Tab (sin inert); a 320 px "Hablemos del puesto →" del pie queda con 28 px reales porque el ::before de "Descargar CV (PDF)" lo tapa.

## Priority issues
- [P1] Orden para el lector equivocado: Trayectoria (o resumen) antes de Proyectos; fusionar Qué resuelvo + Stack; plegar arquitectura en móvil. /impeccable distill + /impeccable layout
- [P1] Titular "Full Stack .NET + React / 17 años en tecnología." se lee como 17 años de full stack; no hay seniority declarado. /impeccable clarify (frase del usuario)
- [P2] sanitize() reescribe el mensaje: borra <>, /on\w+=/ corta palabras ("condition=" ), trunca a 5000 sin aviso (index.astro:692-696). /impeccable harden (+ foco de scroll-to-top, tap de pie a 320)
- [P2] Bermellón y "Disponible" gastados: dos puntos pulsantes en el pliegue, "disponible" x5. /impeccable quieter
- [P3] Credenciales: curso Udemy 19 h como "Certificación profesional" encabeza sobre ORT. /impeccable clarify

## Persona red flags
Reclutadora: sin seniority, titular inflable, curso primero, CV solo descarga. Jordan: "8→5ˢ" como exponente, "JVM y Go" jerga, "Qué resuelvo" opaco. Riley: texto reescrito/cortado, botón enviando marrón en oscuro, Tab en scroll-to-top invisible. Casey: header solo "MR", Inglés/Respuesta bajo el pliegue, tap 28 px a 320.

## Minor
Etiquetas apretadas en diagrama 911; línea larga vacía en SEMM; "Proyectos propios" sin número; foto clara en oscuro; modal de éxito sin siguiente paso. Inglés fuera del contacto: decisión del usuario (PR #27). Diagramas: mantener scroll lateral; mover el aviso "Deslizá" arriba.

## Questions
Seniority visible en la banda de números; 17 años como diferencial vs orden de secciones; qué se pierde sin 04 y 05.
