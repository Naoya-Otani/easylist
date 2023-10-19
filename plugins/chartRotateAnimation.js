module.exports = function ({ addBase }) {
  addBase({
    ".circle-graph": {
      position: "relative",
      animation: "fill 0.3s forwards",
    },
    "@keyframes fill": {
      "0%": { transform: "rotate(0deg)" },
      "100%": { transform: "rotate(360deg)" },
    },
    ".circle-background": {
      width: "100%",
      height: "100%",
      background: "radial-gradient(#ffffff 60%, transparent 61%)",
      position: "absolute",
      "clip-path": "polygon(0 0, 100% 0, 100% 100%)",
    },
  });
};
