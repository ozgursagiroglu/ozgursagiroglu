const { fontFamily } = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', ...fontFamily.sans],
        inter: ['var(--font-inter)', ...fontFamily.sans],
        inconsolata: ['var(--font-inconsolata)', ...fontFamily.sans],
      },
      keyframes: {
        sayHello: {
          '0%, 100%': {
            transform: 'scale(1)',
          },
          '50%': {
            transform: 'scale(1.3)',
          },
        },
      },
      animation: {
        sayHello: 'sayHello 1s ease forwards',
      },
      transitionDelay: {
        400: '400ms',
      },
      colors: {
        'cetacean-blue': '#00153d',
        'tart-orange': '#ff4949',
        'maastricht-blue': '#001329',
        'alice-blue': '#ebf2ff',
        cultured: '#f3f6f7',
      },
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
};
