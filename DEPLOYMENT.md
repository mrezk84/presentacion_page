# Deployment Guide - Página de Presentación

This guide covers deployment options for the presentation page.

## 🚀 Deployment Options

### 1. GitHub Pages (Recommended)

**Automatic Deployment:**
The project is configured with GitHub Actions for automatic deployment to GitHub Pages.

1. Go to your repository Settings > Pages
2. Set source to "GitHub Actions"
3. Push to `main` branch - it will deploy automatically!

Your site will be available at:
```
https://[username].github.io/presentacion_page/
```

**Manual Deployment:**
```bash
npm run build
# Deploy the `dist` folder to GitHub Pages
```

### 2. Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/mrezk84/presentacion_page)

**Using CLI:**
```bash
npm install -g vercel
vercel
```

**Configuration:**
- Build Command: `npm run build`
- Output Directory: `dist`
- Install Command: `npm install`

### 3. Netlify

**Using CLI:**
```bash
npm install -g netlify-cli
netlify deploy --prod
```

**Configuration:**
- Build command: `npm run build`
- Publish directory: `dist`
- Node version: 20

### 4. Cloudflare Pages

```bash
npm install -g wrangler
wrangler pages publish dist
```

## 🔧 Environment Variables

Create `.env.local`:

```env
# Site URL
VITE_SITE_URL=https://yourdomain.com

# Analytics (optional)
VITE_GA_ID=G-XXXXXXXXXX
```

## 📊 Post-Deployment Checklist

- [ ] Test all links work correctly
- [ ] Verify mobile responsiveness
- [ ] Check dark mode functionality
- [ ] Test contact form
- [ ] Validate SEO with [Google Rich Results Test](https://search.google.com/test/rich-results)
- [ ] Check Lighthouse score
- [ ] Test sitemap at `/sitemap.xml`
- [ ] Verify robots.txt at `/robots.txt`

## 🔍 Analytics Setup

### Google Analytics

Add to `src/layouts/Layout.astro`:

```astro
<script is:inline>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
```

## 🌐 Custom Domain

### GitHub Pages
1. Go to repository Settings > Pages
2. Add custom domain
3. Update DNS records:
   - CNAME: `yourdomain.com` → `[username].github.io`
   - A: `@` → `185.199.108.153`

### Vercel
Add domain in Vercel dashboard > Settings > Domains

## 🔄 CI/CD Pipeline

The GitHub Actions workflow (`.github/workflows/deploy.yml`):

1. Triggers on push to `main`
2. Installs dependencies
3. Builds the project
4. Deploys to GitHub Pages

## 🐛 Troubleshooting

### Build Errors
```bash
# Clear cache and reinstall
rm -rf node_modules .astro
npm install
npm run build
```

### Deployment Issues
- Check build logs
- Verify environment variables
- Ensure `astro.config.mjs` has correct `base` path

### 404 Errors
- Verify `base` in `astro.config.mjs`
- Check file paths are relative to base

## 📈 Performance Optimization

The site includes:
- CSS minification
- Asset optimization
- Lazy loading images
- Static generation
- CDN deployment

Target metrics:
- Performance: 90+
- Accessibility: 100
- Best Practices: 90+
- SEO: 100

## 🔐 Security Headers

Configured in `vercel.json` and `netlify.toml`:
- X-Frame-Options: DENY
- X-Content-Type-Options: nosniff
- X-XSS-Protection: 1; mode=block
- Referrer-Policy: strict-origin-when-cross-origin

## 📞 Support

For issues or questions:
- Open an issue on GitHub
- Email: mrezk84@gmail.com
- LinkedIn: [Marcos Rezk](https://www.linkedin.com/in/marcos-rezk)
