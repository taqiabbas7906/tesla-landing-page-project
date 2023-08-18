/** @type {import('tailwindcss').Config} */
export default {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        heroSection: "url(./images/Background.jpg)",
        S: "url(./images/Model S.svg)",
        3: "url(./images/Model 3.svg)",
        X: "url(./images/Model X.svg)",
        Y: "url(./images/Model Y.svg)",
      },
      container: {
        center: true,
        screens: {
          sm: "90vw",
          md: "820px",
          lg: "1080px",
          xl: "1180px",
        },
      },
      colors: {
        accent: {
          100: "#BEBEBE",
          200: "#3C3C3C",
          300: "#E51837",
        },
        primary: {
          300: "#212121",
          200: "rgba(0, 0, 0, 0.80)",
          100: "rgba(0, 0, 0, 0.20)",
        },
        neutral: {
          100: "#fafafa",
          200: "#3c3c3c",
        },
      },
      fontFamily: {
        primary: ["Montserrat", "sans-serif"],
        accent: ["gotham", "sans-serif"],
      },
      fontSize: {
        200: "0.5rem",
        300: "0.75rem",
        400: "1rem",
        500: "1.25rem",
        600: "1.875rem",
        700: "2rem",
        800: "2.5rem",
        900: "3rem",
        1000: "3.4375rem",
        1100: "4rem",
      },
    },
  },
  plugins: [],
};
