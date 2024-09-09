/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Outfit', 'ui-sans-serif', 'system-ui'],
        serif: ['Young Serif', 'ui-serif', 'Georgia'],
      },
      colors: {
        roseTitle: '#a1496f',
      },
    },
  },
  plugins: [],
}
