// Configuración específica para Vercel
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';

export default defineConfig({
  // No usar 'base' para Vercel (diferente a GitHub Pages)
  site: 'https://presentacion-page.vercel.app',
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
