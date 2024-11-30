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
        secondary:'#9E1C28',
        turiary:'#EEEEEE',
      }
    },
  },
  plugins: [],
}

