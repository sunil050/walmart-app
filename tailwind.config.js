/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        bogle: ["Bogle", "sans-serif"], // Ensure the font name matches your import
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".scrollbar-hide": {
          /* For WebKit browsers */
          "-webkit-overflow-scrolling": "touch",
          "scrollbar-width": "none", // Firefox
          "-ms-overflow-style": "none", // IE and Edge
        },
        ".scrollbar-hide::-webkit-scrollbar": {
          display: "none", // Safari and Chrome
        },
      });
    },
  ],
};
