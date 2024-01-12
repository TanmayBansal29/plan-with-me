/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        '3xl': '0 10px 15px -3px rgb(0 0 0 / 0.24)'
      }
    },
  },
  plugins: [],
}

