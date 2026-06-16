/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#0a1f3f', // Primary dark – main background
          light: '#0d2748', // Secondary dark – cards, sections
          deep: '#071730', // Deeper shade for gradients
        },
        gold: '#ffd700',
        'gold-bright': '#ffed4e',
        ink: {
          DEFAULT: '#ffffff',
          muted: '#e0e0e0',
        },
      },
      fontFamily: {
        sans: [
          'Inter',
          'Poppins',
          'system-ui',
          '-apple-system',
          'Segoe UI',
          'Roboto',
          'sans-serif',
        ],
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #ffd700 0%, #ffed4e 100%)',
        'navy-depth': 'linear-gradient(180deg, #0a1f3f 0%, #0d2748 100%)',
      },
      boxShadow: {
        card: '0 10px 30px -12px rgba(0, 0, 0, 0.55)',
        'card-hover': '0 18px 45px -12px rgba(255, 215, 0, 0.25)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.7s ease-out forwards',
      },
    },
  },
  plugins: [],
};
