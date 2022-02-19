module.exports = {
  content: [
    "./pages/**/*.{js,jsx, ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        scroll: {
          "0%": {
            transform: "translateX(0)",
          },
          "100%": {
            transform: "translateX(calc(-250px * 2))",
          },
        },
        typing: {
          from: {
            width: "0",
          },
        },
        blink: {
          "50%": {
            "border-color": "transparent",
          },
        },
      },
      animation: {
        scroll: "scroll 15s ease-out infinite",
        typing:
          "typing 5s steps(32), blink 0.5s infinite step-end alternate !important",
      },
      width: {
        "32ch": "32ch",
      },
    },
  },
  plugins: [],
};
