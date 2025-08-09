/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        habeshaGold: "#e5c07b",
        habeshaRed: "#e06c75",
        habeshaGreen: "#98c379",
        habeshaBlue: "#56b6c2"
      },
      fontFamily: {
        habesha: ['"Noto Sans Ethiopic"', 'sans-serif']
      }
    }
  },
  plugins: []
}