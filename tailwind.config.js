/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary:'#FFFFFF',
        secondary:'#951B24',
        turiary:'#EEEEEE',
      }
    },
  },
  plugins: [],
}

