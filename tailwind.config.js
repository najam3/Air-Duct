/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0069ab',
        secondary: '#9fc93b',
        neutral400: '#868686',
        neutral300: '#e1e1e1',
        neutral200: '#ebebeb',
        neutral100: '#e5e5e5',
        neutral50: '#e1e1e1',
        primary08: '#003b60e3'
      },
      lineHeight: {
        primary: '30px'
      }
    },
  },
  plugins: [],
}