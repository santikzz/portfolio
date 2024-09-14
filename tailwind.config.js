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
      },
      backgroundImage: {
        'gradient': 'linear-gradient(90deg, rgba(92,81,224,1) 0%, rgba(234,12,185,1) 100%)',
      },
    },
  },
  plugins: [],
}

