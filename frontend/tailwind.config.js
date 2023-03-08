/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: [
    // Example content paths...
    "./public/**/*.html",
    "./src/**/*.{js,jsx,ts,tsx,vue}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Poppins: ["Poppins", "sans"],
        Montserrat: ["Montserrat"],
        Gloock: ["Gloock"],
      },
      colors: {
        navbar: "#181819",
      },
      height: {
        hero: "60vh",
      },
      width: {
        loginWidth: "40rem",
      },
    },
  },

  plugins: [],
};
