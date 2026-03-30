/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        sage: {
          light: '#a8c4b0',
          DEFAULT: '#7a9e87',
          dark: '#4e7260',
        },
        gold: {
          light: '#d4b57e',
          DEFAULT: '#b8975a',
        },
        blue: {
          muted: '#6b87a8',
        },
        bg: {
          primary: '#f4f3ee',
          secondary: '#eceae1',
          tertiary: '#e3e0d4',
        },
        text: {
          primary: '#2a2a27',
          muted: '#7a7a6e',
          light: '#a5a598',
        },
      },
      fontFamily: {
        playfair: ['Playfair Display', 'serif'],
        inter: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}