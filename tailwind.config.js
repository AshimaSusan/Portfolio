/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: {
          light: '#fdfbf7', // beige-ish soft white
          dark: '#121212',
        },
        primary: {
          light: '#2a2a2a', // soft black
          dark: '#f1f1f1',
        },
        secondary: {
          light: '#6b7280', // muted grey
          dark: '#a1a1aa',
        },
        accent: {
          light: '#e6dfd1', // soft beige
          dark: '#2d2d2d',
        }
      },
      fontFamily: {
        sans: ['Quicksand', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
