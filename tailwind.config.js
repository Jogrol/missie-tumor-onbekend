module.exports = {
  purge: ["./src/**/*.js", "./src/**/*.tsx"],
  darkMode: false,
  theme: {
    extend: {
         // Dark Blue #003665
        // Dark orange #D59355
        // Light orange #F5C6AA
        // Light brown #F6E1CC
        // Brown old #DDD6BE
        // Dark green #40688C
        // Light grey #EEF0F1
        // Black #2E3844
        // White #FFFFFF
      colors: {
        "green-100": "#A17D23",
        "brown-100": "#DDD6BE",
        "brown-200": "#D59355",
        "brown-300": "#987821",
        "gray-100": "#EEF0F1",
        'green-500': "#40688C",
        "blue-500": "#37167F",
        "blue-600": "#003665",
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
          primary: "#D59355",
          "primary-focus": "#F5C6AA",
          "primary-content": "#ffffff",
          secondary: "#F6E1CC",
          "secondary-focus": "#F5C6AA",
          "secondary-content": "#2E3844",
          tertairy: "#977921",
          accent: "#2E3844",
          "accent-focus": "#2aa79b",
          "accent-content": "white",
          neutral: "#EEF0F1",
          "neutral-focus": "#F6E1CC",
          "neutral-content": "#003665",
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
