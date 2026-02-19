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

This repo includes `render.yaml` for a static deployment and is ready to deploy without code changes.

### Option 1: Blueprint deploy (recommended)

1. Push this project to GitHub/GitLab.
2. In Render, click **New +** → **Blueprint**.
3. Connect your repository.
4. Render detects `render.yaml` and creates the service:
   - **Name:** `hr-connect-web`
   - **Runtime:** Static Site (`env: static`)
   - **Build command:** `npm ci && npm run build`
   - **Publish directory:** `out`
   - **PR previews:** Enabled (`pullRequestPreviewsEnabled: true`)
5. Click **Apply** / **Create** and wait for the first deploy to complete.

### Option 2: Manual static site setup

If you do not want to use Blueprint:

1. In Render, click **New +** → **Static Site**.
2. Connect the repository.
3. Set:
   - **Build Command:** `npm ci && npm run build`
   - **Publish Directory:** `out`
4. Leave environment variables empty (none are required for this static build).
5. Create the service and deploy.

### Verify deployment

After deployment:

1. Open your Render URL (for example `https://hr-connect-web.onrender.com`).
2. Confirm the homepage loads and internal links work.
3. If enabled, open a pull request and verify Render generated a preview deployment.

### Common troubleshooting

- **Build fails with dependency issues**
  - Ensure Render is using the repository root where `package.json` is located.
- **404s on pages/assets**
  - Confirm `npm run build` generated the `out/` folder locally before pushing.
- **Config changes not applied**
  - If you changed `render.yaml`, trigger a new deploy from the Render dashboard.

### Useful files

- `render.yaml` — Render service configuration.
- `next.config.mjs` — Next.js export/static output settings.
- `package.json` — build scripts used by Render.
