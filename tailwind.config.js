module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      height: {
        md: "50vh",
      },
      spacing: {
        "2/3": "66.666667%",
      },
      animation: {
        "fade-up": "moveUp 0.5s ease-in-out",
      },
      keyframes: {
        moveUp: {
          "0%": { transform: "translateY(20%)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
    },
    fontFamily: {
      Quicksand: ["Quicksand", "sans-serif"],
      Raleway: ["Raleway", "serif"],
    },
    container: {
      center: true,
    },
  },
  variants: {
    extend: {
      divideColor: ["group-hover"],
      margin: ["last"],
    },
  },
  plugins: [],
}
