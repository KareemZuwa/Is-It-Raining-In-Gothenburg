/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'xxs': '440px',
      'xs': '600px',
      ...defaultTheme.screens,
    },
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans'],
      },
    },
  },
  plugins: [require('tailwindcss-animated')
],
}