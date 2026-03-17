// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import react from '@astrojs/react';

// Detectar si estamos en Vercel
const isVercel = process.env.VERCEL === '1';

// Para GitHub Pages:
// - Si usas el repo principal (username.github.io), base debe ser '/'
// - Si usas un repo específico (username.github.io/repo-name), base debe ser '/repo-name'
// Actualmente: 'https://mrezk84.github.io/presentacion_page'

// Para cambiar la URL, tienes estas opciones:
// 1. Renombrar el repositorio a "marcosrezk.github.io" para usar la URL raíz
// 2. Configurar un dominio personalizado en GitHub Pages
// 3. Usar Vercel/Netlify con dominio personalizado

// https://astro.build/config
export default defineConfig({
  site: isVercel ? 'https://marcosrezk.vercel.app' : 'https://mrezk84.github.io/presentacion_page',
  base: isVercel ? '/' : '/presentacion_page',
  vite: {
    plugins: [tailwindcss()],
    build: {
      cssMinify: true,
      assetsInlineLimit: 4096,
    },
  },
  integrations: [react()],
  output: 'static',
  build: {
    format: 'directory',
  },
});