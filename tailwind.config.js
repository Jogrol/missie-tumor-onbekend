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
