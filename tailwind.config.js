/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'akira': ['akira', 'sans-serif'],
        'satoshi-regular': ['satoshi-regular', 'sans-serif'],
        'satoshi-medium': ['satoshi-medium', 'sans-serif'],
        'satoshi-bold': ['satoshi-bold', 'sans-serif'],
        'satoshi-black': ['satoshi-black', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

