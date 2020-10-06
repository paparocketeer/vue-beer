module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true
  },
  purge: ["./src/**/*.html", "./src/**/*.vue", "./src/**/*.jsx"],
  theme: {
    container: {
      center: true,
      padding: {
        default: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem"
      }
    },
    fontFamily: {
      serif: ["Ultra", "serif"],
      sans: ["Open Sans Condensed", "sans-serif"]
    }
  },
  variants: {},
  plugins: []
};
