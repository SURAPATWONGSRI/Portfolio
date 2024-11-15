/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'portfolio-primary': '#242424',
        'portfolio-secondary': '#2F2F2F',
      },
    },
  },
  daisyui: {
    themes: ['autumn', 'forest'],
  },
  // eslint-disable-next-line no-undef
  plugins: [require('daisyui')],
}
