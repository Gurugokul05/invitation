/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        maroon: {
          DEFAULT: '#6B0F1A',
          deep: '#4A0A12',
          soft: '#8A1B28',
        },
        kumkum: '#B3122D',
        turmeric: '#E8B923',
        gold: {
          DEFAULT: '#C9A227',
          light: '#E4C868',
          dark: '#9A7A17',
        },
        cream: {
          DEFAULT: '#FFF8E7',
          dark: '#F6EAD2',
          deeper: '#EEDFBF',
        },
        leaf: '#2F6B3A',
        ink: '#2A1215',
      },
      fontFamily: {
        heading: ['"Noto Serif Tamil"', 'serif'],
        body: ['"Mukta Malar"', 'sans-serif'],
        display: ['Cinzel', 'serif'],
      },
      letterSpacing: {
        widest2: '0.28em',
      },
      boxShadow: {
        lamp: '0 0 40px rgba(232, 185, 35, 0.55)',
        card: '0 10px 30px -12px rgba(107, 15, 26, 0.35)',
        gold: '0 0 0 1px rgba(201, 162, 39, 0.45), 0 8px 24px -14px rgba(107, 15, 26, 0.45)',
      },
      keyframes: {
        flicker: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '35%': { opacity: '0.82', transform: 'scale(0.965)' },
          '60%': { opacity: '0.94', transform: 'scale(1.02)' },
          '80%': { opacity: '0.86', transform: 'scale(0.985)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '200% center' },
          '100%': { backgroundPosition: '-200% center' },
        },
        floaty: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        sway: {
          '0%, 100%': { transform: 'rotate(-2deg)' },
          '50%': { transform: 'rotate(2deg)' },
        },
        glow: {
          '0%, 100%': { opacity: '0.45' },
          '50%': { opacity: '0.9' },
        },
      },
      animation: {
        flicker: 'flicker 2.6s ease-in-out infinite',
        shimmer: 'shimmer 5s linear infinite',
        floaty: 'floaty 5s ease-in-out infinite',
        sway: 'sway 6s ease-in-out infinite',
        glow: 'glow 3.4s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
