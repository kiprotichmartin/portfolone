/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        platinum: "#E7E7E7ff",
        mustard: "#F3CD49ff",
        "rose-pompadour": "#E7788Bff",
        "african-violet": "#9381BBff",
        "eerie-black": "#1B1B1Bff",
        mint: "#55BF99ff",
        moonstone: "#66AEC6ff",
      },
      fontFamily: {
        Quicksand: ["Quicksand", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
