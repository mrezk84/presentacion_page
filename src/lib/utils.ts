// Helper para rutas de assets
// Detecta automáticamente el base path según la plataforma

export const getAssetPath = (path: string): string => {
  // En Vercel, las rutas son desde la raíz
  // En GitHub Pages, necesitan el prefijo /presentacion_page
  const isVercel = import.meta.env.VERCEL === '1' || import.meta.env.MODE === 'production' && !import.meta.env.BASE_URL.includes('presentacion_page');

  if (path.startsWith('/')) {
    return path;
  }

  return `/${path}`;
};

// Alias más corto
export const asset = getAssetPath;

// URLs base para SEO
export const getSiteURL = (): string => {
  if (import.meta.env.PUBLIC_SITE_URL) {
    return import.meta.env.PUBLIC_SITE_URL;
  }
  if (import.meta.env.VERCEL_URL) {
    return `https://${import.meta.env.VERCEL_URL}`;
  }
  return 'https://mrezk84.github.io/presentacion_page/';
};
