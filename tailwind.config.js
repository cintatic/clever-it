const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  theme: {
    fontFamily: {
      sans: ["Montserrat", ...defaultTheme.fontFamily.sans],
    },
    extend: {
      colors: {
        "blue-clever": "#053f62ff",
        "blue-clever-light": "#0291baff",
      },
    },
  },

  plugins: [],
};
