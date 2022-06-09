module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#212F45",
        button: "#4338CA",
        "button-light": "#5D53FF",
      },
      screens: {
        xs: "360px",
        xsm: "400px",
        msm: "500px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
        "3xl": "1920px",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
