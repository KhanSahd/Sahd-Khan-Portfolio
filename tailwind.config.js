/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        main: ['poppins'],
      },
      backgroundImage: {
        hero: "url('../src/assets/hero.jpg')",
      },
    },
  },
  plugins: [],
};
