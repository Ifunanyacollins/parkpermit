module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
    },

    container: {
      padding: {
        DEFAULT: "1rem",
        lg: "1rem",
        xl: "4rem",
        "2xl": "10rem",
      },
    },
    extend: {
      fontFamily: {
        poppins: ["Poppins"],
        inter: ["Inter"],
        poppinsMedium: ["Poppins-Medium"],
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
