/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        brand: {
          dark: '#0a0a0a',
          light: '#f5f5f7',
          accent: '#988864', // Polanco gold
        }
      }
    },
  },
  plugins: [],
}
