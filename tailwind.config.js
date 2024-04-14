/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./build/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        manrope: ['"Manrope"', ...defaultTheme.fontFamily.sans],
        rubik: ['"RubikOne-Regular"', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        "custom-black": "#1A151E",
        "custom-black-200": "rgba(20, 15, 46, 0.2)",
        "custom-black-mute": "#392E42",
        "custom-white": "#fff",
        "custom-purple": "#DE3DFF",
        "custom-purple-hover": "#c400eb",
        "custom-purple-500": "#BF86F9",
        "custom-purple-200": "#CEC3D5",
      },
    },
  },
  plugins: [require("@tailwindcss/custom-forms")],
};
