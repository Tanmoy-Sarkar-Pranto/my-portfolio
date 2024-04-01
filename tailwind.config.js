/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        bellefair: ["Bellefair", "serif"],
        pixelifySans: ["Pixelify Sans", "sans-serif"],
        titilliumWeb: ["Titillium Web", "sans-serif"],
      },
    },
  },
  plugins: [],
}
