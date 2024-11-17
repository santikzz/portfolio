/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'grotesque-display': ['Grotesque Display', 'sans-serif'],
        'geist-mono': ['Geist mono', 'sans-serif'],
      },
      backgroundImage: {
        'gradient': 'linear-gradient(90deg, rgba(92,81,224,1) 0%, rgba(234,12,185,1) 100%)',
      },
    },
  },
  plugins: [],
}

