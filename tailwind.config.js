/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        black: '#000000',
        purple: {
          300: '#d8b4fe',
          400: '#c084fc',
          500: '#a855f7',
          600: '#9333ea',
          900: '#3f0f5c',
        },
        pink: {
          300: '#f9a8d4',
          400: '#f472b6',
          500: '#ec4899',
          600: '#db2777',
          900: '#500724',
        },
        cyan: {
          300: '#22d3ee',
          400: '#06b6d4',
          500: '#0891b2',
          600: '#0e7490',
        },
        blue: {
          600: '#2563eb',
          900: '#1e3a8a',
        },
      },
      animation: {
        'fade-in': 'fade-in 0.8s ease-out forwards',
        'speaker-pulse': 'speaker-pulse 4s ease-in-out infinite',
        'glow-mushroom': 'glow-mushroom 4s ease-in-out infinite',
      },
      keyframes: {
        'fade-in': {
          from: {
            opacity: '0',
            transform: 'translateY(20px)',
          },
          to: {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        'speaker-pulse': {
          '0%, 100%': {
            boxShadow:
              '0 0 20px rgba(168, 85, 247, 0.3), 0 0 40px rgba(168, 85, 247, 0.2)',
          },
          '50%': {
            boxShadow:
              '0 0 30px rgba(168, 85, 247, 0.5), 0 0 60px rgba(168, 85, 247, 0.3)',
          },
        },
        'glow-mushroom': {
          '0%, 100%': {
            filter: 'drop-shadow(0 0 10px rgba(168, 85, 247, 0.5))',
          },
          '50%': {
            filter: 'drop-shadow(0 0 20px rgba(168, 85, 247, 0.8))',
          },
        },
      },
      backdropBlur: {
        sm: '4px',
      },
      boxShadow: {
        glow: '0 0 20px rgba(168, 85, 247, 0.5)',
      },
    },
  },
  plugins: [],
};