# puskalkafle.com.np

Personal portfolio of **Puskal Kafle** — UX Engineer, Kathmandu, Nepal.

A fully static, dependency-free site (HTML/CSS/vanilla JS — no build step). Replaces the
previous Framer-iframe setup with a custom-designed site.

## Structure

```
index.html            — main page (work, product, components, archive, about, contact)
work/ntb.html         — case study: Nepal Tourism Board redesign
work/crypto.html      — case study: Cryptocurrency app concept
assets/css/style.css  — design system
assets/js/main.js     — interactions (cursor, reveals, compare slider, previews)
assets/img/           — project imagery
source/               — legacy Next.js iframe app (no longer needed once Vercel points at root)
```

## Deploying

**GitHub Pages** — serves the repo root automatically; nothing to configure.

**Vercel (puskalkafle.com.np)** — the Vercel project currently builds the legacy `source/`
Next.js app. To serve the new site, in *Project Settings → Build & Development Settings*:

1. Set **Root Directory** to `/` (empty).
2. Set **Framework Preset** to `Other`, and clear the build command / output directory.
3. Redeploy.

## Local preview

```
npx serve .
```
