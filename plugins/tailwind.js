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
    ".read-more-five-lines": {
      display: "-webkit-box",
      "-webkit-line-clamp": "5",
      "-webkit-box-orient": "vertical",
      overflow: "hidden",
    },
    ".read-more-for-lines": {
      display: "-webkit-box",
      "-webkit-line-clamp": "4",
      "-webkit-box-orient": "vertical",
      overflow: "hidden",
    },
    ".read-more-three-lines": {
      display: "-webkit-box",
      "-webkit-line-clamp": "3",
      "-webkit-box-orient": "vertical",
      overflow: "hidden",
    },
    "@keyframes fadeIn": {
      "0%": { opacity: "0" },
      "100%": { opacity: "1" },
    },
    ".fade-in": {
      animation: "fadeIn 0.5s ease-in-out",
    },
    ".fade-in-slow": {
      animation: "fadeIn 1.5s ease-in-out",
    },
    "@keyframes fadeOut": {
      "0%": { opacity: "1" },
      "100%": { opacity: "0" },
    },
    ".fade-out": {
      animation: "fadeOut 0.5s ease-in-out",
    },
  });
};
