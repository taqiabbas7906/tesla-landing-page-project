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
    },
  },
  plugins: [],
};
