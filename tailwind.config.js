module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
    },

    extend: {
      colors: {
        primary: "#161A22",
        greyscale900: "#1A202C",
        greyscale600: "#718096",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
