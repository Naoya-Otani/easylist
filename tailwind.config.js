/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        gothicA1: ["var(--font-gothicA1)"],
        notoSans: ["var(--font-notoSansJP)"],
      },
      backgroundImage: {
        bgSearchbox: "url('/bgSearchbox.png')",
        bgSearchbar: "url('/bg_searchbar.webp')",
      },
      colors: {
        bgGray: "#F2F2F2",
        pastelPink: "#FCC2FC",
        pastelGreen1: "#C9F4AA",
        pastelGreen2: "#E5FDD1",
        pastelGreen3: "#B5F1CC",
        gradYellow: "#FFF95B",
        gradOrange: "#FF930F",
      },
    },
    fontWeight: {
      thin: "100",
      extralight: "200",
      light: "300",
      normal: "400",
      medium: "500",
      semibold: "600",
      bold: "700",
      extrabold: "800",
    },
    letterSpacing: {
      tightest: "-.075em",
      tighter: "-.05em",
      tight: "-.025em",
      normal: "0",
      wide: ".025em",
      wider: ".05em",
      widest: ".2em",
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("./plugins/chartRotateAnimation"),
    plugin(function ({ addUtilities }) {
      const newUtilities = {
        ".input-range": {
          "&::-webkit-slider-thumb": {
            appearance: "none",
            "aspect-ratio": "1",
            height: "16px",
            "background-color": "#eab308",
            "border-radius": "8px",
          },
        },
      };
      addUtilities(newUtilities);
    }),
  ],
};
