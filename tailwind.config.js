/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", ...defaultTheme.fontFamily.sans],
        rubik: ["var(--font-rubik)", ...defaultTheme.fontFamily.sans],
      },
      width: {
        1.125: "1.125rem",
      },
      height: {
        1.125: "1.125rem",
      },
      container: {
        center: true,
      },
      colors: {
        "neem-dark": {
          300: "#9DA7BE",
          500: "#263446",
        },
        "neem-accent": {
          500: "#70C4BB",
        },
        "neem-gray": {
          300: "#F8F9FB",
          500: "#EFF1F5",
        },
      },
    },
  },
  plugins: [],
};
