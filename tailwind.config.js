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
    "float-right",
    "float-left",
    "grid", "grid-cols-2", "grid-cols-3", "col-span-2",
    "gap-4",
    "flex", "flex-col", "flex-row",
    "flex-wrap",
    "basis-1/3", "basis-2/3",
  ],
  variants: {
    extend: {},
  },
  // plugins: [require("@tailwindcss/typography")],
};
