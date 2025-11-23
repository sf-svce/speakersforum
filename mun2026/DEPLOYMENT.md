# SVCE MUN 2026 - Deployment Guide

Complete guide for deploying the SVCE MUN 2026 website to production.

## Pre-Deployment Checklist

### 1. Content Updates ✓

- [ ] Update event date in `src/main.js` (CONFIG.EVENT_DATETIME)
- [ ] Update registration URL in `src/main.js` (CONFIG.REGISTER_URL)
- [ ] Replace Secretary General message in `index.html`
- [ ] Add all required images (see public/images/README.md)
- [ ] Add Study Guide PDF links
- [ ] Enable Google Analytics (uncomment in index.html)
- [ ] Verify all committee information is correct
- [ ] Test all internal links

### 2. Image Assets ✓

- [ ] MUN Society logo (public/images/logos/)
- [ ] Secretary General photo
- [ ] Team member photos (Pavan, Avila)
- [ ] Favicon (32x32, 16x16)
- [ ] OG image for social sharing (1200x630)
- [ ] All images optimized (<200KB each)

### 3. Testing ✓

- [ ] Desktop: Chrome, Firefox, Safari, Edge
- [ ] Mobile: iOS Safari, Chrome Mobile
- [ ] Tablet: iPad Safari, Android Chrome
- [ ] Countdown timer works
- [ ] All navigation links function
- [ ] FAQ accordion expands
- [ ] Team cards flip
- [ ] Itinerary tabs switch
- [ ] Registration buttons link correctly
- [ ] No console errors
- [ ] Lighthouse score > 90

### 4. Build Production Files ✓

```bash
npm run build
```

This creates optimized CSS in `public/output.css`

---

## Deployment Options

### Option 1: Netlify (Recommended)

#### Why Netlify?
- ✅ Free for static sites
- ✅ Automatic HTTPS
- ✅ Global CDN
- ✅ Continuous deployment from Git
- ✅ Form handling (if needed later)

#### Steps:

1. **Push to GitHub**
   ```bash
   cd mun-rebuild
   git init
   git add .
   git commit -m "Initial SVCE MUN 2026 website"
   git remote add origin <your-github-repo-url>
   git push -u origin main
   ```

2. **Connect to Netlify**
   - Go to [netlify.com](https://netlify.com)
   - Click "Add new site" → "Import an existing project"
   - Choose GitHub and select your repository
   - Configure build settings:
     - **Build command**: `npm run build`
     - **Publish directory**: `src`
     - **Production branch**: `main`

3. **Deploy**
   - Click "Deploy site"
   - Wait 2-3 minutes for build
   - Site will be live at `random-name.netlify.app`

4. **Custom Domain** (Optional)
   - Go to "Domain settings"
   - Click "Add custom domain"
   - Enter `svcemun.com` (or your domain)
   - Follow DNS configuration instructions

#### netlify.toml Configuration

Create `netlify.toml` in project root:

```toml
[build]
  command = "npm run build"
  publish = "src"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200

[build.environment]
  NODE_VERSION = "18"
```

---

### Option 2: Vercel

#### Steps:

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Login**
   ```bash
   vercel login
   ```

3. **Deploy**
   ```bash
   cd mun-rebuild
   vercel
   ```

4. **Follow prompts**
   - Set up project: Y
   - Link to existing: N
   - Project name: svcemun26
   - Directory: `./`
   - Override settings: N

5. **Production Deploy**
   ```bash
   vercel --prod
   ```

#### vercel.json Configuration

Create `vercel.json` in project root:

```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "src",
  "framework": null
}
```

---

### Option 3: GitHub Pages

#### Steps:

1. **Build the site**
   ```bash
   npm run build
   ```

2. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "SVCE MUN 2026 site"
   git branch -M main
   git remote add origin <your-repo-url>
   git push -u origin main
   ```

3. **Enable GitHub Pages**
   - Go to repository Settings
   - Navigate to "Pages"
   - Source: Deploy from branch
   - Branch: `main`
   - Folder: `/src` (or `/` if you prefer)
   - Save

4. **Wait 2-3 minutes**
   - Site will be available at `username.github.io/repo-name`

5. **Custom Domain** (Optional)
   - Add CNAME file in src/: `echo "svcemun.com" > src/CNAME`
   - Configure DNS to point to GitHub Pages IPs

---

### Option 4: Traditional Web Hosting (cPanel/FTP)

#### Steps:

1. **Build the site**
   ```bash
   npm run build
   ```

2. **Prepare files for upload**
   - Copy these files/folders:
     - `src/index.html`
     - `src/main.js`
     - `public/output.css`
     - `public/images/`

3. **Upload via FTP**
   - Connect to your hosting with FTP client (FileZilla, etc.)
   - Upload to public_html or www directory
   - Maintain folder structure

4. **Directory structure on server**
   ```
   public_html/
   ├── index.html
   ├── main.js
   ├── public/
   │   ├── output.css
   │   └── images/
   ```

5. **Update paths** (if needed)
   - If output.css isn't loading, update path in index.html
   - Change `/public/output.css` to `public/output.css` (remove leading slash)

---

## Post-Deployment Tasks

### 1. DNS Configuration (for custom domain)

Point your domain to hosting:

**Netlify:**
- A record: 75.2.60.5
- CNAME: your-site.netlify.app

**Vercel:**
- CNAME: cname.vercel-dns.com

**GitHub Pages:**
- A records: 185.199.108.153, 185.199.109.153, 185.199.110.153, 185.199.111.153
- CNAME: username.github.io

### 2. SSL Certificate
- Netlify/Vercel: Automatic (Let's Encrypt)
- GitHub Pages: Automatic (enforce HTTPS in settings)
- Traditional hosting: Request SSL from hosting provider

### 3. Test Live Site

- [ ] Visit site from different devices
- [ ] Test all links
- [ ] Check countdown timer
- [ ] Verify images load
- [ ] Test registration button
- [ ] Check social media preview (use [metatags.io](https://metatags.io))
- [ ] Run Lighthouse audit
- [ ] Test page load speed

### 4. Analytics Setup

**Google Analytics:**
1. Go to [analytics.google.com](https://analytics.google.com)
2. Create property for svcemun.com
3. Get tracking ID (G-XXXXXXXXXX)
4. Update in `src/index.html` (lines 28-35)
5. Rebuild and redeploy

**Alternative: Plausible Analytics** (privacy-friendly)
- Lighter weight
- GDPR compliant
- Simpler dashboard

### 5. SEO Optimization

- [ ] Submit to Google Search Console
- [ ] Submit sitemap (create with sitemap generator)
- [ ] Verify og:image works (test on Facebook debugger)
- [ ] Add meta description (already in HTML)
- [ ] Test structured data (if added)

### 6. Performance Monitoring

**Set up monitoring:**
- Google PageSpeed Insights: Weekly checks
- Uptime monitoring: UptimeRobot (free)
- Error tracking: Sentry (optional)

---

## Continuous Deployment (Recommended)

### Auto-deploy on Git push:

1. **Netlify/Vercel** (automatic):
   - Any push to `main` branch auto-deploys
   - Preview deployments for branches
   - Rollback available

2. **GitHub Actions** (for GitHub Pages):

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2

      - name: Setup Node.js
        uses: actions/setup-node@v2
        with:
          node-version: '18'

      - name: Install dependencies
        run: npm install

      - name: Build
        run: npm run build

      - name: Deploy
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./src
```

---

## Rollback Procedure

### Netlify/Vercel:
1. Go to Deployments
2. Find previous successful deploy
3. Click "Publish deploy"

### GitHub Pages:
```bash
git revert HEAD
git push origin main
```

### Traditional Hosting:
- Keep backup of previous version
- Re-upload via FTP

---

## Troubleshooting

### CSS not loading
- Check path: `/public/output.css` vs `public/output.css`
- Verify build ran successfully
- Check browser console for 404 errors

### Images not showing
- Verify images uploaded correctly
- Check file paths match HTML
- Test direct URL: `yoursite.com/public/images/logos/logo.png`

### Countdown not working
- Check date format in main.js
- Verify JavaScript file loaded
- Check browser console for errors

### Registration button doesn't work
- Verify REGISTER_URL in main.js
- Check that Google Form is public
- Test URL directly

---

## Maintenance

### Regular Updates:
- **Before Event**: Update countdown date if changed
- **After Event**: Add gallery photos
- **Annually**: Update copyright year in footer
- **As Needed**: Update committee info, team members

### Content Updates (No rebuild needed):
- Images: Replace in `public/images/`
- Registration URL: Update `main.js` and redeploy

### Code Updates (Requires rebuild):
- HTML changes: Edit `src/index.html`
- CSS changes: Edit `src/styles.css` then `npm run build`
- JS changes: Edit `src/main.js`

---

## Support Contacts

**Hosting Issues:**
- Netlify: support@netlify.com
- Vercel: support@vercel.com
- GitHub: support@github.com

**Technical Questions:**
- SVCE IT: [contact info]
- Speakers' Forum: sf@svce.ac.in

---

## Quick Reference Commands

```bash
# Install dependencies
npm install

# Development server
npm run dev

# Build for production
npm run build

# Preview production
npm start

# Deploy with Vercel
vercel --prod

# Git commands
git add .
git commit -m "Update message"
git push origin main
```

---

**Last Updated**: 2026-11-09
**Maintained by**: SVCE Speakers' Forum

Good luck with the deployment! 🚀
