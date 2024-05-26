/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      customGray: '#2E2E2E',
    },
    margin: {
      '44': '44px',
      '46': '46px',
      '200': '200px',
      '205': '205px',
    },
    gap: {
      '350': '350px',
     
    },
  },
  plugins: [],
}

