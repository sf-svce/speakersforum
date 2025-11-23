# Image Assets Directory

This directory contains all image assets for the SVCE MUN 2026 website.

## Required Images

### Logos
- **munsoc-logo.png** or **munsoc-logo.svg** (preferred)
  - Size: Recommended 200x200px minimum
  - Format: PNG with transparency or SVG
  - Usage: Navbar logo
  - Location: `logos/munsoc-logo.png`

### Team Photos
- **secretary-general.jpg**
  - Size: Minimum 800x800px
  - Format: WebP or JPG
  - Aspect Ratio: Square (1:1)
  - Location: `team/secretary-general.jpg`

- **pavan.jpg**
  - Size: Minimum 800x800px
  - Format: WebP or JPG
  - Aspect Ratio: Square (1:1)
  - Location: `team/pavan.jpg`

- **avila.jpg**
  - Size: Minimum 800x800px
  - Format: WebP or JPG
  - Aspect Ratio: Square (1:1)
  - Location: `team/avila.jpg`

### Icons
- **favicon.ico**
  - Size: 32x32px, 16x16px (multi-size ICO)
  - Format: ICO
  - Location: `icons/favicon.ico`

- **apple-touch-icon.png** (Optional but recommended)
  - Size: 180x180px
  - Format: PNG
  - Location: `icons/apple-touch-icon.png`

### Social Media
- **og-image.jpg**
  - Size: 1200x630px (Facebook/Twitter recommended)
  - Format: JPG or PNG
  - Usage: Open Graph and Twitter Card image
  - Location: `og-image.jpg`

## Optional Images

### Backgrounds
- **hero-bg.jpg** (Optional - currently using CSS grid pattern)
  - Size: 1920x1080px minimum
  - Format: WebP or JPG (optimized)
  - Usage: Hero section background
  - Location: `backgrounds/hero-bg.jpg`

### Gallery
- **gallery/*.jpg** (Optional - section has placeholder)
  - Size: 800x600px recommended
  - Format: WebP or JPG
  - Naming: `event-1.jpg`, `event-2.jpg`, etc.
  - Location: `gallery/`

### Committee Emblems (Optional)
- **unsc-emblem.svg**
- **unhrc-emblem.svg**
- **disec-emblem.svg**
- **unodc-emblem.svg**
  - Size: 500x500px
  - Format: SVG or WebP
  - Location: `logos/committees/`

## Image Optimization Guidelines

### Compression
- Use tools like TinyPNG, ImageOptim, or Squoosh
- Target: < 200KB per image
- Maintain quality above 80%

### Format Recommendations
- **Logos**: SVG (vector) preferred, PNG as fallback
- **Photos**: WebP with JPG fallback
- **Icons**: SVG or PNG with transparency
- **Backgrounds**: WebP or optimized JPG

### Responsive Images
Consider creating multiple sizes for responsive loading:
- Small: 400px wide
- Medium: 800px wide
- Large: 1200px wide

Use srcset in HTML for better performance.

### Lazy Loading
All images in the HTML already have `loading="lazy"` attribute where appropriate. Hero images load immediately.

## File Naming Convention

- Use lowercase
- Use hyphens for spaces: `team-member-name.jpg`
- Be descriptive: `secretary-general-portrait.jpg` not `img1.jpg`
- Include size if multiple versions: `logo-200.png`, `logo-400.png`

## Current Status

📁 Directory structure created
⚠️ Placeholder images needed - replace before deployment

## Quick Setup Checklist

- [ ] Add MUN Society logo
- [ ] Add Secretary General photo
- [ ] Add team member photos (Pavan, Avila)
- [ ] Add favicon
- [ ] Add OG image for social media
- [ ] Optimize all images (<200KB each)
- [ ] Test all images load correctly
- [ ] Verify alt text is descriptive

---

For questions, contact: sf@svce.ac.in
