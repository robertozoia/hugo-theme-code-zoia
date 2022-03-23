module.exports = {
  content: ["./layouts/**/*.{html,js}"],
  // purge: ["./hugo-theme-code-zoia/**/*.html"],
  darkMode: "media", // or 'media' or 'class'
  theme: {
    extend: {
      width: {
        800: "800px",
      },
      fontFamily: {
        sans: ["Helvetica", "Arial", "sans-serif"],
      },
      textColor: {
        logoleft: "#fc6c0c",
        logoright: "#444444",
      },
    },
  },
  safelist: [
    'float-right',
    'float-left',
  ],
  variants: {
    extend: {},
  },
  // plugins: [require("@tailwindcss/typography")],
};
