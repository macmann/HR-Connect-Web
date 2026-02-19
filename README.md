# HR Connect Website

This repository contains a static website for **HR Connect**, designed to be deployable on **Render.com**.

## What it includes

- A polished landing/documentation page summarizing platform architecture, capabilities, and operations
- Static-exported Next.js output (`next export` via `output: "export"`)
- Render deployment configuration in `render.yaml`

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Production build (static)

```bash
npm run build
```

The generated static site is written to `out/`.

## Deploy to Render

This repo includes `render.yaml` configured for a static deployment.

- **Service type:** Static Site
- **Build command:** `npm ci && npm run build`
- **Publish directory:** `out`

You can either:
1. Connect the repository in Render and let it auto-detect `render.yaml`, or
2. Manually configure a Static Site using the same build/publish settings.
