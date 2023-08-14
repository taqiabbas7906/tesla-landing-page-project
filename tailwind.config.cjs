/** @type {import('tailwindcss').Config} */
export default {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        accent: {
          400: "#E51837",
          300: "#BEBEBE",
        },
        primary: {
          800: "#212121",
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
      fontWeight: {
        regular: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
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
