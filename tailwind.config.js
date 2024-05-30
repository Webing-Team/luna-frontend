/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        main: ['Lexend'],
        neMain: ['Inter']
      },
      colors: {
        customGray: '#484848',
        customblackgarey: '#2E2E2E'
      },
    },
  },
  plugins: [],
}

