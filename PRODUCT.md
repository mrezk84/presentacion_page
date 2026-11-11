# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Primary: reclutadores, equipos de RR.HH. y hiring managers que evalúan a Marcos Rezk para un puesto en relación de dependencia, tanto en Uruguay como en remoto para empresas de LATAM y EE.UU. Llegan desde LinkedIn, una postulación o el CV, con poco tiempo, y filtran rápido: rol y stack, experiencia real, disponibilidad, modalidad, zona horaria e inglés. Después deciden si contactan o descargan el CV.

Secundario: personas y pequeños negocios que tienen un producto o un servicio y necesitan una web para venderlo: una landing, una tienda con cobros, un sistema a medida o el mantenimiento de un sitio que ya existe. Llegan por un link directo (`?consulta=proyecto`), por LinkedIn o por recomendación; no son el público del hero. Quieren saber qué se ofrece, cuánto cuesta como mínimo y cómo se trabaja, y después escriben.

Terciario: perfiles técnicos (tech leads) que, en una segunda instancia, revisan los casos de proyecto y los diagramas de arquitectura. El perfil de GitHub queda enlazado en el header y el pie, pero la página no lista repositorios: los públicos son ejercicios de curso y restaban frente a los casos reales.

La captación de clientes es un objetivo secundario y acotado: no compite con el puesto. La oferta de servicios no cambia el hero, el CTA principal ni el CV.

## Product Purpose

Portfolio de una sola página que presenta a Marcos Rezk como Full Stack Developer disponible de inmediato. El éxito es que un reclutador responda sus preguntas de filtro en los primeros segundos y pase a contactarlo (formulario, email, WhatsApp, LinkedIn) o a descargar el CV.

Segunda medida de éxito, acotada: una persona con un producto entiende qué servicios se ofrecen y el precio de arranque de cada paquete, y escribe eligiendo "Un proyecto web" en el formulario.

## Positioning

17 años de trayectoria en tecnología dentro de SONDA Uruguay (Coordinación y Gestión de Proyectos 2009–2018, Supervisor de Mesa de Ayuda en el proyecto ANCAP 2018–2022) y desarrollo full stack desde mayo de 2022. Viene "del otro lado de la mesa de soporte": entiende la operación, el usuario intensivo y lo que pasa cuando un sistema falla. Lo prueba la experiencia en sistemas de misión crítica (Ministerio del Interior, Centro de Emergencias 911, SEMM). El mensaje se reposicionó (PR #5) para no encasillarlo en el sector público.

## Operating Context

- Se lee en el teléfono (desde LinkedIn) y en escritorio (durante la revisión de una postulación).
- Acompaña al CV en PDF (`public/Marcos_Rezk_CV.pdf`, versión 2026), que se descarga desde el header, el menú móvil, el hero, el contacto y el pie. El sitio y el CV deben decir lo mismo: si cambia uno, se revisa el otro. El CV es solo para reclutadores y no incluye servicios, a propósito.
- Mercado: Uruguay y remoto (UTC−3, con horario compartido con LATAM y EE.UU.). El contenido está en español.

## Capabilities and Constraints

- Sitio estático en Astro 7 + Tailwind CSS 4, con fuentes alojadas en el propio sitio (`@fontsource`). No usa Google Fonts.
- Deploy dual: GitHub Pages (`/presentacion_page`, sitio real: https://mrezk84.github.io/presentacion_page/) y Vercel (`/`). Las rutas de assets dependen de `basePath`.
- Formulario de contacto activo vía Formspree (ID público `xdengrob`, con override `VITE_FORMSPREE_ENDPOINT`). Si no hay ID, cae a `mailto:`.
- Los proyectos incluyen diagramas de arquitectura (`ProjectDiagram.astro`).
- Modo oscuro, skip link, sitemap y JSON-LD.
- Flujo de trabajo: los cambios entran por PR a `main`, y el workflow publica en GitHub Pages.
- Voz: voseo rioplatense (confirmado).

## Evidence on Hand

Confirmado como real y defendible en entrevista:
- Centro de Emergencias 911: la indexación de SQL Server, medida en producción, bajó el tiempo de respuesta de 8 a 5 segundos. Esta cifra reemplaza al antiguo "40%", que no debe volver a usarse (ya corregido en el CV 2026).
- SIEV (extracción de videos para Fiscalía y Policía): en producción en 3 meses, con .NET y React, para 100 usuarios.
- Integraciones WCF, SOAP y REST en el 911 y SEMM: un 70% menos de incidentes críticos.
- IA generativa (GitHub Copilot, ChatGPT, Claude Code): al menos un 30% más rápido en entregas e incidencias.
- Mesa de ayuda del proyecto ANCAP: equipo de 13 técnicos, reducción del 25% en los tiempos de resolución y de al menos un 30% en la recurrencia de tickets críticos.
- Coordinación y Gestión de Proyectos (2009–2018): proyectos de infraestructura a nivel nacional para 3 clientes públicos y privados.
- Proyectos nombrables públicamente: Sistema de Denuncias (Ministerio del Interior, 2024), Centro de Emergencias 911 (Ministerio del Interior, 2023), Gestión de Eventos SEMM (2023). También SIEV (Fiscalía y Policía).
- Disponible para incorporarse de inmediato. Su etapa en SONDA como desarrollador terminó en julio de 2026.
- Modalidad: remoto, híbrido o presencial.
- Respuesta a contactos en menos de 24 h hábiles.
- Formación: Analista Programador, Universidad ORT Uruguay (2020–2024, con títulos intermedios de Programador Orientado a Objetos y Programador Web; título en `public/titulo.png`); Analista en Tecnologías de la Información, ORT (2011–2019); Desarrollo Mobile Android, Instituto BIOS (2015); Técnico en Hardware y Software, IAC Computación (2003).
- Certificaciones: Claude Code: Guía completa para desarrolladores de software (Udemy, oct. 2026, 19 h; `public/UC-cd21aeee-….pdf`); Agile Frameworks: Scrum & Kanban (Udemy, 2024; `public/UC-12a8ec05-….pdf`). El CV menciona además certificaciones en IA Generativa y JavaScript, sin emisor ni copia: no se publican hasta tener esos datos.
- Idiomas: español nativo; inglés con lectura técnica fluida y conversación básica-intermedia (Alianza Cultural Uruguay-Estados Unidos).
- Proyectos propios: Arcade Vault (Next.js + Supabase, en vivo en arcade-valut.vercel.app), API de pagos segura (ASP.NET Core 8) y asistente RAG sobre PDFs (prueba de concepto).
- Foto de perfil: `src/assets/perfil.jpg`.

Servicios (decidido; faltan datos del dueño):
- Qué se ofrece: landing o web para un producto; tienda y cobros online; sistema a medida (login, base de datos, panel de administración); mantenimiento y mejoras de un sitio existente.
- Formato: 3 paquetes con precio "desde USD X" y una fila de mantenimiento. No se nombran clientes; la prueba son este sitio, Arcade Vault, la API de pagos y los 17 años en operación.
- Pendiente de Marcos, y no se publica la oferta sin esto: precio "desde" de cada paquete y modalidad de mantenimiento (por hora o abono); plazos y límites de alcance; días de soporte, anticipo y forma de pago; si los precios llevan IVA o factura; qué pasarela de pago usó de verdad y con qué stack armaría una tienda; su disponibilidad para proyectos en paralelo a la búsqueda de puesto.
- Fuera del código: cómo facturar en Uruguay (DGI, BPS, IVA y exportación de servicios), plantilla de propuesta y contrato, forma de cobro y posibles cláusulas de exclusividad.

Ausencias que no se deben inventar:
- No hay testimonios reales.
- No hay clientes ni cifras más allá de los listados arriba.
- No hay clientes de servicios web ni tiendas propias en producción.
- No hay experiencia confirmada con una pasarela de pago concreta (Mercado Pago, Stripe, PayPal): se habla de "integración de pagos" sin nombrarlas.
- No hay precios, plazos ni cifras de rendimiento (por ejemplo Lighthouse) medidos para los servicios.

## Product Principles

1. **Las preguntas de filtro, respondidas arriba.** Rol, stack, disponibilidad, modalidad, zona horaria y contacto se ven sin hacer scroll.
2. **La trayectoria es el diferencial.** Los 17 años en operación y soporte se presentan como un activo, no como un preámbulo de "dev desde 2022".
3. **Solo hechos medidos.** Cada cifra tiene que poder sostenerse en una entrevista. Se prefieren las medidas reales (segundos, personas) a los porcentajes redondos.
4. **Primero, quien contrata.** El hero, el CTA principal, el header y el pie apuntan al puesto. Los servicios viven en su propia sección y en una opción del formulario, con CTA secundario; nunca desplazan al puesto.
5. **El CV y el contacto nunca están a más de un clic.**
6. **Precios, alcances y plazos, solo los que fijó Marcos.** Ningún número de la oferta se inventa ni se estima: si falta, la sección no se publica.

## Accessibility & Inclusion

Mantener navegación por teclado, skip link, foco visible, modo oscuro y respeto de `prefers-reduced-motion`. No se estableció un estándar formal más allá de eso.
