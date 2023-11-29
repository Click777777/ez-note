/** @type {import('tailwindcss').Config} */
export default {
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
      container: {
        screens: {
          xxs: "100%", // Override for xxs screen size
          xs: "100%", // Override for xs screen size
          "3xl": "100%", // Override for 3xl screen size
        },
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
