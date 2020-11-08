const white_bg = require("../../assets/images/wave_light.svg"); // Import using relative path
const black_bg = require("../../assets/images/wave_black.svg"); // Import using relative path

module.exports = {
  purge: [
    "src/**/*.js",
    "src/**/*.jsx",
    "src/**/*.ts",
    "src/**/*.tsx",
    "public/**/*.html",
  ],
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        "white-landing": `url(${process.env.PUBLIC_URL + white_bg})`,
        "black-landing": `url(${process.env.PUBLIC_URL + black_bg})`,
      }),
    },
    textColor: {
      "nav-text": "#eaeaea",
    },
    fontFamily: {
      header: ["Poppins", "sans-serif"],
      body: ["Poppins", "sans-serif"],
    },
    boxShadow: {
      header: "0px 0px 50px 1px rgba(0, 0, 0, 0.35)",
      card: "0px 0px 25px 1px rgba(0, 0, 0, 0.25)",
    },
  },
  variants: {},
  plugins: [
    require("tailwindcss-transforms"),
    require("tailwindcss-transitions"),
    require("tailwindcss-border-gradients"),
  ],
};
