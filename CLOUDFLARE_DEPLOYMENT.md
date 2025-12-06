# Cloudflare Pages Deployment Guide

## ⚠️ Important Configuration

When deploying to Cloudflare Pages, use the following settings:

### Build Configuration

| Setting | Value |
|---------|-------|
| **Build command** | `npm run build` |
| **Build output directory** | `dist` |
| **Root directory** | `/` |
| **Node version** | `22` |

### ❌ DO NOT USE

- Do NOT use `wrangler deploy` (this is for Workers, not Pages)
- Do NOT use custom deploy command in Cloudflare Dashboard

### ✅ Correct Deploy Method

The build command `npm run build` will:
1. Build the server bundle (SSR) → `dist/_worker.js`
2. Build the client bundle → `dist/static/client.js`
3. Copy static assets → `dist/static/`

Cloudflare Pages will automatically detect the `_worker.js` file and deploy it correctly.

### Manual Deployment (from CLI)

If you want to deploy manually from your local machine:

```bash
# Install dependencies
npm install

# Build the project
npm run build

# Deploy to Cloudflare Pages
npm run pages:deploy

# Or deploy to specific project
npm run pages:deploy:prod
```

### Troubleshooting

If you see error: "It looks like you've run a Workers-specific command in a Pages project"

**Solution:** Remove any custom deploy command from Cloudflare Pages settings. Just use:
- **Build command**: `npm run build`
- **Build output directory**: `dist`

Leave the deploy step to Cloudflare - it will handle it automatically after the build completes.
