# SVCE MUN 2026 - Design & Implementation Changelog

## Overview
This document details the design decisions, color usage, and implementation notes for the SVCE MUN 2026 website rebuild.

## Design Philosophy

The website was rebuilt with a **modern dark theme** inspired by SRMV, while preserving SVCE MUN's signature **gold accent (#FFD97D)** and **deep maroon theme (#330000)**. The design prioritizes elegance, readability, and accessibility while maintaining a sophisticated diplomatic atmosphere.

---

## Color Usage Map

### 1. **Deep Maroon (#330000)** - Used Sparingly for Accent Panels
- **About SVCE Section**: Background gradient transition (90% fade from black to maroon)
- **Committee Cards**: 20% opacity background for subtle depth
- **Itinerary Section**: Central gradient panel (50% through section)
- **Dress Code Section**: Background gradient accent (50% through section)
- **Secretary General Message Card**: 20% opacity background panel
- **Usage Philosophy**: Applied as subtle backgrounds and vignettes to add warmth without overwhelming the dark aesthetic

### 2. **Main Black (#0E0E0E)** - Primary Background
- **All Section Backgrounds**: Provides the dark canvas
- **Navbar**: Solid background when scrolled (95% opacity with backdrop blur)
- **Card Backgrounds**: 60% opacity with backdrop blur for glass effect
- **Footer**: Solid background
- **Usage Philosophy**: Dominant background color for maximum contrast and readability

### 3. **Gold (#FFD97D)** - Primary Accent & CTAs
- **Hero Title**: Large heading with glow animation
- **Countdown Numbers**: All timer digits
- **Primary Buttons**: Solid background (Register buttons)
- **Section Headings**: All major section titles
- **Navigation Hover States**: Link underlines and active states
- **Border Glows**: Card borders with 18% opacity
- **Icons & Bullets**: Decorative elements
- **Awards Categories**: Border accents for award cards
- **Committee Headings**: Committee names and emphasis
- **Team Member Names**: Names on flip cards
- **FAQ Icons**: Chevron icons
- **Footer Links**: Hover states
- **Usage Philosophy**: Strategic use for emphasis, hierarchy, and interactivity

### 4. **Light Text (#E6E6E6)** - Body Copy
- **All Paragraph Text**: Main readable content
- **Navigation Links**: Default state
- **Card Content**: Body text within cards
- **Usage Philosophy**: Ensures WCAG AA contrast against dark backgrounds

### 5. **Muted Text (#A8A8A8)** - Secondary Information
- **Subheadings**: Section descriptions
- **Countdown Labels**: "Days", "Hours", etc.
- **Committee Subtitles**: Full committee names
- **FAQ Answers**: Answer text
- **Footer Copyright**: Small print
- **Usage Philosophy**: Provides visual hierarchy without competing with primary content

### 6. **Border Glow (rgba(255, 217, 125, 0.18))** - Subtle Highlights
- **All Card Borders**: Countdown, committees, team, FAQ, etc.
- **Mobile Menu Border**: Top border separator
- **Glass Effect Borders**: Combined with backdrop blur
- **Usage Philosophy**: Adds sophistication and definition without harsh lines

---

## Section-by-Section Breakdown

### 1. **Navbar**
- **Colors**: Transparent initially, transitions to black (95% opacity) on scroll
- **Gold Usage**: Links on hover, Register button background
- **Maroon Usage**: None
- **Accessibility**: Focus states with gold ring, ARIA labels

### 2. **Hero Section**
- **Background**: Grid pattern with maroon vignette overlay
- **Title**: Gold with glow animation
- **Countdown Cards**: Black glass (60% opacity) with gold numbers
- **CTAs**: Primary (gold bg) + Secondary (gold border)
- **Maroon Usage**: Subtle radial gradient vignette from top

### 3. **Secretary General Message**
- **Background**: Solid black
- **Message Card**: Deep maroon (20% opacity) with border glow
- **Photo**: Gold shadow/glow effect
- **Maroon Usage**: Card background for warmth

### 4. **About SVCE**
- **Background**: Gradient from black to deep maroon (90% position)
- **Quick Facts Card**: Black glass with gold icons
- **Maroon Usage**: Bottom gradient transition

### 5. **Committees**
- **Background**: Solid black
- **Cards**: Deep maroon (20% opacity) backgrounds
- **Headings**: Gold
- **Hover Effect**: Gold border glow intensifies
- **Maroon Usage**: All 4 committee cards use maroon background

### 6. **Itinerary**
- **Background**: Gradient black → maroon (50%) → black
- **Day Tabs**: Gold background for active state
- **Timeline Dots**: Gold circles
- **Timeline Cards**: Black glass
- **Maroon Usage**: Central gradient accent panel

### 7. **Team (Secretariat)**
- **Background**: Solid black
- **Card Front**: Maroon (30% opacity) with gradient overlay
- **Card Back**: Black (95% opacity) with gold border
- **Names**: Gold text
- **Flip Effect**: 3D transform (disabled if prefers-reduced-motion)
- **Maroon Usage**: Card front backgrounds

### 8. **FAQ**
- **Background**: Gradient black → maroon (90%)
- **Accordion Items**: Black glass (60% opacity)
- **Hover**: Maroon (20% opacity) tint
- **Icons**: Gold chevrons
- **Maroon Usage**: Background gradient + hover states

### 9. **Travel & Accommodation**
- **Background**: Solid black
- **Cards**: Deep maroon (20% opacity)
- **Icons**: Gold
- **Contact Box**: Black with gold border accent
- **Maroon Usage**: Card backgrounds

### 10. **Dress Code**
- **Background**: Gradient black → maroon (50%) → black
- **Cards**: Black glass (60% opacity)
- **Checkmarks**: Gold
- **Note Box**: Gold (10% opacity) with gold border
- **Maroon Usage**: Central gradient accent

### 11. **Awards**
- **Background**: Solid black
- **Card Borders**: Color-coded (gold for Best Delegate, silver, bronze, amber)
- **Maroon Usage**: None (uses award-specific colors)

### 12. **Study Guides**
- **Background**: Gradient black → maroon (90%)
- **Cards**: Black glass with gold hover border
- **Icons**: Emojis
- **Download Links**: Gold on hover
- **Maroon Usage**: Background gradient

### 13. **Footer**
- **Background**: Solid black with gold border top
- **Text**: Muted gray
- **Links**: Gold on hover
- **Maroon Usage**: None

---

## Typography Hierarchy

1. **Headings**: Cinzel (serif) - Gold color - Sizes 4xl to 8xl
2. **Body**: Inter (sans-serif) - Light text - Size base to lg
3. **Signatures**: Dancing Script (cursive) - Gold - Size 2xl
4. **Code/Monospace**: Not used

---

## Spacing & Layout

- **Section Padding**: py-20 md:py-32 (80px/128px vertical)
- **Container Max Width**: 7xl (1280px)
- **Grid Gaps**: 8-12 (32px-48px)
- **Card Padding**: p-6 to p-8 (24px-32px)
- **Mobile-First**: All layouts start mobile and expand

---

## Animations & Interactions

### With Motion Allowed:
- Fade-up on scroll (AOS)
- Countdown number flip animation
- Card hover lift (translateY -5px)
- Team card 3D flip
- Navbar smooth opacity transition
- Gold glow pulse on hero title
- Button scale on hover (1.05)

### Reduced Motion Mode:
- All animations disabled
- Instant state changes
- No transforms
- Static team cards with tap-to-toggle

---

## Accessibility Features

1. **Semantic HTML**: nav, main, section, footer, article
2. **ARIA**: Labels, roles, expanded states
3. **Keyboard Navigation**: Full tab support, focus indicators
4. **Skip Link**: Jump to main content
5. **Alt Text**: All images (placeholders noted)
6. **Color Contrast**: WCAG AA compliant
7. **Motion Respect**: prefers-reduced-motion detection
8. **Screen Readers**: Descriptive labels and hidden text

---

## Responsive Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px
- **Large Desktop**: > 1280px

All sections use mobile-first design with progressive enhancement.

---

## Performance Optimizations

1. **Tailwind JIT**: Generates only used classes
2. **CSS Purge**: Removes unused styles in production
3. **Lazy Loading**: Images load on scroll
4. **Minimal JS**: ~300 lines vanilla JavaScript
5. **AOS Library**: Only dependency for animations
6. **GPU Acceleration**: will-change on animated elements
7. **Autoprefixer**: Vendor prefix automation

---

## Placeholders to Replace

### Required Updates Before Launch:

1. **Event Date**: Update `EVENT_DATETIME` in `main.js` (line 12)
2. **Registration URL**: Update `REGISTER_URL` in `main.js` (line 15)
3. **Secretary General Message**: Replace placeholder text in `index.html` (lines 195-215)
4. **Secretary General Photo**: Add image at `public/images/team/secretary-general.jpg`
5. **Team Photos**:
   - `public/images/team/pavan.jpg`
   - `public/images/team/avila.jpg`
6. **MUN Logo**: Add at `public/images/logos/munsoc-logo.png` (or .svg)
7. **OG Image**: Add social media image at `public/images/og-image.jpg` (1200x630px)
8. **Favicon**: Add at `public/images/icons/favicon.ico`
9. **Study Guide PDFs**: Add download links in Study Guides section
10. **Google Analytics**: Uncomment and add tracking ID in `index.html` (lines 28-35)

### Optional Additions:
- Gallery images (section has "Coming Soon" placeholder)
- Hero background image (currently using grid pattern)
- Additional committee emblems/logos

---

## File Size Estimates

- **HTML**: ~40KB (uncompressed)
- **CSS** (production): ~15-20KB (minified + purged)
- **JavaScript**: ~12KB (uncompressed)
- **AOS Library**: ~10KB (from CDN)
- **Total** (without images): ~70-80KB

---

## Browser Testing Checklist

- [x] Chrome (desktop & mobile)
- [x] Firefox (desktop & mobile)
- [x] Safari (desktop & iOS)
- [x] Edge (desktop)
- [x] Samsung Internet (mobile)

---

## Deployment Recommendations

1. **Hosting**: Netlify or Vercel (automatic HTTPS, CDN)
2. **Domain**: Connect custom domain (svcemun.com)
3. **Analytics**: Enable Google Analytics
4. **CDN**: Use for images (Cloudinary or ImgIx)
5. **Monitoring**: Set up Lighthouse CI for performance tracking

---

## Post-Launch Optimizations

1. Add WebP image format with fallbacks
2. Implement service worker for offline support
3. Add meta tags for better SEO
4. Set up form submission backend for contact
5. Consider adding a blog/news section
6. Implement dark mode toggle (currently always dark)

---

## Version History

**v1.0.0** - Initial rebuild
- Modern dark theme implementation
- Full responsive design
- Accessibility compliance
- Production-ready static site
- All 12 sections complete
- Interactive features operational

---

Last Updated: 2026-11-09
Maintained by: SVCE Speakers' Forum
