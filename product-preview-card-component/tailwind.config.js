/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        ser: ['Fraunces', 'system-ui'],
        'sans-ser': ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
