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
        helpBox: "#161c22",
        footerBorder: "#262626",
        footerText: "#b3b3b3",
        loginBg: "#1a1a1a",
        insideBg: "#1b1b1b",
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
        heroCube: "33rem",
        benefitBox: "40%",
        helpBox: "36%",
        accountBox: "77%",
        loginInput: "28rem",
        loginBtn: "32rem",
      },
      height: {
        helpBox: "56rem",
        footer: "65vh",
      },
      borderRadius: {
        benefitBox: "50px 50px 25px 25px",
        helpBox: "25px 50px 25px 50px",
      },
    },
  },
  plugins: [],
};
