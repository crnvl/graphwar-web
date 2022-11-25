/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "custom": {
          "100": "#222831",
          "200": "#393E46",
          "300": "#00ADB5",
          "400": "#EEEEEE",
        },
      }
    },
  },
  plugins: [],
}
