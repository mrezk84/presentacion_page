# Marcos Rezk | Full Stack Developer Portfolio

Portfolio web profesional construido con **Astro** y **Tailwind CSS**, sin JavaScript de framework en el cliente. Muestra proyectos de GitHub y experiencia profesional de forma elegante y accesible.

El sistema de diseño (**"Dispatch"**) usa una paleta semántica de tokens — papel hueso, tinta, verde pino y bermellón de señal — que se invierte por completo en modo oscuro sin variantes `dark:` en el marcado.

## Características

### SEO y Optimización
- Meta tags completos (Open Graph, Twitter Cards)
- Sitemap dinámico y robots.txt
- JSON-LD para datos estructurados
- Imágenes optimizadas
- Palabras clave técnicas para mejor posicionamiento

### Secciones
- Hero con foto y descripción profesional
- Experiencia laboral detallada
- Proyectos profesionales destacados (SONDA, Ministerio del Interior, SEMM, 911)
- Repositorios de GitHub con datos reales
- Stack tecnológico organizado por categoría
- Credenciales: formación académica, certificaciones e idiomas
- Formulario de contacto (Formspree)
- Enlaces a redes sociales y GitHub

### Diseño y UX
- Modo oscuro automático, con tokens semánticos que invierten toda la paleta
- Revelado progresivo por scroll con IntersectionObserver (sin dependencias)
- Contraste verificado: 0 fallos WCAG AA en modo claro y oscuro
- Scrollbar personalizado
- Navegación responsive
- Accesibilidad (skip links, ARIA, focus states)
- Transiciones y hover effects
- Selección de texto personalizada
- Enlaces a repositorios reales de GitHub

## Tecnologías

- **Astro 7** - Framework de sitios estáticos
- **Tailwind CSS 4** - Estilos utility-first, con tokens vía `@theme inline`
- **TypeScript** - Tipado estático
- **Bricolage Grotesque + IBM Plex Sans/Mono** - Tipografía

No se envía React ni AOS al cliente: los revelados son CSS + `IntersectionObserver`.

## Instalación

```bash
# Clonar el repositorio
git clone https://github.com/mrezk84/presentacion_page.git

# Entrar al directorio
cd presentacion_page

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev
```

## Scripts Disponibles

| Comando | Acción |
|---------|--------|
| `npm run dev` | Inicia servidor de desarrollo (localhost:4321) |
| `npm run build` | Construye para producción |
| `npm run preview` | Previa la build de producción |
| `npm run astro` | Ejecuta comandos de CLI de Astro |

### Variables de entorno

La única variable que afecta el comportamiento es `VITE_FORMSPREE_ENDPOINT`:
debe ser el **ID del formulario** de Formspree (o la URL completa), no una
dirección de correo. Si no está definida, el formulario cae a un enlace
`mailto:` en lugar de fallar en silencio.

## Activar el formulario de contacto

Sin esta variable el botón de enviar abre el cliente de correo del visitante.
Funciona, pero mucha gente no tiene uno configurado en la computadora del
trabajo, así que conviene definirla.

**1. Obtener el ID.** Crear un formulario en [formspree.io](https://formspree.io)
y copiar el ID del endpoint que muestra: en `https://formspree.io/f/xrgvabcd`
el ID es `xrgvabcd`.

**2. Cargarlo en los dos destinos.** Cada uno lee sus variables de un lugar
distinto, así que hay que definirlo en ambos o el formulario queda activo en
un sitio y en `mailto:` en el otro:

| Destino | Dónde |
|---|---|
| GitHub Pages | Settings → Secrets and variables → Actions → New repository secret, con nombre `VITE_FORMSPREE_ENDPOINT` |
| Vercel | Settings → Environment Variables del proyecto, mismo nombre, marcada para Production |

**3. Volver a desplegar.** Las variables se leen en tiempo de build, así que un
despliegue anterior no las toma: hay que disparar uno nuevo (un push a `main`,
o *Run workflow* sobre `deploy.yml`).

**Para probar en local:** copiar `.env.example` a `.env.local` y definirla ahí.

**Cómo verificar que quedó activo:** en el HTML publicado, el `<form>` debe
tener `action="https://formspree.io/f/..."` y `data-live="true"`. Si dice
`action="mailto:..."` y `data-live="false"`, la variable no llegó al build.

## Deployment

### GitHub Pages
El proyecto está configurado para desplegar automáticamente en GitHub Pages usando GitHub Actions. La URL actual es:
```
https://mrezk84.github.io/presentacion_page/
```

**Para cambiar la URL:**
1. Opción A: Renombrar el repositorio a `marcosrezk.github.io` para usar la URL raíz
2. Opción B: Configurar un dominio personalizado en GitHub Pages
3. Opción C: Usar Vercel/Netlify con dominio personalizado

### Vercel
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm install -g netlify-cli
netlify deploy --prod
```

## Contacto

**Marcos Rezk**
- LinkedIn: [linkedin.com/in/marcos-rezk](https://www.linkedin.com/in/marcos-rezk)
- GitHub: [@mrezk84](https://github.com/mrezk84)
- Email: mrezk84@gmail.com

## Licencia

Este proyecto es de código abierto y está disponible bajo la licencia MIT.

---

Si te gusta este proyecto, dale una estrella en GitHub!
