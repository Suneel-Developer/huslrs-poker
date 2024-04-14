/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "red_500": "#ff0000",
        "border_red": "#FF0000",
      },
      backgroundColor: {
        "header-bg": "rgba(0, 0, 0, 0.8)",
        "email-input": "rgba(91,91,91)",
      },

      screens: {
        xsm: "468px",
        xmd: "924px",
        xlg: "1124px",
      },
    },
  },
  plugins: [],
};
