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
      fontSize: {
        heroText: "5rem",
      },
      backgroundImage: {
        heroGradient:
          "linear-gradient(160deg, rgba(0,0,0,1) 40%, rgba(83,46,163,1) 75%, rgba(255,205,255,1) 100%)",
        benefitBoxGradient:
          "linear-gradient(90deg, rgba(10,10,9,1) 40%, rgba(28,28,28,1) 100%)",
      },
      width: {
        heroCube: "30rem",
        benefitBox: "40%",
      },
      borderRadius: {
        benefitBox: "50px 50px 25px 25px",
      },
    },
  },
  plugins: [],
};
