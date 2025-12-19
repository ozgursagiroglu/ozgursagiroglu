const { fontFamily } = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', ...fontFamily.sans],
      },
      colors: {
        'diojen-bg': '#f9fafb',
        'diojen-dark': '#1e293b',
        'diojen-orange': '#ea7d24',
        'diojen-muted': '#94a3b8',
      },
    },
  },
  plugins: [],
};
