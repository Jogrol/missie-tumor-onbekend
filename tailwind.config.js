module.exports = {
  purge: ["./src/**/*.js", "./src/**/*.tsx"],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        "green-100": "#A17D23",
        "brown-100": "#DDD6BD",
        "brown-200": "#977921",
        "blue-500": "#37167F",
        "blue-600": "#023765",
      },
      height: {
        hero: "448px",
        md: "50vh",
        lg: "80vh",
      },
      spacing: {
        "2/3": "66.666667%",
      },
      animation: {
        "in": "fadeIn 12s ease-in-out infinite",
        "out": "fadeIn 12s ease-in-out infinite 6s",
        // "fade-up-oposite": "fadeIn 12s ease-in-out infinite 6s",
        // "fade-up-with-delay": "fadeIn 10s ease-in-out infinite 8s",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "25%": { opacity: "1" },
          "50%": { opacity: "1" },
          "51%": { opacity: "0" },
          "75": { opacity: "1" },
          "100%": { opacity: "0" },
        },
      },
    },
    fontFamily: {
      // Quicksand: ["Quicksand", "sans-serif"],
      // Raleway: ["Raleway", "serif"],
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
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#F59E0B",
          "primary-focus": "#D97706",
          "primary-content": "blue",
          secondary: "#DDD6BD",
          "secondary-focus": "#977921",
          "secondary-content": "white",
          tertairy: "#977921",
          accent: "#37cdbe",
          "accent-focus": "#2aa79b",
          "accent-content": "wgite",
          neutral: "#3d4451",
          "neutral-focus": "#2a2e37",
          "neutral-content": "white",
          "base-100": "#ffffff",
          "base-200": "#f9fafb",
          "base-300": "#977921",
          "base-content": "#1f2937",
          info: "#2094f3",
          success: "#009485",
          warning: "#ff9900",
          error: "#ff5724",
        },
      },
    ],
  },
}
