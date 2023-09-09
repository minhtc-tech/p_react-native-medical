/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{ts,tsx}"],
  theme: {
    fontFamily: {
      rubik_400_regular: "Rubik_400Regular",
      rubik_500_medium: "Rubik_500Medium",
      rubik_600_semibold: "Rubik_600SemiBold",
    },
    colors: {
      white: "#ffffff",
      neutral: {
        100: "#fafafa", // rgb(250, 250, 250), rgba(250, 250, 250, 0.4);
        200: "#f4f4f4", // rgb(244, 244, 244)
        300: "#d9dbe0", // rgb(217, 219, 224)
        400: "#737885", // rgb(115, 120, 133)
        500: "#1a2c48", // rgb(26, 44, 72)
      },
      red: {
        500: "#ee574a",
      },
      primary: {
        500: "#204ff5", // rgb(32, 79, 245)
      },
    },
    extend: {},
  },
  plugins: [],
};
