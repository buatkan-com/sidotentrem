# Sido Tentrem — GitHub Pages v4

Premium React + Vite brand website for Sido Tentrem.

## Production

Custom domain: https://sidotentrem.buatkan.com

Deployment is handled automatically by GitHub Actions on every push to `main`.

### GitHub Pages settings

Repository → Settings → Pages → Build and deployment → Source: **GitHub Actions**

### DNS

Create this DNS record at the DNS provider for `buatkan.com`:

- Type: `CNAME`
- Name: `sidotentrem`
- Target: `<github-username>.github.io`

Do not point the subdomain to the shared-hosting server if the site is hosted on GitHub Pages.

### Local development

```bash
npm install
npm run dev
```

### Production build

```bash
npm run build
```

The build creates `dist/index.html`, `dist/404.html`, and `dist/CNAME`. The `404.html` fallback keeps React Router routes working on GitHub Pages while preserving clean URLs.
