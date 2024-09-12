/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'background-top': "url('./assets/background-pattern-desktop.svg')",
      },
      fontFamily: {
        display: ['"Work Sans"', 'sans-serif'], // Adds a new `font-display` class
      },
    },
  },
  plugins: [],
}
