/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Lexend Deca', 'sans-serif'],
        heading: ['Big Shoulders Display', 'sans-serif'],
      },

      colors: {
        'bright-orange': 'hsl(31,77%,52%)',
        'dark-cyan': 'hsl(184,100%,22%)',
        'very-dark-cyan': 'hsl(179,100%,13%)',
        'very-light-gray': 'hsl(0,0%,95%)',
      },
    },
  },
  plugins: [],
}
