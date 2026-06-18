/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'satoshi': ['satoshi', 'sans-serif'],
        'Bebauneue': ['Bebasneue', 'sans-serif'],
      }
    },
  },
  plugins: [],
}