/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'primary': '#101626',
      'secondary': '#ECF1F3',
      'accent': '#92D79A',
      'warning': '#DB4450'
      
    },
    fontFamily: {
      'sans': ['Cascadia Code PL', 'sans-serif']
    },
    extend: {},
  },
  plugins: [],
  darkMode: 'class'
}

