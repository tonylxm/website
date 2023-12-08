/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#151030",
        secondary: "#362978",
        tertiary: "#9e97bf",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #423c66",
      },
      screens: {
        xs: "450px",
      },
    },
  },
  plugins: [],
};