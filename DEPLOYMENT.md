# Deployment Guide - Roaia Business Solutions

## 📋 Prerequisites

Before deploying to Cloudflare Pages, ensure you have:

1. **Cloudflare Account**: Sign up at [dash.cloudflare.com](https://dash.cloudflare.com)
2. **Cloudflare API Token**: Create one with Pages:Write permissions
3. **Wrangler CLI**: Already installed in this project
4. **GitHub Account** (optional): For CI/CD deployment

## 🚀 Deployment Options

### Option 1: Direct Deployment via Wrangler (Recommended)

#### Step 1: Setup Cloudflare API Key

```bash
# Use the setup_cloudflare_api_key tool first
# This configures your Cloudflare authentication
```

#### Step 2: Verify Authentication

```bash
npx wrangler whoami
```

#### Step 3: Build the Project

```bash
npm run build
```

#### Step 4: Create Cloudflare Pages Project

```bash
npx wrangler pages project create roaia-business-solutions \
  --production-branch main \
  --compatibility-date 2024-01-01
```

#### Step 5: Deploy to Production

```bash
npx wrangler pages deploy dist --project-name roaia-business-solutions
```

You'll receive:
- Production URL: `https://roaia-business-solutions.pages.dev`
- Branch URL: `https://main.roaia-business-solutions.pages.dev`

### Option 2: GitHub Integration (Automatic Deployment)

#### Step 1: Push to GitHub

```bash
# Setup GitHub authentication
# Call setup_github_environment first

# Add remote and push
git remote add origin https://github.com/YOUR_USERNAME/roaia-business-solutions.git
git push -u origin main
```

#### Step 2: Connect to Cloudflare Pages

1. Go to [Cloudflare Dashboard](https://dash.cloudflare.com)
2. Navigate to **Workers & Pages** → **Create Application** → **Pages**
3. Select **Connect to Git**
4. Choose your repository: `roaia-business-solutions`
5. Configure build settings:
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
   - **Framework preset**: None (custom)
   - **Environment variables**: (none required)

#### Step 3: Deploy

Click **Save and Deploy**. Cloudflare will automatically:
- Build your project
- Deploy to production
- Set up automatic deployments on every push

## 🔧 Custom Domain Setup

### Add Custom Domain (www.roaia.org)

1. In Cloudflare Pages dashboard, go to your project
2. Navigate to **Custom Domains**
3. Click **Set up a custom domain**
4. Enter: `www.roaia.org`
5. Follow DNS configuration instructions

### DNS Configuration

Add these DNS records in your domain registrar:

```
Type    Name    Content
CNAME   www     roaia-business-solutions.pages.dev
CNAME   @       roaia-business-solutions.pages.dev
```

## 📧 Email Integration (Optional)

To make the contact form functional with email notifications:

### Option 1: SendGrid

1. Sign up at [sendgrid.com](https://sendgrid.com)
2. Get API key
3. Add secret to Cloudflare:

```bash
npx wrangler pages secret put SENDGRID_API_KEY --project-name roaia-business-solutions
```

4. Update `src/index.tsx` to use SendGrid API

### Option 2: Mailgun

1. Sign up at [mailgun.com](https://mailgun.com)
2. Get API credentials
3. Add secrets:

```bash
npx wrangler pages secret put MAILGUN_API_KEY --project-name roaia-business-solutions
npx wrangler pages secret put MAILGUN_DOMAIN --project-name roaia-business-solutions
```

## 🔐 Environment Variables

### Local Development (.dev.vars)

Create `.dev.vars` file (already in .gitignore):

```env
# Example environment variables
SENDGRID_API_KEY=your_sendgrid_key
MAILGUN_API_KEY=your_mailgun_key
```

### Production (Cloudflare Secrets)

Add secrets via wrangler:

```bash
# Add secrets one by one
npx wrangler pages secret put API_KEY --project-name roaia-business-solutions
npx wrangler pages secret put DATABASE_URL --project-name roaia-business-solutions

# List all secrets
npx wrangler pages secret list --project-name roaia-business-solutions

# Delete a secret
npx wrangler pages secret delete API_KEY --project-name roaia-business-solutions
```

## 📊 Analytics Setup

### Cloudflare Web Analytics (Free)

1. Go to Cloudflare Dashboard
2. Navigate to **Analytics & Logs** → **Web Analytics**
3. Click **Add a site**
4. Copy the tracking snippet
5. Add to `src/index.tsx` in the `<head>` section

### Google Analytics

Add to `src/index.tsx`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

## 🔄 Continuous Deployment

Every push to `main` branch will trigger automatic deployment if using GitHub integration.

### Manual Deployment

```bash
# Build and deploy
npm run deploy:prod

# Or step by step
npm run build
npx wrangler pages deploy dist --project-name roaia-business-solutions
```

## 🐛 Troubleshooting

### Build Fails

```bash
# Clean and rebuild
rm -rf dist node_modules package-lock.json
npm install
npm run build
```

### Authentication Issues

```bash
# Re-authenticate
npx wrangler login
npx wrangler whoami
```

### Port Already in Use (Local)

```bash
# Kill process on port 3000
npm run clean-port

# Or manually
fuser -k 3000/tcp
```

### Deployment Errors

```bash
# Check wrangler version
npx wrangler version

# Update wrangler
npm install -D wrangler@latest

# View deployment logs
npx wrangler pages deployment list --project-name roaia-business-solutions
```

## 📈 Performance Optimization

### Enable Caching

Cloudflare automatically caches static assets. No configuration needed.

### Enable Compression

Already enabled by default (Brotli and Gzip).

### Image Optimization

Use Cloudflare Images for automatic optimization:

1. Upload images to Cloudflare Images
2. Use optimized URLs in your code

## 🔒 Security Best Practices

1. **Never commit secrets**: Use `.env.local` and Cloudflare secrets
2. **Enable HTTPS**: Automatically enabled on Cloudflare Pages
3. **Set security headers**: Already configured in Hono app
4. **Rate limiting**: Add rate limiting middleware if needed
5. **Input validation**: Already implemented in contact form

## 📝 Post-Deployment Checklist

- [ ] Verify production URL works
- [ ] Test contact form functionality
- [ ] Check all navigation links
- [ ] Verify mobile responsiveness
- [ ] Test SEO meta tags (use [metatags.io](https://metatags.io))
- [ ] Submit sitemap to Google Search Console
- [ ] Set up analytics tracking
- [ ] Configure custom domain
- [ ] Add email notifications
- [ ] Monitor performance metrics

## 🆘 Support

For issues or questions:
- **Cloudflare Docs**: [developers.cloudflare.com/pages](https://developers.cloudflare.com/pages)
- **Hono Docs**: [hono.dev](https://hono.dev)
- **Project Issues**: Check project README

---

**Last Updated**: 2024-12-01
