/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        darkerblack: "#18191a",
        lighterblack: "#242526",
        grey: "#3a3b3c",
        silver: "#e4e6eb",
        lightgrey: "#b0b3b8",
      },
      flexBasis: {
        "7/20": "35%",
      },
    },
  },
  plugins: [],
};
