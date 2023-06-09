/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line import/no-extraneous-dependencies
const plugin = require("tailwindcss/plugin");

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#514A92",
          dark: "#3E3870",
          darkest: "#29264b",
          light: "#9087DE",
          lightest: "#D2CFF2",
        },
        secondary: {
          DEFAULT: "#BD923D",
          dark: "#8E6E2E",
          darkest: "#604B1F",
          light: "#CEAC69",
          lightest: "#DFC89B",
        },
        neutral: {
          DEFAULT: "#979AA2",
          dark: "#595D68",
          darkest: "#32373D",
          light: "#D9D9D9",
          lightest: "#F5F5F5",
        },
      },

      fontFamily: {
        cinzel: ["Cinzel Decorative", "cursive"],
        ibarra: ["Ibarra Real Nova", "serif"],
      },

      fontSize: {
        "btn-mobile": [
          "0.875rem",
          { lineHeight: "1.714", letterSpacing: "0.032em", fontWeight: "700" },
        ],
        "btn-desktop": [
          "1.5rem",
          { lineHeight: "1.5", letterSpacing: "0.032em", fontWeight: "700" },
        ],
        "2xs": [
          "0.5rem",
          { lineHeight: "2", letterSpacing: "0", fontWeight: "400" },
        ],
        xs: [
          "0.75rem",
          { lineHeight: "1.333", letterSpacing: "0", fontWeight: "400" },
        ],
        sm: [
          "0.875rem",
          { lineHeight: "1.714", letterSpacing: "0", fontWeight: "400" },
        ],
        base: [
          "1rem",
          { lineHeight: "1.75", letterSpacing: "0", fontWeight: "400" },
        ],
        lg: [
          "1.5rem",
          { lineHeight: "1.5", letterSpacing: "0", fontWeight: "400" },
        ],
        xl: [
          "2.25rem",
          { lineHeight: "1.333", letterSpacing: "0", fontWeight: "400" },
        ],
        "2xl": [
          "2.625rem",
          { lineHeight: "1.333", letterSpacing: "0.032em", fontWeight: "700" },
        ],
        "3xl": [
          "3.5rem",
          { lineHeight: "1.143", letterSpacing: "0", fontWeight: "400" },
        ],
        "4xl": [
          "5rem",
          { lineHeight: "1", letterSpacing: "0.032em", fontWeight: "700" },
        ],
        "5xl": [
          "7.5rem",
          { lineHeight: "1.333", letterSpacing: "0.032em", fontWeight: "700" },
        ],
      },
    },
  },
  plugins: [
    // eslint-disable-next-line func-names
    plugin(function ({ addUtilities }) {
      addUtilities({
        ".my-rotate-180": {
          transform: "rotateY(180deg)",
        },
        ".preserve-3d": {
          transformStyle: "preserve-3d",
        },
        ".perspective": {
          perspective: "1000px",
        },
        ".backface-hidden": {
          backfaceVisibility: "hidden",
        },
      });
    }),
  ],
};
