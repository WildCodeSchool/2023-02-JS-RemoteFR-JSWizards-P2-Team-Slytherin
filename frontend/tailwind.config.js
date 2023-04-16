/** @type {import('tailwindcss').Config} */
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
          darkest: "604B1F",
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
        baskerville: ["Libre Baskerville", "serif"],
      },

      fontSize: {
        btn: [
          "1.5rem",
          {
            lineHeight: "2rem",
            letterSpacing: "0.05em",
            fontWeight: "700",
          },
        ],
        caption: [
          "0.75rem",
          {
            lineHeight: "1rem",
            letterSpacing: "0",
            fontWeight: "400",
          },
        ],
        xs: [
          "0.875rem",
          {
            lineHeight: "1.25rem",
            letterSpacing: "0",
            fontWeight: "400",
          },
        ],
        sm: [
          "1rem",
          {
            lineHeight: "1.5rem",
            letterSpacing: "0",
            fontWeight: "400",
          },
        ],
        base: [
          "1.25rem",
          {
            lineHeight: "2rem",
            letterSpacing: "0",
            fontWeight: "400",
          },
        ],
        baseBold: [
          "1.25rem",
          {
            lineHeight: "2rem",
            letterSpacing: "0",
            fontWeight: "700",
          },
        ],
        xl: [
          "2.5rem",
          {
            lineHeight: "3rem",
            letterSpacing: "0",
            fontWeight: "400",
          },
        ],
        "2xl": [
          "4rem",
          {
            lineHeight: "4.5rem",
            letterSpacing: "0",
            fontWeight: "400",
          },
        ],
        "3xl": [
          "8.75rem",
          {
            lineHeight: "10rem",
            letterSpacing: "0",
            fontWeight: "700",
          },
        ],
      },
    },
  },
  plugins: [],
};
