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
      colors: {
        'cetacean-blue': '#00153d',
        'tart-orange': '#ff4949',
        'maastricht-blue': '#001329',
        'alice-blue': '#ebf2ff',
        cultured: '#f3f6f7',
      },
    },
  },
  plugins: [],
};
