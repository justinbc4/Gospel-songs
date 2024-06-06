/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        chivo: ["Chivo Mono", "monospace"],
        bitter: ["Bitter", "serif"],
        paduak:["Paduak","sans-serif"]
      },
    },
  },
  plugins: [
    //...other plugins
    require("@designbycode/tailwindcss-text-shadow")
    ({
      shadowColor: "rgba(0, 0, 0, 0.5)",
      shadowBlur: "3px",
      shadowOffsetX: "2px",
      shadowOffsetY: "2px",
  }),
  ],
};
