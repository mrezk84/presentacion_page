# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Primary: reclutadores, equipos de RR.HH. y hiring managers que evalúan a Marcos Rezk para un puesto en relación de dependencia, tanto en Uruguay como en remoto para empresas de LATAM y EE.UU. Llegan desde LinkedIn, una postulación o el CV, con poco tiempo, y filtran rápido: rol y stack, experiencia real, disponibilidad, modalidad, zona horaria e inglés. Después deciden si contactan o descargan el CV.

Secundario: perfiles técnicos (tech leads) que, en una segunda instancia, revisan los casos de proyecto y los diagramas de arquitectura. El perfil de GitHub queda enlazado en el header y el pie, pero la página no lista repositorios: los públicos son ejercicios de curso y restaban frente a los casos reales.

No es un objetivo: la captación de clientes freelance.

## Product Purpose

Portfolio de una sola página que presenta a Marcos Rezk como Full Stack Developer disponible de inmediato. El éxito es que un reclutador responda sus preguntas de filtro en los primeros segundos y pase a contactarlo (formulario, email, WhatsApp, LinkedIn) o a descargar el CV.

## Positioning

Más de 15 años sosteniendo software en producción dentro de SONDA Uruguay (Manager 2009–2018, Supervisor de Mesa de Ayuda en el proyecto ANCAP 2018–2022) y desarrollo full stack desde mayo de 2022. Viene "del otro lado de la mesa de soporte": entiende la operación, el usuario intensivo y lo que pasa cuando un sistema falla. Lo prueba la experiencia en sistemas de misión crítica (Ministerio del Interior, Centro de Emergencias 911, SEMM). El mensaje se reposicionó (PR #5) para no encasillarlo en el sector público.

## Operating Context

- Se lee en el teléfono (desde LinkedIn) y en escritorio (durante la revisión de una postulación).
- Acompaña al CV en PDF (`public/Marcos_Rezk_CV.pdf`), que se descarga desde la página.
- Mercado: Uruguay y remoto (UTC−3, con horario compartido con LATAM y EE.UU.). El contenido está en español.

## Capabilities and Constraints

- Sitio estático en Astro 7 + Tailwind CSS 4, con fuentes alojadas en el propio sitio (`@fontsource`). No usa Google Fonts.
- Deploy dual: GitHub Pages (`/presentacion_page`, sitio real: https://mrezk84.github.io/presentacion_page/) y Vercel (`/`). Las rutas de assets dependen de `basePath`.
- Formulario de contacto activo vía Formspree (ID público `xdengrob`, con override `VITE_FORMSPREE_ENDPOINT`). Si no hay ID, cae a `mailto:`.
- Los proyectos incluyen diagramas de arquitectura (`ProjectDiagram.astro`).
- Modo oscuro, skip link, sitemap y JSON-LD.
- Flujo de trabajo: los cambios entran por PR a `main`, y el workflow publica en GitHub Pages.
- Decisión abierta: la voz. El sitio usa voseo rioplatense desde el PR #5 ("Contame", "Escribime"), pero en una sesión anterior se eligió usted sobre el sitio viejo. Hay que confirmarla antes de reescribir copy.

## Evidence on Hand

Confirmado como real y defendible en entrevista:
- Centro de Emergencias 911: la indexación de SQL Server, medida en producción, bajó el tiempo de respuesta de 8 a 5 segundos. Esta cifra reemplaza al antiguo "40%", que no debe volver a usarse.
- Mesa de ayuda del proyecto ANCAP: equipo de 13 técnicos y reducción del 25% en los tiempos de resolución.
- Proyectos nombrables públicamente: Sistema de Denuncias (Ministerio del Interior, 2024), Centro de Emergencias 911 (Ministerio del Interior, 2023), Gestión de Eventos SEMM (2023). También SIVVE, en el Ministerio del Interior.
- Disponible para incorporarse de inmediato. Su etapa en SONDA como desarrollador terminó en julio de 2026.
- Modalidad: remoto, híbrido o presencial.
- Respuesta a contactos en menos de 24 h hábiles.
- Formación: Analista Programador, Universidad ORT Uruguay (2024; título en `public/titulo.png`); Desarrollo Mobile Android, Instituto BIOS (2016); Técnico en Hardware y Software, IAC Computación (2003).
- Certificación Agile Frameworks: Scrum & Kanban (2024; `public/UC-…pdf`).
- Idiomas: español nativo, inglés intermedio-avanzado (documentación técnica y reuniones).
- Foto de perfil: `src/assets/perfil.jpg`.

Ausencias que no se deben inventar:
- No hay testimonios reales.
- No hay clientes ni cifras más allá de los listados arriba.

## Product Principles

1. **Las preguntas de filtro, respondidas arriba.** Rol, stack, disponibilidad, modalidad, zona horaria y contacto se ven sin hacer scroll.
2. **La trayectoria es el diferencial.** Los 15+ años en operación y soporte se presentan como un activo, no como un preámbulo de "dev desde 2022".
3. **Solo hechos medidos.** Cada cifra tiene que poder sostenerse en una entrevista. Se prefieren las medidas reales (segundos, personas) a los porcentajes redondos.
4. **Hablarle a quien contrata.** Los CTA y el copy apuntan a un puesto, no a un "proyecto" de cliente.
5. **El CV y el contacto nunca están a más de un clic.**

## Accessibility & Inclusion

Mantener navegación por teclado, skip link, foco visible, modo oscuro y respeto de `prefers-reduced-motion`. No se estableció un estándar formal más allá de eso.
