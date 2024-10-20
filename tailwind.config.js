/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      tn: "384px",
      xxs: "480px",
      xs: "576px",
      sm: "768px",
      md: "992px",
      lg: "1200px",
      xl: "1400px",
      xxl: "1920px",
      xxxl: "3000px",
      max: "100000px",
    },
  },
  plugins: [],
};
