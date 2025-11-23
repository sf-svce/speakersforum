/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}"
  ],
  theme: {
    extend: {
      colors: {
        // Vintage Royal Maroon-Gold Palette
        'deep-maroon': '#320000',
        'maroon-dark': '#1A0000',
        'maroon-medium': '#400000',
        'maroon-card': '#2A0000',
        'maroon-footer': '#200000',
        'maroon-section': '#2B0000',
        'accent-gold': '#F5D47A',
        'light-gold': '#FFE9A9',
        'button-gold-start': '#F5D47A',
        'button-gold-end': '#C9A54A',
        'parchment': '#EAD9B5',
        'muted-gold': '#D6C5A0',
        'border-gold': 'rgba(245, 212, 122, 0.3)',

        // Legacy aliases for backward compatibility
        'main-black': '#320000',
        'gold': '#F5D47A',
        'light-text': '#EAD9B5',
        'muted-text': '#D6C5A0',
        'border-glow': 'rgba(245, 212, 122, 0.3)',
      },
      fontFamily: {
        'heading': ['Cormorant Garamond', 'Cinzel Decorative', 'serif'],
        'display': ['Playfair Display SC', 'Cormorant Garamond', 'serif'],
        'body': ['Lora', 'Cormorant Garamond', 'serif'],
        'signature': ['Playfair Display', 'cursive'],
      },
      boxShadow: {
        'gold-glow': '0 3px 15px rgba(245, 212, 122, 0.4)',
        'gold-glow-lg': '0 5px 25px rgba(245, 212, 122, 0.5)',
        'text-gold': '0 2px 8px rgba(245, 212, 122, 0.3)',
        'card': '0 4px 20px rgba(0, 0, 0, 0.6)',
        'card-hover': '0 8px 30px rgba(245, 212, 122, 0.25)',
        'vignette': 'inset 0 0 120px rgba(0,0,0,0.7)',
        'button-glow': '0 3px 15px rgba(245, 212, 122, 0.4)',
      },
      backgroundImage: {
        'maroon-gradient': 'linear-gradient(180deg, #400000 0%, #1A0000 100%)',
        'gold-button': 'linear-gradient(180deg, #F5D47A 0%, #C9A54A 100%)',
        'wave-pattern': 'repeating-radial-gradient(circle at 50% 50%, rgba(255,255,255,0.03) 0, rgba(255,255,255,0.03) 1px, transparent 1px, transparent 100%)',
        'hero-gradient': 'linear-gradient(180deg, #400000 0%, #2A0000 50%, #1A0000 100%)',
        'grid-pattern': 'repeating-radial-gradient(circle at 50% 50%, rgba(255,255,255,0.02) 0, rgba(255,255,255,0.02) 1px, transparent 1px, transparent 100%)',
        'maroon-vignette': 'radial-gradient(ellipse at top, rgba(64, 0, 0, 0.5) 0%, transparent 60%)',
        'section-divider': 'linear-gradient(90deg, transparent, #F5D47A, transparent)',
      },
      backgroundSize: {
        'grid': '60px 60px',
        'pattern': '80px 80px',
      },
      backdropBlur: {
        'xs': '2px',
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease-out',
        'fade-in': 'fadeIn 0.4s ease-out',
        'glow-pulse': 'glowPulse 2s ease-in-out infinite',
        'flip-number': 'flipNumber 0.4s ease-out',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        glowPulse: {
          '0%, 100%': { textShadow: '0 2px 12px rgba(245, 212, 122, 0.5)' },
          '50%': { textShadow: '0 2px 20px rgba(245, 212, 122, 0.8)' },
        },
        flipNumber: {
          '0%': { transform: 'rotateX(0deg)' },
          '50%': { transform: 'rotateX(90deg)' },
          '100%': { transform: 'rotateX(0deg)' },
        },
      },
      textShadow: {
        'gold': '0 2px 8px rgba(245, 212, 122, 0.3)',
        'gold-lg': '0 3px 15px rgba(245, 212, 122, 0.5)',
      },
    },
  },
  plugins: [],
  future: {
    hoverOnlyWhenSupported: true,
  },
}
