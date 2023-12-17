// tailwind.config.js
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: "#0A1828",
        green: "#178582",
        gold: "#BFA181",
      },
      fontFamily: {
        Main: ["Lobster Two", "sans-serif"],
        Secondary: ["Sintony", "sans-serif"],
        Normal: ["Carme", "sans-serif"],
      },
      screens: {
        xxs: "320px",
        xs: "360px",
        "480px": "480px",
        "3xl": "1920px",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
