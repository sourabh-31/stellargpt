/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        customBlue: "#19a5ff",
        customDarkBlue: "#0b132a",
        navBarBg: "#1c1c1c",
        hoverBg: "#262626",
        bodyBg: "#020105",
        bodyText: "#5b5b5b",
        benefitBox: "#1c1c1c",
      },
      fontFamily: {
        lexend: ["Lexend", "sans-serif"],
      },
    },
  },
  plugins: [],
};
