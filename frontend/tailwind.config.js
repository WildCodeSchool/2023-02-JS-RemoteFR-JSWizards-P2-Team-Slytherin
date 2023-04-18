/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#514A92",
        primaryDark: "#3E3870",
        primaryDarkest: "#29264b",
        primaryLight: "#9087DE",
        primaryLightest: "#D2CFF2",

        secondary: "#BD923D",
        secondaryDark: "#8E6E2E",
        secondaryDarkest: "604B1F",
        secondaryLight: "#CEAC69",
        secondaryLightest: "#DFC89B",

        darkest: "#32373D",
        dark: "#595D68",
        neutral: "#979AA2",
        light: "#D9D9D9",
        lightest: "#F5F5F5",
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
          "1rem",
          {
            lineHeight: "1.75",
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
