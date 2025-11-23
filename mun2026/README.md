# SVCE MUN 2026 - Official Website

A modern, responsive, and accessible static website for SVCE MUN 2026 conference. Built with TailwindCSS, vanilla JavaScript, and designed with a dark theme featuring deep maroon and gold accents.

## Features

- **Modern Dark Theme**: SRMV-inspired design with deep maroon (#330000) and gold (#FFD97D) accents
- **Fully Responsive**: Mobile-first design that works seamlessly on all devices
- **Accessible**: WCAG AA compliant with semantic HTML, ARIA labels, and keyboard navigation
- **Performance Optimized**: Tailwind JIT mode, lazy loading, and minimal dependencies
- **Interactive**: Live countdown timer, smooth animations, and engaging UI components
- **Production Ready**: Optimized build process with minification and autoprefixer

## Tech Stack

- **HTML5**: Semantic markup
- **TailwindCSS 3.4**: Utility-first CSS framework with custom design tokens
- **Vanilla JavaScript**: No frameworks, pure ES6+ JavaScript
- **AOS.js**: Scroll animations (optional, respects prefers-reduced-motion)
- **PostCSS**: CSS processing with autoprefixer
- **Live Server**: Development server

## Project Structure

```
mun-rebuild/
├── public/
│   ├── images/
│   │   ├── logos/           # Logo files (SVG/PNG)
│   │   ├── backgrounds/     # Hero and section backgrounds
│   │   ├── team/            # Team member photos
│   │   ├── gallery/         # Event photos (optional)
│   │   └── icons/           # Favicons
│   └── output.css           # Generated Tailwind CSS (after build)
├── src/
│   ├── index.html           # Main HTML file
│   ├── styles.css           # Tailwind input file
│   └── main.js              # JavaScript functionality
├── tailwind.config.js       # Tailwind configuration
├── postcss.config.js        # PostCSS configuration
├── package.json             # Dependencies and scripts
├── .gitignore              # Git ignore rules
├── CHANGELOG.md            # Design decisions and changes
└── README.md               # This file
```

## Getting Started

### Prerequisites

- **Node.js** (v14 or higher)
- **npm** (v6 or higher)

### Installation

1. Clone or download this repository:
```bash
cd mun-rebuild
```

2. Install dependencies:
```bash
npm install
```

### Development

Run the development server with live CSS compilation:

```bash
npm run dev
```

This will:
- Start a live server at `http://localhost:3000`
- Watch for CSS changes and rebuild automatically
- Auto-refresh browser on file changes

The site will open automatically in your default browser.

### Building for Production

Build the optimized production CSS:

```bash
npm run build
```

This will:
- Generate minified CSS in `public/output.css`
- Purge unused Tailwind classes
- Add vendor prefixes with autoprefixer

### Preview Production Build

After building, preview the production version:

```bash
npm start
```

## Configuration

### Event Date & Time

Update the event date in `src/main.js`:

```javascript
const CONFIG = {
    EVENT_DATETIME: '2026-09-19T09:00:00+05:30',  // Change this
    REGISTER_URL: 'https://forms.google.com/...',  // Change this
};
```

### Registration URL

Update the registration form URL in `src/main.js` (line 13):
- Replace with your actual Google Form or registration page URL
- This URL is used by all "Register Now" buttons

### Google Analytics

Uncomment and add your tracking ID in `src/index.html` (lines 28-35):

```html
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_TRACKING_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_TRACKING_ID');  // Replace with your ID
</script>
```

### Images

Replace placeholder images in `public/images/`:

1. **Logo**: `public/images/logos/munsoc-logo.png` (or .svg)
2. **Secretary General**: `public/images/team/secretary-general.jpg`
3. **Team Photos**:
   - `public/images/team/pavan.jpg`
   - `public/images/team/avila.jpg`
4. **Favicon**: `public/images/icons/favicon.ico`
5. **OG Image** (social media): `public/images/og-image.jpg` (1200x630px recommended)

### Content Updates

Update content directly in `src/index.html`:

- **Secretary General Message**: Section with `id="about"` (lines 185-230)
- **Committee Information**: Section with `id="committees"` (lines 360-490)
- **Study Guide PDFs**: Add download links in Study Guides section (lines 850-920)

## Deployment

### Option 1: Netlify (Recommended)

1. Push your code to GitHub/GitLab
2. Connect repository to Netlify
3. Build settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `src`
4. Deploy!

### Option 2: Vercel

1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow prompts

### Option 3: GitHub Pages

1. Build the project: `npm run build`
2. Push to GitHub
3. Enable GitHub Pages in repository settings
4. Set source to `main` branch, `/src` folder

### Option 4: Manual Deployment

1. Build: `npm run build`
2. Upload the following to your server:
   - `src/index.html`
   - `src/main.js`
   - `public/output.css`
   - `public/images/`

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

**Note**: IE11 is not supported.

## Accessibility Features

- ✅ Semantic HTML5 elements
- ✅ ARIA labels and roles
- ✅ Keyboard navigation support
- ✅ Focus indicators
- ✅ Screen reader friendly
- ✅ Respects `prefers-reduced-motion`
- ✅ WCAG AA color contrast
- ✅ Skip-to-content link

## Performance

- **Lighthouse Score Target**: 90+ across all metrics
- **Optimizations**:
  - Tailwind CSS purging removes unused styles
  - Lazy loading for images
  - Minimal JavaScript bundle
  - AOS animations respect motion preferences
  - GPU-accelerated animations

## Customization

### Colors

Edit `tailwind.config.js` to change colors:

```javascript
colors: {
  'deep-maroon': '#330000',
  'main-black': '#0E0E0E',
  'gold': '#FFD97D',
  // ... add more colors
}
```

### Fonts

Change fonts in `tailwind.config.js`:

```javascript
fontFamily: {
  'heading': ['Cinzel', 'Playfair Display', 'serif'],
  'body': ['Inter', 'sans-serif'],
}
```

Don't forget to update the Google Fonts link in `index.html`.

## Troubleshooting

### CSS not updating
- Ensure `npm run dev` is running
- Check that `src/styles.css` has Tailwind directives
- Clear browser cache

### Images not showing
- Check file paths are correct
- Ensure images exist in `public/images/`
- Use relative paths from project root

### Countdown not working
- Verify date format in `main.js` is correct (ISO 8601)
- Check browser console for errors
- Ensure timezone is set correctly (+05:30 for IST)

## Testing Checklist

- [ ] Responsive layout on mobile/tablet/desktop
- [ ] All navigation links work
- [ ] Countdown timer updates correctly
- [ ] FAQ accordion expands/collapses
- [ ] Team cards flip on hover (desktop) / tap (mobile)
- [ ] Itinerary tabs switch correctly
- [ ] Registration buttons link to correct URL
- [ ] All images load with alt text
- [ ] Keyboard navigation works
- [ ] No console errors
- [ ] Lighthouse score > 90

## Support

For issues or questions:
- **Email**: sf@svce.ac.in
- **Instagram**: [@sf_svce](https://instagram.com/sf_svce)

## License

MIT License - feel free to use this template for your own MUN conferences!

## Credits

**Developed for**: SVCE Speakers' Forum
**Conference**: SVCE MUN 2026
**Theme**: Modern dark theme inspired by SRMV
**Built with**: TailwindCSS, Vanilla JS, and dedication

---

Made with dedication for SVCE MUN 2026 | Aspire. Act. Achieve.
