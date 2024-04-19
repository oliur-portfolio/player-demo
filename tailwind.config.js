/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        manrope: ['"Manrope"', ...defaultTheme.fontFamily.sans],
        rubik: ['"RubikOne-Regular"', ...defaultTheme.fontFamily.sans],
        inter: ["Inter", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        "custom-black-dark": "#1E1822",
        "custom-black": "#1A151E",
        "custom-black-900": "#352A3C",
        "custom-black-200": "rgba(20, 15, 46, 0.2)",
        "custom-black-700": "rgba(31, 25, 36, 0.7)",
        "custom-black-mute": "#392E42",
        "custom-white": "#fff",
        "custom-white-500": "rgba(255, 255, 255, 0.5)",
        "custom-purple-mute": "#846996",
        "custom-purple": "#DE3DFF",
        "custom-purple-hover": "#c400eb",
        "custom-purple-500": "#BF86F9",
        "custom-purple-200": "#CEC3D5",
        "custom-green": "#90FB6A",
        "custom-black": "#1A151E",
        "custom-black-200": "rgba(20, 15, 46, 0.2)",
        "custom-black-mute": "#392E42",
        "custom-white": "#fff",
        "custom-purple": "#DE3DFF",
        "custom-purple-hover": "#c400eb",
        "custom-purple-500": "#BF86F9",
        "custom-purple-200": "#CEC3D5",
      },
      screens: {
        sm: { max: "999px" },
        md: { min: "1000px", max: "1200px" },
        lg: { min: "1201px" },
      },
    },
  },
  plugins: [require("@tailwindcss/custom-forms")],
};
